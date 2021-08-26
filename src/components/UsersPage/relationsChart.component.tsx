import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
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

      const conditionsToFillData = {
        0: totalConnectedUsers === 0,
        1: totalConnectedUsers >= 1 && totalConnectedUsers <= 5,
        2: totalConnectedUsers >= 6 && totalConnectedUsers <= 10,
        3: totalConnectedUsers >= 11 && totalConnectedUsers <= 15,
        4: totalConnectedUsers > 15,
      };

      Object.keys(conditionsToFillData).forEach((conditionIndex: string) => {
        conditionsToFillData[conditionIndex] && data[conditionIndex]++;
      });
    });

  const chartInfo = {
    labels: ["0", "1-5", "6-10", "11-15", "+15"],
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
