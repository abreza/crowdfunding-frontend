export type messageType = {
  message: {
    type: 'Buffer';
    data: number[];
  };
};

export type deviceConnectionConnectionType = 'TCP' | 'UDP';
export type deviceConnectionType = 'DATA' | 'ORDER';

export type receivedMessagesType = {
  _id: string;
  type: deviceConnectionType;
  message: messageType;
  date: string;
  connectionType: deviceConnectionConnectionType;
  isSent?: boolean;
  address?: string;
  port: number;
  __v: number;
};
