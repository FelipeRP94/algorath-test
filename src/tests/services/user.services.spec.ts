import fetchMock from "fetch-mock";
import { userService } from "../../services/user.services";
import { userListMock } from "../mock/userList.mock";

describe("userServices", () => {
  const url = "api/users";

  afterEach(() => {
    fetchMock.restore();
  });

  describe("getUsersList", () => {
    it("Should make a GET request to /api/users", async () => {
      // Arrange
      fetchMock.get(url, userListMock);

      // Act
      await userService.getUsersList();

      // Assert
      expect(fetchMock.called(url)).toEqual(true);
    });

    it("Should make a GET request to /api/users and return the users if response is ok", async () => {
      // Arrange
      fetchMock.get(url, userListMock);

      // Act
      const result = await userService.getUsersList();

      // Assert
      expect(JSON.stringify(result)).toEqual(JSON.stringify(userListMock));
    });

    it("Should make a GET request to /api/users and return an error if response is 500", async () => {
      // Arrange
      fetchMock.get(url, 500);

      // Act
      try {
        await userService.getUsersList();
      } catch (error) {
        // Assert
        expect(error.message).toContain("Error getting users");
      }
    });
  });

  describe("addUser", () => {
    it("Should make a PUT request to /api/users", async () => {
      // Arrange
      fetchMock.put(url, true);

      // Act
      await userService.addUser("Felipe");

      // Assert
      expect(fetchMock.called(url)).toEqual(true);
    });

    it("Should make a PUT request to /api/users and return true if response is ok", async () => {
      // Arrange
      fetchMock.put(url, true);

      // Act
      const result = await userService.addUser("Felipe");

      // Assert
      expect(JSON.stringify(result)).toEqual(JSON.stringify(true));
    });

    it("Should make a PUT request to /api/users and return an error if response is 500", async () => {
      // Arrange
      fetchMock.put(url, 500);

      // Act
      try {
        await userService.addUser("Felipe");
      } catch (error) {
        // Assert
        expect(error.message).toContain("Error creating user");
      }
    });
  });

  describe("connectUser", () => {
    const connectUserData = { user1Id: 1, user2Id: 2 };

    it("Should make a POST request to /api/users", async () => {
      // Arrange
      fetchMock.post(url, true);

      // Act
      await userService.connectUser(connectUserData);

      // Assert
      expect(fetchMock.called(url)).toEqual(true);
    });

    it("Should make a POST request to /api/users and return true if response is ok", async () => {
      // Arrange
      fetchMock.post(url, true);

      // Act
      const result = await userService.connectUser(connectUserData);

      // Assert
      expect(JSON.stringify(result)).toEqual(JSON.stringify(true));
    });

    it("Should make a POST request to /api/users and return an error if response is 500", async () => {
      // Arrange
      fetchMock.post(url, 500);

      // Act
      try {
        await userService.connectUser(connectUserData);
      } catch (error) {
        // Assert
        expect(error.message).toContain("Error connecting user");
      }
    });
  });
});
