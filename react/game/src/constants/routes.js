const ROUTES = {
  PUBLIC: {},
  AUTH: {
    LOGIN: { id: 'login', name: 'Login', path: '/login' },
    REGISTER: { id: 'register', name: 'Register', path: '/register' }
  },
  PRIVATE: {
    HOME: { id: 'home', name: 'Home', path: '/' },
    GAME: { id: 'game', name: 'Game', path: '/game' },
    PROFILE: { id: 'profile', name: 'My Profile', path: '/profile' }
  }
};

export { ROUTES as default };
