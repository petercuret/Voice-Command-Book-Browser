const SCREEN_SIZE_SMALL = 'S';
const SCREEN_SIZE_MEDIUM = 'M';
const SCREEN_SIZE_LARGE = 'L';

function getScreenSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1280) {
    return SCREEN_SIZE_LARGE;
  }
  if (windowWidth < 400) {
    return SCREEN_SIZE_SMALL;
  }
  else {
    return SCREEN_SIZE_MEDIUM;
  }
}

export { getScreenSize };