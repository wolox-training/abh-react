export const checkRoute = (routeToCheck, pathname) =>
  Object.keys(routeToCheck).some(key => {
    if (routeToCheck[key].path === pathname) return true;
    return false;
  });
