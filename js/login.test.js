import {doLogin} from "./login.js";


/*describe("doLogin", () => {
    it ("Should fetch the API", async () =>{
        global.fetch = jest.fn(() => Promise.resolve({}));
    
        await doLogin();
    
        expect.assertions(1);
    });
    });*/



/* Tried this*/
   /* describe('doLogin', () => {
        it('Should fetch the API', async () => {
          global.fetch = jest.fn(() => Promise.resolve({}));
      
          await doLogin();
      
          expect(fetchMock).toHaveBeenCalledTimes(1);
        });
      })*/



      /* Tried this*/
      describe("doLogin", () => {
        it("should fetch the API", async () => {
          const data = await doLogin();
          expect(data).toHaveBeenCalled();
        })
      })