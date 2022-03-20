export const snakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, function (s) {
    return "_" + s.charAt(0).toLowerCase();
  });
};
