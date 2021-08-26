import {
  getUsersListActionTypes,
  getUsersListRequestAction,
  getUsersListSucessAction,
} from "../../store/actions/getUsersList.actions";
import { userListMock } from "../mock/userList.mock";

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
  it("Contains the expected type GET_USERS_LIST_SUCCESS", () => {
    // Act
    const action = getUsersListSucessAction(userListMock);

    // Assert
    expect(action.type).toBe(getUsersListActionTypes.GET_USERS_LIST_SUCCESS);
  });

  it("Contains the expected payload as null", () => {
    // Act
    const action = getUsersListSucessAction(userListMock);

    // Assert
    expect(action.payload).toEqual(userListMock);
  });
});
