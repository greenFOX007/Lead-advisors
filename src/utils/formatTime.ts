export const formatTime = (time: number | string): number | string =>
  Number(time) < 10 ? `0${time}` : time;
