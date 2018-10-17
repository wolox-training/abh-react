const ROUTES = {
  PUBLIC: {},
  AUTH: {
    LOGIN: { name: 'login', path: '/login' },
    REGISTER: { name: 'register', path: '/register' }
  },
  PRIVATE: {
    HOME: { name: 'home', path: '/' },
    GAME: { name: 'game', path: '/game' }
  }
};

export { ROUTES as default };
