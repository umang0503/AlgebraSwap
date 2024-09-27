export const toWei = (number: string, decimals = 18) => {
  return parseFloat(number) * 10 ** decimals;
};
