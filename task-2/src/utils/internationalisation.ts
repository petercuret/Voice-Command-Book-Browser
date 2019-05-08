
function getUserLanguage() {
  return navigator.language;
}

function getElapsedTimeInUserLanguage(timeInSeconds : number) {
  const userLanguage = getUserLanguage();
  //@ts-ignore
  const elapsedTimeFormatter = new Intl.RelativeTimeFormat(userLanguage, { numeric: 'auto' }); // This doesn't seem to be supported in TypesCript (yet)
  return elapsedTimeFormatter.format(-timeInSeconds, 'second');
}

export { getElapsedTimeInUserLanguage, getUserLanguage };