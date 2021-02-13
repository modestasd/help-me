const ROUTES = {
    HOME: '/',
};

export type Path = typeof ROUTES[keyof typeof ROUTES];

export default ROUTES;