import React from "react";
import PropTypes from 'prop-types';
import TransactionListItem from "../TransactionListItem/TransactionListItem";

import './TransactionList.styles.css'
import EmptyState from "../EmptyState/EmptyState";

const TransactionsList = (props) => {
    const { transactions } = props

    return (
        <>
        {
            transactions.length
            ? (
                <ul className="transactions-list">
                    {
                        transactions.map((transaction) => (
                            <TransactionListItem
                                key={transaction.id}
                                date={transaction.date}
                                type={transaction.type}
                                amount={transaction.amount}
                                creditDebitIndicator={transaction.creditDebitIndicator}
                                merchantName={transaction.merchantName}
                                image={transaction.merchantImage}
                                categoryCode={transaction.categoryCode}
                            />
                        ))
                    }
                </ul>
            )
            : <EmptyState
                className="transactions-list__stub"
            />
        }
       </>
    )

}

TransactionsList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        dates: PropTypes.shape({
            valueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        }),
        transaction: PropTypes.shape({
            amountCurrency: PropTypes.shape({
                amount: PropTypes.string,
                currencyCode: PropTypes.string,
            }),
            type: PropTypes.oneOf(['Salaries', 'Card Payment', 'Online Transfer', 'Transaction']),
            creditDebitIndicator: PropTypes.oneOf(['DBIT', 'CRDT'])
        }),
        merchant: PropTypes.shape({
            name: PropTypes.string,
            accountNumber: PropTypes.string,
        })
    })).isRequired
}

export default TransactionsList;
