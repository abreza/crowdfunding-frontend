import { indexType } from './generalTypes';

// lastWarningRowType[state]=> 0===error/1===intervention Sent/2===fixed

export type lastWarningRowType = {
  index: indexType;
  title: string;
  date: string;
  state: 0 | 1 | 2;
};
export type deviceDataType = {
  logicalDeviceName: number;
  consumption: number;
  temperature: number;
  time: string;
};
export type deviceStatusType = {
  logicalDeviceName: number;
  state: string;
  batteryLevels: {};
  time: string;
};
export type deviceEventsType = {
  logicalDeviceName: number;
  deviceStatus: {
    state: string;
    batteryLevels: {
      AState: string;
      CState: string;
      DState: string;
    };
    tampers: string[];
    time: string;
  };
  deviceData: {
    consumption: number;
    correctedConsumption: number;
    totalConsumption: number;
    temperature: number;
    time: string;
    isWarning: boolean;
  };
  deviceEventData: {
    type: string;
  };
  time: string;
};
export type orderType = {
  id?: string;
  logicalDeviceName: number;
  scheduleTime: string;
  sentTime?: string;
  employee: string;
  orderData: {
    type: string;
    nextState: boolean;
  };
};
export type statisticType = {
  value: number;
  time: string;
};
export type batteryLevelType = {
  batteryLevels: {
    A: number;
    AState: 'c' | 'n';
    C: number;
    CState: 'c' | 'n';
    D: number;
    DState: 'c' | 'n';
  };
  time: string;
};
export type statisticsType = 'CONSUMPTION' | 'TEMPERATURE' | 'BATTERY_LEVEL';
export type getStatisticsRequestType = {
  from: string;
  to: string;
  type: statisticsType;
  logicalDeviceName: number;
};
