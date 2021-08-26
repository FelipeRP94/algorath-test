import { createDefaultUsersState, UsersState } from "../../model/user";
import { getUsersListActionTypes } from "../../store/actions/getUsersList.actions";
import { usersReducer } from "../../store/reducers/user.reducer";

describe("usersReducer", () => {
  let originalState: UsersState;

  beforeEach(() => {
    originalState = createDefaultUsersState();
  });

  it("Should return same state when passing a not expected action", () => {
    // Arrange
    const fakeAction = {
      type: "FAKE_ACTION",
      payload: "",
    };

    // Act
    const newState = usersReducer(originalState, fakeAction);

    // Assert
    expect(newState).toBe(originalState);
  });

  it("Should return new state with users information when passing a success action", () => {
    // Arrange
    const getUsersListSucessAction = {
      type: getUsersListActionTypes.GET_USERS_LIST_SUCCESS,
      payload: [
        { id: 1, name: "Felipe Ruiz" },
        { id: 2, name: "Carlos Montoya" },
      ],
    };

    // Act
    const newState = usersReducer(originalState, getUsersListSucessAction);

    // Assert
    expect(newState).toStrictEqual({ ...originalState, ...newState });
  });
});
