import {saveToken, getToken} from "./storage.js";


test('token is saved to storage', async () => {
    const token = 'sample-token';
    await saveToken(token); // Assuming saveToken function saves the token to storage
  
    const storedToken = await getToken(); // Assuming getToken function retrieves the stored token from storage
    expect(storedToken).toBe(token);
  });
  

  


