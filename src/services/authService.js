export const authService = {
  login: async (credentials) => {
    // Simulace chvilkového načítání
    await new Promise(resolve => setTimeout(resolve, 500)); 

    if (credentials.email === 'admin@test.cz' && credentials.password === 'heslo') {
      const fakeData = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.falesnyToken",
        user: { name: "Petr Karásek", email: "admin@test.cz", role: "Admin" }
      };
      localStorage.setItem('token', fakeData.token);
      localStorage.setItem('user', JSON.stringify(fakeData.user));
      return fakeData;
    } else {
      throw new Error('Špatný email nebo heslo');
    }
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  getUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
  
  getToken: () => localStorage.getItem('token'),
  isAuthenticated: () => !!localStorage.getItem('token')
};