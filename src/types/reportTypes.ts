export type reportFileTypeType = 'CSV' | 'EXCEL';

export type reportOptionsType =
  | 'DEVICE_PROFILE'
  | 'DEVICE_DATA'
  | 'DEVICE_STATUS'
  | 'ACTIONS, ORDERS'
  | 'INTERVENTIONS';

export type generateReportReportStatusType =
  | 'PENDING'
  | 'PREPARING'
  | 'READY'
  | 'FAILED';

export type generateReportReportType = {
  status: generateReportReportStatusType;
  estimatedTime?: string;
  link?: string;
};

export type generateReportRequestType = {
  logicalDeviceNames: number[];
  reportOptions: reportOptionsType[];
  from: string;
  to: string;
  fileType: reportFileTypeType;
};

export type generateReportResponseType = {
  id: string;
  report: generateReportReportType;
};

export type reportHistory = {
  id: string;
  creator: string;
  reportOptions: reportOptionsType[];
  from: string;
  to: string;
  report: generateReportReportType;
};
