import type { NextPage } from "next";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersListRequestAction } from "../store/actions/getUsersList.actions";
import { ReduxState } from "../store/reduxState";
import { addUserRequestAction } from "../store/actions/addUser.actions";
import { Button, Input } from "@chakra-ui/react";
import { UsersTable } from "../components/UsersPage/usersTable.component";
import toast from "react-hot-toast";
import styles from "../styles/Users.module.css";

const UserList: NextPage = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state: ReduxState) => state.usersState);
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getUsersListRequestAction());
  }, [dispatch]);

  const onChangeName = (event: any) => setName(event.target.value);
  const createUser = () => {
    if (name === "") {
      toast.error("Name is required");
    } else {
      dispatch(addUserRequestAction(name));
    }
  };

  return (
    <>
      <div className={styles.createUser}>
        <Input placeholder="New user" onChange={onChangeName} />
        <Button colorScheme="blue" onClick={createUser}>
          Add User
        </Button>
      </div>

      {usersList && usersList.length > 0 ? (
        <UsersTable users={usersList} />
      ) : (
        <h1>Loading users...</h1>
      )}
    </>
  );
};

export default UserList;
