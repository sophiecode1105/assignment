export const sortListByIdx = (list: (string | number)[][], idx: number, direction: string) => {
  if ((direction = "asc")) {
    return list.sort((a, b) => Number(a[idx]) - Number(b[idx]));
  }
  return list.sort((a, b) => Number(b[idx]) - Number(a[idx]));
};
