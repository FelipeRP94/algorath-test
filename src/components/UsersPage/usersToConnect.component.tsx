import { connectUserAction } from "../../store/actions/connectUser.actions";
import { ReduxState } from "../../store/reduxState";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../model/user";

interface Props {
  baseUser: User;
}

export const UsersToConnectTable = (props: Props) => {
  const { baseUser } = props;
  const dispatch = useDispatch();
  const allUsers = useSelector(
    (state: ReduxState) => state.usersState.usersList
  );

  const usersToConnect = allUsers.filter(
    (user) =>
      user.id !== baseUser.id &&
      !baseUser.connectedUsers?.map((user) => user.id).includes(user.id)
  );

  const connectUser = (user: User) => {
    dispatch(connectUserAction(baseUser.id, user.id));
  };

  return usersToConnect.length > 0 ? (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Connect</Th>
        </Tr>
      </Thead>
      <Tbody>
        {usersToConnect.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>
              <Button onClick={() => connectUser(user)}>Connect</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <p>No users available</p>
  );
};
