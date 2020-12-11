import { useEffect, useRef } from 'react';

export default function useOuterClick(callback) {
  const callbackRef = useRef(); // initialize mutable callback ref
  const innerRef = useRef(); // returned to client, who sets the "border" element

  // update callback on each render, so second useEffect has most recent callback
  useEffect(() => { callbackRef.current = callback; });
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
    function handleClick(e) {
      if (innerRef.current && callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) callbackRef.current(e);
    }
  }, []); // no dependencies -> stable click listener

  return innerRef; // convenience for client (doesn't need to init ref himself)
}
