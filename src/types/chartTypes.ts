export type perCapitaConsumptionDataType = {
  consumptionAverage: number;
  time: string;
};
export type chartDataType = {
  value: number;
  time: string;
};

export enum chartPeriodType {
  typeOne = '7day',
  typeTwo = '30day',
  typeThree = '6month',
}
