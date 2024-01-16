import emitter from '@/helpers/eventBus';

export const TOAST_MESSAGE_CREATED: string = 'TOAST_MESSAGE_CREATED';

export interface ToastMessage {
  key?: string | number,
  message: string;
  action: {
    type: string,
    to: string,
  };
}

export const createToast = (message: string = '', action?: ToastMessage = {}): void=> {
  emitter.emit(TOAST_MESSAGE_CREATED, { message, action });
};
