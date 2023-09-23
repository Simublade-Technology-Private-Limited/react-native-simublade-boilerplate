import {useEffect, useState} from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

/* 
Usage:-
const [value, setValue] = useState('hello')
const debouncedValue = useDebounce(value)

useEffect(() => {
    console.log(`debouncedValue changed: ${debouncedValue}`)
}, [
  debouncedValue,
])

*/
