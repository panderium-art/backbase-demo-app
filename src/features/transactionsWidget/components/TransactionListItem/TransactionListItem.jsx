import React from "react";
import PropTypes from 'prop-types';
import './TransactionListItem.styles.css'
import {
    CREDIT_DEBIT_INDICATOR_ENUM,
    CREDIT_DEBIT_INDICATOR_TO_SIGN_MAP
} from "../../../../enums/creditDebitIndicatorEnum";
import {formatDate} from "../../../../helpers/dateTimeHelper";
import {formatCurrency} from "../../../../helpers/currencyHelper";
import {TRANSACTION_TYPE_ENUM} from "../../../../enums/transactionTypeEnum";

const TransactionListItem = (props) => {
    const {
        date,
        merchantName,
        type,
        amount,
        image,
        creditDebitIndicator,
        categoryCode,
    } = props;

    const transactionSign = CREDIT_DEBIT_INDICATOR_TO_SIGN_MAP[creditDebitIndicator];
    const amountLabel = `${transactionSign}${formatCurrency(amount)}`;
    const dateLabel = formatDate(date)

    const categoryCodeStyles = {
        width: '10px',
        minHeight: '70px',
        backgroundColor: categoryCode,
        position: 'absolute',
    }

    return (
        <li className="transaction">
            <div style={categoryCodeStyles} />
            <div className="transaction__block transaction__block--center">
                <p className="transaction__text">{dateLabel}</p>
            </div>
            <div className="transaction__block transaction__block--center">
                <img className="transaction__image" src={image} alt="transaction"/>
            </div>
            <div className="transaction__block  transaction__block--big transaction__block--column">
                <p className="transaction__text transaction__text--bold transaction__text--big">{merchantName}</p>
                <p className="transaction__text">{type}</p>
            </div>
            <div className="transaction__block transaction__block--medium transaction__block--end transaction__block--mg">
                <p className="transaction__text transaction__text--bold transaction__text--big">{amountLabel}</p>
            </div>
        </li>
    )
};

TransactionListItem.propTypes = {
    date: PropTypes.number.isRequired,
    merchantName: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        TRANSACTION_TYPE_ENUM.ONLINE_TRANSFER,
        TRANSACTION_TYPE_ENUM.CARD_PAYMENT,
        TRANSACTION_TYPE_ENUM.SALARIES,
        TRANSACTION_TYPE_ENUM.TRANSACTION,
    ]).isRequired,
    amount: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    creditDebitIndicator: PropTypes.oneOf([CREDIT_DEBIT_INDICATOR_ENUM.DBIT, CREDIT_DEBIT_INDICATOR_ENUM.CRDT]).isRequired,
    categoryCode: PropTypes.string.isRequired,
}

export default TransactionListItem;
