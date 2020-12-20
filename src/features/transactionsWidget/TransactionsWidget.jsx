import React from 'react';

import logo from '../../images/briefcase.png'

import Widget from "../../atomic-components/Widget/Widget";
import UtilityPanel from "./components/UtilityPanel/UtilityPanel";
import TransactionsList from "./components/TransactionsList/TransactionsList";

import {useTransactionsWidgetSelector} from "./transactionsWidgetSelector";

const TransactionsWidget = () => {
    const {
        transactionsToShow,
        sortOrder,
        sortKey,
        searchValue,
        searchValueChangeHandler,
        clearSearchValueHandler,
        sortingOptions,
    } = useTransactionsWidgetSelector();

    return (
        <Widget
            icon={logo}
            title="Recent Transactions"
            size="big"
        >
            <UtilityPanel
                sortOrder={sortOrder}
                sortKey={sortKey}
                searchValue={searchValue}
                searchValueOnChange={searchValueChangeHandler}
                clearSearchValueHandler={clearSearchValueHandler}
                sortingOptions={sortingOptions}
            />
            <TransactionsList transactions={transactionsToShow} />
        </Widget>
    )
}

export default TransactionsWidget
