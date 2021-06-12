export type createDeviceType = {
  logicalDeviceName: number;
  meteringPointIdentifier: number;
  lat: number;
  lng: number;
  address: string;
  modelName: string;
  firmwareVersion: string;
};
export type searchDeviceType = {
  logicalDeviceName?: number;
  meteringPointIdentifier?: number;
  lat?: number;
  lng?: number;
  address?: string;
  modelName?: string;
  firmwareVersion?: string;
};
export type getAllModelsType = {
  id?: string;
  name?: string;
  imageAddress?: string;
  description?: string;
};
export type deviceModelType = {
  id: string;
  supportedFirmware: Array<deviceFirmwareType>;
  name: string;
  imageAddress: string;
  description: string;
};
export type createDeviceModelType = {
  id?: string;
  name: string;
  imageAddress: string;
  description: string;
  supportedFirmwareIds: Array<string>;
};
export type deviceFirmwareType = {
  id?: string;
  version: string;
  fileAddress: string;
  description: string;
  modelId: string;
};
export type deviceType = {
  id: string;
  logicalDeviceName: number;
  meteringPointIdentifier: number;
  isActivated: true;
  lat: number;
  lng: number;
  address: string;
  modelName: string;
  firmwareVersion: string;
};
