import {
  addUserActionTypes,
  addUserRequestAction,
} from "../../store/actions/addUser.actions";

describe("addUserRequestAction", () => {
  const name = "Felipe Ruiz";

  it("Contains the expected type ADD_USER_REQUEST", () => {
    // Act
    const action = addUserRequestAction(name);

    // Assert
    expect(action.type).toBe(addUserActionTypes.ADD_USER_REQUEST);
  });

  it("Contains the expected payload as new user name", () => {
    // Act
    const action = addUserRequestAction(name);

    // Assert
    expect(action.payload).toBe(name);
  });
});
