export const sortListByIdx = (
  list: { data: [string, number, number] | number[] }[],
  idx: number,
  direction: string
) => {
  if (direction === "ASC") {
    return list.sort((a, b) => Number(a.data[idx]) - Number(b.data[idx]));
  }
  return list.sort((a, b) => Number(b.data[idx]) - Number(a.data[idx]));
};
