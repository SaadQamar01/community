import { useEffect, useRef, RefObject } from "react";

type Handler = () => void;

export function useOutsideClick(handler: Handler, listenCapturing: boolean = true): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
