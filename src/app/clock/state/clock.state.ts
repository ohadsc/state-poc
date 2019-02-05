
export interface ClockState {
  color: string;
  mask: string;
};

export const initialClockState: ClockState = {
  color: 'black',
  mask: 'HH:mm:ss'
};
