import {
  getUsersListActionTypes,
  getUsersListRequestAction,
  getUsersListSucessAction,
} from "../../store/actions/getUsersList.actions";

describe("getUsersListRequestAction", () => {
  it("Contains the expected type GET_USERS_LIST_REQUEST", () => {
    // Act
    const action = getUsersListRequestAction();

    // Assert
    expect(action.type).toBe(getUsersListActionTypes.GET_USERS_LIST_REQUEST);
  });

  it("Contains the expected payload as null", () => {
    // Act
    const action = getUsersListRequestAction();

    // Assert
    expect(action.payload).toBeNull();
  });
});

describe("getUsersListSucessAction", () => {
  const userList = [
    { id: 1, name: "Felipe Ruiz" },
    { id: 2, name: "Carlos Montoya" },
  ];

  it("Contains the expected type GET_USERS_LIST_SUCCESS", () => {
    // Act
    const action = getUsersListSucessAction(userList);

    // Assert
    expect(action.type).toBe(getUsersListActionTypes.GET_USERS_LIST_SUCCESS);
  });

  it("Contains the expected payload as null", () => {
    // Act
    const action = getUsersListSucessAction(userList);

    // Assert
    expect(action.payload).toEqual(userList);
  });
});
