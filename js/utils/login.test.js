import {doLogin} from "../login.js";

describe("doLogin", () => {
    it ("Should fetch the API", async () =>{
        global.fetch = jest.fn(() => Promise.resolve({}));
    
        await doLogin();
    
        expect.assertions(1);
    });
    });