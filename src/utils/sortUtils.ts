import { orderByType, orderType } from 'types/tableTypes';

const comparator = (a: any, b: any, orderBy: any, sortType: string) => {
  let a1 = a[orderBy][sortType];
  let b1 = b[orderBy][sortType];
  if (isNaN(parseInt(a1))) {
    a1 = a1.toLowerCase();
    b1 = b1.toLowerCase();
    if (b1 < a1) {
      return -1;
    } else if (b1 > a1) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (parseInt(b1) < parseInt(a1)) {
      return -1;
    } else if (parseInt(b1) > parseInt(a1)) {
      return 1;
    } else {
      return 0;
    }
  }
};

export const tableSort = (
  array: Array<any>,
  order: orderType,
  orderBy: orderByType,
  sortType: string
) => {
  return array.sort((a: any, b: any) =>
    order === 'desc'
      ? comparator(a, b, orderBy, sortType)
      : -comparator(a, b, orderBy, sortType)
  );
};
