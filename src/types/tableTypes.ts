import { indexType } from './generalTypes';

export type tableRowCellType = {
  id?: indexType;
  date?: Date | string | number;
  label?: Array<indexType> | string | number;
  tag?: Array<indexType>;
  icon?: 'location';
  index?: indexType;
  toolTip?: string;
  minWidth?: number;
  align?: string;
  more?: any;
  status?: 'normal' | 'error' | 'warning';
  color?: string;
};

export type tableHeadCellType = {
  id: string;
  disablePadding?: boolean;
  label: string;
};

export type selectedRowsType = Array<indexType>;

export type orderType = 'asc' | 'desc';

export type orderByType = indexType;

export type tableExceptionActionType = 0 | 1 | 2;

export type tableExceptionsType = {
  actionType: tableExceptionActionType;
  index: indexType;
};

export type deviceTableRowType = {
  'Logical Name'?: { label: tableRowCellType['label'] };
  'Metering point ID'?: { label: tableRowCellType['label'] };
  Location?: {
    label: tableRowCellType['label'];
    icon: tableRowCellType['icon'];
    toolTip?: tableRowCellType['toolTip'];
  };
  Condition?: {
    label: tableRowCellType['label'];
  };
  Consumption?: {
    label: tableRowCellType['label'];
  };
  id?: {
    id: tableRowCellType['id'];
  };
};

export type employeeTableRowType = {
  Employee?: { label: tableRowCellType['label'] };
  'National Id'?: { label: tableRowCellType['label'] };
};

export type devicesModelTableRowType = {
  Name: { label: tableRowCellType['label'] };
  Firmware: { label: tableRowCellType['label'] };
  Description: { label: tableRowCellType['label'] };
  id: {
    id: tableRowCellType['id'];
  };
};
