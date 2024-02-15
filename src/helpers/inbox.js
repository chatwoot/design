import { INBOX_TYPES } from '@/constants/inbox';

export const getInboxSource = (type, phoneNumber, inbox) => {
  switch (type) {
    case INBOX_TYPES.WEB:
      return inbox.website_url || '';

    case INBOX_TYPES.TWILIO:
    case INBOX_TYPES.WHATSAPP:
      return phoneNumber || '';

    case INBOX_TYPES.EMAIL:
      return inbox.email || '';

    default:
      return '';
  }
};
export const getReadableInboxByType = (type, phoneNumber) => {
  switch (type) {
    case INBOX_TYPES.WEB:
      return 'livechat';

    case INBOX_TYPES.FB:
      return 'facebook';

    case INBOX_TYPES.TWITTER:
      return 'twitter';

    case INBOX_TYPES.TWILIO:
      return phoneNumber?.startsWith('whatsapp') ? 'whatsapp' : 'sms';

    case INBOX_TYPES.WHATSAPP:
      return 'whatsapp';

    case INBOX_TYPES.API:
      return 'api';

    case INBOX_TYPES.EMAIL:
      return 'email';

    case INBOX_TYPES.TELEGRAM:
      return 'telegram';

    case INBOX_TYPES.LINE:
      return 'line';

    default:
      return 'chat';
  }
};

export const getChannelIconByType = (type, phoneNumber) => {
  switch (type) {
    case INBOX_TYPES.WEB:
      return 'i-fluent-globe-16-regular';

    case INBOX_TYPES.FB:
      return 'i-bxl-facebook';

    case INBOX_TYPES.TWITTER:
      return 'i-bxl-twitter';

    case INBOX_TYPES.TWILIO:
      return phoneNumber?.startsWith('whatsapp')
        ? 'i-bxl-whatsapp'
        : 'i-fluent-chat-16-regular';

    case INBOX_TYPES.WHATSAPP:
      return 'i-bxl-whatsapp';

    case INBOX_TYPES.API:
      return 'i-fluent-plug-connected-16-regular';

    case INBOX_TYPES.EMAIL:
      return 'i-fluent-mail-16-regular';

    case INBOX_TYPES.TELEGRAM:
      return 'i-bxl-telegram';

    case INBOX_TYPES.LINE:
    default:

      // TODO add custom icon for line
      return 'i-fluent-chat-empty-16-regular';
  }
};

export const getInboxWarningIconClass = (type, reauthorizationRequired) => {
  if (type === INBOX_TYPES.FB && reauthorizationRequired) {
    return 'warning';
  }
  return '';
};
