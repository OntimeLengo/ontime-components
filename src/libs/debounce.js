/**
 * Debounce function to delay callbacks
 */
export default function debounce(cb, delay = 300) {
  let timerId;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      cb(...args);

      timerId = null;
    }, delay);
  };
}
