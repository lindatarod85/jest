import logoutButton from './logoutButton';
import { clearStorage } from '../../utils/storage';

describe('logoutButton', () => {
  test('should call clearStorage function and redirect to "/"', () => {
    // Mock the clearStorage function
    const clearStorageMock = jest.fn();

    // Mock the storage object
    const storage = {
      clearStorage: clearStorageMock,
    };

    // Simulate the button click
    logoutButton();

    // Check if the clearStorage function was called
    expect(clearStorageMock).toHaveBeenCalled();

    // Check if the location.href was set to "/"
    expect(location.href).toBe('/');
  });
});




