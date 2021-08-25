import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { UserDetailDialog } from "./userDetails.component";
import { User } from "../../model/user";
import { useState } from "react";

interface Props {
  users: User[];
}

export const UsersTable = (props: Props) => {
  const { users } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState({ id: 0, name: "" });

  const showUserDetails = (user: User) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Connected users</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.connectedUsers?.length}</Td>
              <Td>
                <Button onClick={() => showUserDetails(user)}>Details</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedUser && (
        <UserDetailDialog
          user={selectedUser}
          modalOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};
