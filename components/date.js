import { parseISO, format } from 'date-fns';

export default function Date() {
  const date = parseISO(new Date());
  return <time dateTime={date}>{format(new(Date), 'LLLL d, yyyy')}</time>;
}
