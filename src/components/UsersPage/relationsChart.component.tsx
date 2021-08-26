import { Doughnut } from "react-chartjs-2";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { User } from "../../model/user";

interface Props {
  users: User[];
  modalOpen: boolean;
  onClose: () => void;
}

export const RelationsChart = (props: Props) => {
  const { users, modalOpen, onClose } = props;
  const data = [0, 0, 0, 0, 0];

  users &&
    users.forEach((user) => {
      const totalConnectedUsers = user.connectedUsers?.length || 0;

      const conditionsToFillData: { [key: number]: boolean } = {
        0: totalConnectedUsers === 0,
        1: totalConnectedUsers >= 1 && totalConnectedUsers <= 3,
        2: totalConnectedUsers >= 4 && totalConnectedUsers <= 6,
        3: totalConnectedUsers >= 7 && totalConnectedUsers <= 9,
        4: totalConnectedUsers > 9,
      };

      Object.keys(conditionsToFillData).forEach((conditionIndex) => {
        conditionsToFillData[+conditionIndex] && data[+conditionIndex]++;
      });
    });

  const chartInfo = {
    labels: ["0", "1-3", "4-6", "7-9", "+9"],
    datasets: [
      {
        label: "# of relations",
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Modal onClose={onClose} size="xl" isOpen={modalOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Number of Relations</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Doughnut data={chartInfo} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
