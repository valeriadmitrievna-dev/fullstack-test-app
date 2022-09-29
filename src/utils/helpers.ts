export const getStringWithNormalSpaces = (value: string) =>
  value.replace(/ +(?= )/g, "").trim();
