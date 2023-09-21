import { doLogin } from "../js/login";

// Mock the fetch function

describe("doLogin", () => {
  it("logs in a user successfully", async () => {
    global.fetch = jest.fn(() => Promise.resolve({}));

    const mockResponse = {
      user: { username: "testuser" },
      jwt: "token",
    };

    // Mock the fetch function to return the mockResponse
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    // Mock other functions like saveToken, saveUser, and location.href if needed
    const saveToken = jest.fn();
    const saveUser = jest.fn();
    const redirectToHomePage = jest.fn();

    // Call the doLogin function
    await doLogin(
      "testuser",
      "password",
      saveToken,
      saveUser,
      redirectToHomePage
    );

    // Assert that fetch was called with the correct URL and options
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/auth/local"), {
      method: "POST",
      body: expect.any(String),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  test("displays an error message for invalid credentials", async () => {
    const mockResponse = {
      error: "Invalid login credentials",
    };

    // Mock the fetch function to return the mockResponse
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    // Mock the displayMessage function if needed
    const displayMessage = jest.fn();

    // Call the doLogin function
    await doLogin(
      "invaliduser",
      "wrongpassword",
      undefined,
      undefined,
      undefined,
      displayMessage
    );

    // Assert that fetch was called with the correct URL and options
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/auth/local"), {
      method: "POST",
      body: expect.any(String),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add more assertions here to ensure the error message is displayed.
    // For example, you can use jest.spyOn() to check if displayMessage
    // was called with the expected arguments.
  });

  // Add more test cases as needed.
});