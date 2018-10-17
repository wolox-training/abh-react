export const checkRoute = (routesToCheck, pathname) =>
  Object.keys(routesToCheck).some(key => routesToCheck[key].path === pathname);

export const getRouteName = (routesToCheck, location) => {
  const route = Object.keys(routesToCheck).find(item => routesToCheck[item].path === location);
  return routesToCheck[route].name;
};
