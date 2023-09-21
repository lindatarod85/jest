import {doLogin} from "./login.js";


describe("doLogin function", () => {
  it("should call fetch", async () => {
      const mockFetch = jest.fn(() =>
          Promise.resolve({
              json: jest.fn().mockResolvedValue({}),
          })
      );
      global.fetch = mockFetch;
      await doLogin("testuser", "testpassword");
      expect(mockFetch).toHaveBeenCalled();
  });
});




