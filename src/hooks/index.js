import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;
      if (!el || el.contains(event?.target || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

export default useOnClickOutside;
export const handleKeyDown = (event) => {
  if (
    !(
      /[0-9]/.test(event.key) ||
      event.key === "Backspace" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    )
  ) {
    event.preventDefault();
  }
};
