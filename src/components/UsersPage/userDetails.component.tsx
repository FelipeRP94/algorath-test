import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";
import { User } from "../../model/user";
import styles from "../../styles/UserDetail.module.css";

interface Props {
  user: User;
  modalOpen: boolean;
  onClose: () => void;
}

export const UserDetailDialog = (props: Props) => {
  const { user, modalOpen, onClose } = props;

  return (
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
          <Heading as="h4" size="md">
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
