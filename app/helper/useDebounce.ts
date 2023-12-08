export const useDebounce = (mainFunction: any, delay: number = 300) => {
  let timer: string | number | NodeJS.Timeout | undefined;

  return function (...args: any[]) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};
