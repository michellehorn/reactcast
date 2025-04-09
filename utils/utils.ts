export const capitalize = (str: string) => {
  console.log(str)
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
