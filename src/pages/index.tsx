import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersListRequestAction } from "../store/actions/getUsersList.actions";
import { ReduxState } from "../store/reduxState";
import styles from "../styles/Home.module.css";

const UserList: NextPage = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state: ReduxState) => state.usersState);

  useEffect(() => {
    dispatch(getUsersListRequestAction());
  }, [dispatch]);

  return (
    <>
      {usersList && usersList.map((user) => <h1 key={user.id}>{user.name}</h1>)}
    </>
  );
};

export default UserList;
