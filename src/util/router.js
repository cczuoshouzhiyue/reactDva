export function goRouters(path, routerData) {
  const routers = [];
  for (let key in routerData) {
    routers.push({
      path: key,
      component: routerData[key].component
    });
  }
  return routers;
}

//
// const getRenderArr = routerData => {
//   const arr = [];
//   for (let key in routerData) {
//     arr.push(key);
//   }
//   return arr;
// };