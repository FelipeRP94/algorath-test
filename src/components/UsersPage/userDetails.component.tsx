import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store/reduxState";
import styles from "../../styles/UserDetail.module.css";
import { UsersToConnectTable } from "./usersToConnect.component";

interface Props {
  userId: number;
  modalOpen: boolean;
  onClose: () => void;
}

export const UserDetailDialog = (props: Props) => {
  const { userId, modalOpen, onClose } = props;

  const user = useSelector((state: ReduxState) =>
    state.usersState.usersList.find((user) => user.id === userId)
  );

  return user ? (
    <Modal onClose={onClose} size="xl" isOpen={modalOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h4" size="lg">
            {user.name}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading className={styles.heading} as="h4" size="md">
            Connections
          </Heading>
          {user.connectedUsers && user.connectedUsers.length > 0 ? (
            <ul className={styles.connections}>
              {user.connectedUsers.map((connectedUser) => (
                <li key={connectedUser.id}>{connectedUser.name}</li>
              ))}
            </ul>
          ) : (
            <p>No connections yet</p>
          )}
          <hr />
          <Heading className={styles.heading} as="h4" size="md">
            Connect to users
          </Heading>
          <UsersToConnectTable baseUser={user} />
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : (
    <></>
  );
};
