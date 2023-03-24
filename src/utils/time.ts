const switchTimeZone = (offset:any)=> {
  const now = new Date();
  const currentTime = now.getTime();
  const newTime = currentTime + (offset * 1000);
  now.setTime(newTime);
  const formatHour = `${now.getHours() + 5 }:${now.getMinutes()}`;
  return formatHour;
}

//console.log(switchTimeZone(-1800));
export default switchTimeZone;
