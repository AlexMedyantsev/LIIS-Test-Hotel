import { useRef, useEffect } from 'react';
import moment from "moment"

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const formatData = (date) => {
  return moment(date,'YYYY/MM/DD').format('DD MMMM, YYYY');
}