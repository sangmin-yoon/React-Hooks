export const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancle && typeof onCancle !== "function")
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return confirmAction;
};
