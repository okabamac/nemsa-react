import axios from 'axios';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login (email, password, props) {
      try {
        const { data } = await axios.post(
        `https://nemsa-backend.herokuapp.com/api/v1/users/login`, {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("expire_at", Date.now());
      localStorage.setItem("first_name", data.data.first_name);
      localStorage.setItem("last_name", data.data.last_name);
      this.authenticated = true;
      return data;
      } catch (error) {
          throw error;
      }
  };

  // removes user details from localStorage
  logout () {
    this.authenticated = false;
    localStorage.removeItem("token");
    localStorage.removeItem("expire_at");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
  };

  // checks if the user is authenticated
  isAuthenticated  () {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem("expire_at"));
    if (!expiresAt) return false;
    return new Date().getTime() >= expiresAt;
  };
}

export default new Auth();
