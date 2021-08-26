import {
  connectUserAction,
  connectUserActionTypes,
} from "../../store/actions/connectUser.actions";

describe("connectUserAction", () => {
  const user1Id = 1;
  const user2Id = 2;

  it("Contains the expected type CONNECT_USER_REQUEST", () => {
    // Act
    const action = connectUserAction(user1Id, user2Id);

    // Assert
    expect(action.type).toBe(connectUserActionTypes.CONNECT_USER_REQUEST);
  });

  it("Contains the expected payload as users to connect IDs", () => {
    // Act
    const action = connectUserAction(user1Id, user2Id);

    // Assert
    expect(action.payload).toEqual({ user1Id, user2Id });
  });
});
