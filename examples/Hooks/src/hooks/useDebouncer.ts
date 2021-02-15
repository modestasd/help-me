import { useEffect, useState } from "react";

export const useDebounce = (value: string, delayTime: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delayTime);
  
        return () => {
          clearTimeout(handler);
        };
      },[value, delayTime]);
  
    return debouncedValue;
};