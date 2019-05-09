
function getUserLanguage() {
  return navigator.language;
}

function getElapsedTimeInUserLanguage(timeInSeconds: number) {
  const userLanguage = getUserLanguage();
  //@ts-ignore
  // This doesn't seem to be supported in TypesCript (yet)
  const elapsedTimeFormatter = new Intl.RelativeTimeFormat(userLanguage, { numeric: 'auto' });

  return elapsedTimeFormatter.format(-timeInSeconds, 'second');
}

export { getElapsedTimeInUserLanguage, getUserLanguage };