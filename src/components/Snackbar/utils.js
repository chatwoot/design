import emitter from '@/helpers/eventBus';

export const TOAST_MESSAGE_CREATED = 'TOAST_MESSAGE_CREATED';

export const createToast = (message = '', action = {}) => {
  emitter.emit(TOAST_MESSAGE_CREATED, { message, action });
};
