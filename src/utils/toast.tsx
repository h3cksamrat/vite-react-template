import toast, { CheckmarkIcon, ErrorIcon, Toast, ToastPosition } from 'react-hot-toast';

interface ToastParam {
  message: Toast['message'];
  type: Toast['type'];
}

export default ({ message, type }: ToastParam) => {
  let position: ToastPosition = 'bottom-left';
  let className = 'success';
  let icon = <CheckmarkIcon className="icon" />;

  if (type === 'error') {
    position = 'top-right';
    className = 'error';
    icon = <ErrorIcon className="icon" />;
  }

  return toast(message, { position, className, icon });
};
