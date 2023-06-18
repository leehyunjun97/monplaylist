import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function formatAgo(date: number | string, leng = 'en_US') {
  return format(date, leng);
}
