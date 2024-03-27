import authSubmitHandler, {
  handleLoginSubmit,
  handleRegistrationSubmit
} from '@/utils/authSubmitHandler';

describe('The auth submit handler', () => {
  it('should return handle login submit when called with login', () => {
    expect(authSubmitHandler('login')).toEqual(handleLoginSubmit);
  });
  it('should return handle registration submit when called with register', () => {
    expect(authSubmitHandler('register')).toEqual(handleRegistrationSubmit);
  });
  it('should return handle login submit by default', () => {
    expect(authSubmitHandler('')).toEqual(handleLoginSubmit);
  });
});

describe('Auth submit handlers:', () => {
  describe('The login submit handler', () => {
    it('should return empty object for now', () => {
      return handleLoginSubmit({}).then((submitterReturn) => {
        expect(submitterReturn).toBe('foo');
      });
    });
  });
  describe('The registration submit handler', () => {
    it('should return empty object for now', () => {
      return handleRegistrationSubmit({}).then((submitterReturn) => {
        expect(submitterReturn).toBe('foo');
      });
    });
  });
});
