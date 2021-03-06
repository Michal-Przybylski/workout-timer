export const msToHMS = (ms: number) => {
  const totalSeconds = ms / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  return { seconds, minutes, hours };
};
