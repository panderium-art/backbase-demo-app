import { v1 as uuidv1 } from 'uuid';

import { formatStringDateToTimestamp } from "../helpers/dateTimeHelper";
import {CURRENCY_CODE_ENUM} from "../enums/currencyCodeEnum";
import {TRANSACTION_TYPE_ENUM} from "../enums/transactionTypeEnum";
import {CREDIT_DEBIT_INDICATOR_ENUM} from "../enums/creditDebitIndicatorEnum";

const getRandomCategoryCode = () => {
    const CATEGORY_CODES = ['#12a580', '#d51271', '#c12020', '#c89616', '#e25a2c', '#1180aa', '#fbbb1b'];
    const getRandomIndex = (min, max) => {
        const minValue = Math.ceil(min);
        const maxValue = Math.floor(max);
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
    return CATEGORY_CODES[getRandomIndex(0, CATEGORY_CODES.length - 1)]
}

export class TransactionEntity {
    constructor({
        categoryCode = getRandomCategoryCode(),
        dates,
        transaction,
        merchant
    }) {
        const date = (dates && dates.valueDate) || Date.now()
        this._id = uuidv1()
        this._categoryCode = categoryCode;
        this._date = formatStringDateToTimestamp(date);
        this._amount = Number(transaction.amountCurrency.amount);
        this._currencyCode = transaction.amountCurrency.currencyCode || CURRENCY_CODE_ENUM.EUR;
        this._type = transaction.type || TRANSACTION_TYPE_ENUM.ONLINE_TRANSFER;
        this._creditDebitIndicator = transaction.creditDebitIndicator || CREDIT_DEBIT_INDICATOR_ENUM.DBIT;
        this._merchantName = merchant.name;
        this._merchantImage = merchant.image;
    }

    get id() {
        return this._id;
    }

    get categoryCode() {
        return this._categoryCode;
    }

    get date() {
        return this._date;
    }

    get amount() {
        return this._amount;
    }

    get currencyCode() {
        return this._currencyCode;
    }

    get type() {
        return this._type;
    }

    get creditDebitIndicator() {
        return this._creditDebitIndicator;
    }

    get merchantName() {
        return this._merchantName;
    }

    get merchantImage() {
        return this._merchantImage;
    }

    toObject() {
        return Object.assign({}, {
            categoryCode: this._categoryCode,
            date: this._date,
            amount: this._amount,
            currencyCode: this._currencyCode,
            type: this._type,
            creditDebitIndicator: this._creditDebitIndicator,
            merchantName: this._merchantName,
            merchantImage: this._merchantImage,
        })
    }
}
