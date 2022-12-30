export function preparingDateAndTime(dateTime: string) {
  const day = dateTime.slice(8,10)
  const month = dateTime.slice(5,7);

  const date = `${day}/${month}`;

  const hours = dateTime.slice(11,13);
  const minutes = dateTime.slice(14,16);
    
  const time = `${String(+hours+2)}-${minutes}`;

  return {
    date,
    time,
  };
}