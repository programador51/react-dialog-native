import { useRef, useEffect } from "react";

export default function useDialog() {
  const dialog = useRef<undefined | any>();

  const showModal = () => dialog.current?.showModal();

  const close = () => dialog.current?.close();

  useEffect(() => {
    dialog.current.addEventListener("click", (e: MouseEvent) => {
      const dialogDimensions = dialog.current.getBoundingClientRect();

      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        close();
      }
    });
  }, [dialog]);

  return {
    forwardRef: dialog,
    showModal,
    close,
  };
}
