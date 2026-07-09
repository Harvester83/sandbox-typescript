export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (value: string) => {
  console.log("API call:", value);
};

const debouncedSearch = debounce(search, 500);

// имитация ввода
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");
