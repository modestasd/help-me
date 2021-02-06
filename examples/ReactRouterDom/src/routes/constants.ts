const ROUTES = {
    NOT_FOUND: '/404',
    HOME: '/',
    WELCOME: '/welcome',
    USERS: '/users',
    USERS_PROFILE: '/users/:id',
};

export type Path = typeof ROUTES[keyof typeof ROUTES];

export default ROUTES;