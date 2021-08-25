import { User } from "../../model/user";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface Props {
  users: User[];
}

export const UsersTable = (props: Props) => {
  const { users } = props;

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Connected users</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.connectedUsers?.length}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
