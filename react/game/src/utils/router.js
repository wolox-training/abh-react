export const checkRoute = (routeToCheck, pathname) =>
  Object.keys(routeToCheck).some(key => routeToCheck[key].path === pathname);
