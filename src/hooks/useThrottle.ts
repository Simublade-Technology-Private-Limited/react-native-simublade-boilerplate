import {useEffect, useRef, useState} from 'react';
import {DateUtils} from '../utils/dateUtils';

function useThrottle<T>(value: T, interval = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(DateUtils.getUnixDateTime());

  useEffect(() => {
    if (DateUtils.getUnixDateTime() >= lastExecuted.current + interval) {
      lastExecuted.current = DateUtils.getUnixDateTime();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = DateUtils.getUnixDateTime();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}

export default useThrottle;

/* 

const [value, setValue] = useState('hello')
const throttledValue = useThrottle(value,800)

useEffect(() => {
    console.log(`throttledValue changed: ${throttledValue}`)
}, [
  throttledValue,
])

*/
