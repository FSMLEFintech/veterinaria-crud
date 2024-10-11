export const calculateSum = (items, key) => {
    return items.reduce((sum, item) => sum + item[key], 0);
  };
  