export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObjProps
) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};

export const changeIdInAllObjectsInArray = (items, objPropName) => {
  return items.map((u) => {
    let propValue = items.indexOf(u);
    let newProp = { [objPropName]: propValue };
    return { ...u, ...newProp };
  });
};

export const takeObjectFromArrayAndChangeProps = (
  items,
  itemId,
  objPropName,
  newObjProps
) => {
  let obj = items.filter((u) => u[objPropName] === itemId)[0];
  return { ...obj, ...newObjProps };
};

export const findQuantityOfObjsMatchingConditionsInArray = (
  items,
  objPropName,
  objPropValue
) => {
  return items.filter((i) => i[objPropName] === objPropValue).length;
};
