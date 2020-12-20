export const isTransactionFulfillSearchQuery = (transaction, query) => {
    return isBenificiaryFulfillSearchQuery(transaction, query)
        || isTransactionTypeFulfillSearchQuery(transaction, query)
        || isAmountFulfillSearchQuery(transaction, query);
}

const isBenificiaryFulfillSearchQuery = (transaction,query) => transaction.merchantName.toLowerCase().includes(query.toLowerCase())
const isTransactionTypeFulfillSearchQuery = (transaction,query) => transaction.type.toLowerCase().includes(query.toLowerCase())
const isAmountFulfillSearchQuery = (transaction,query) => transaction.amount.toString().includes(query.toLowerCase())
