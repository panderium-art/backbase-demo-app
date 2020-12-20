import format from 'date-fns/format'
import getTime from 'date-fns/getTime'
import toDate from 'date-fns/toDate'

const DATE_FORMAT = 'MMM d'

export const formatDate = (date) => format(new Date(date), DATE_FORMAT);

export const formatStringDateToTimestamp = (date) => {
    const isTimestamp = Number.isInteger(date) && date > 0;

    const getTimestamp = (date) => {
        const parsedDate = toDate(new Date(date));
        return getTime(parsedDate);
    }

    return isTimestamp ? date : getTimestamp(date);
}
