import currency from 'currency.js'

const DEFAULT_OPTIONS = {
    symbol: '€',
    separator: '',
    decimal: '.',
    precision: 2,
}

/**
 * @description - making subtraction using currency lib to avoid problems with decimal numbers.
 * @param minuend - from what subtracts
 * @param subtrahend - what subtracts
 * @returns {currency} - result
 */
export const subtract = (minuend, subtrahend) => currency(minuend).subtract(subtrahend);

export const add = (val1, val2) => currency(val1).add(val2);

/**
 *
 * @param value - money amount
 * @returns {string}
 */
export const formatCurrency = (value) => currency(value, DEFAULT_OPTIONS).format();
