import { addUserRequestAction } from "../store/actions/addUser.actions";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { getUsersListRequestAction } from "../store/actions/getUsersList.actions";
import { ReduxState } from "../store/reduxState";
import { RelationsChart } from "../components/UsersPage/relationsChart.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UsersTable } from "../components/UsersPage/usersTable.component";
import React, { useState } from "react";
import styles from "../styles/Users.module.css";
import toast from "react-hot-toast";
import type { NextPage } from "next";

const UserList: NextPage = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state: ReduxState) => state.usersState);
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getUsersListRequestAction());
  }, [dispatch]);

  const onChangeName = (event: any) => setName(event.target.value);
  const createUser = () => {
    if (name === "") {
      toast.error("Name is required");
    } else {
      dispatch(addUserRequestAction(name));
      setName("");
    }
  };

  return (
    <>
      <div className={styles.createUser}>
        <Input placeholder="New user" onChange={onChangeName} value={name} />
        <Button colorScheme="blue" onClick={createUser}>
          Add User
        </Button>
      </div>
      <hr />
      {usersList && usersList.length > 0 ? (
        <>
          <Button className={styles.stats} colorScheme="blue" onClick={onOpen}>
            Show stats
          </Button>
          <UsersTable users={usersList} />
        </>
      ) : (
        <h1>Loading users...</h1>
      )}
      <RelationsChart users={usersList} modalOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default UserList;
