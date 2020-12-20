import {useDispatch, useSelector} from "react-redux";
import orderBy from "lodash.orderby";
import {SORT_KEY_ENUM, SORT_KEY_TO_ENTITY_KEY_MAP} from "../../enums/sortKeyEnum";
import {changeSearchValue, clearSearchValue, filterTransactions} from "./transactionsWidgetSlice";

export const useTransactionsWidgetSelector = () => {
    const dispatch = useDispatch()
    const {
        transactions,
        filteredTransactions,
        searchValue,
        sortOrder,
        sortKey
    } = useSelector(state => state.transactionsWidget)

    const searchValueChangeHandler = (e) => {
        const value = e.target.value;
        dispatch(changeSearchValue(value));
        dispatch(filterTransactions(value));
    };

    const clearSearchValueHandler = () => {
        dispatch(clearSearchValue())
    }

    const sortingOptions = [
        { label: 'Date', key: SORT_KEY_ENUM.DATE },
        { label: 'Benificiary', key: SORT_KEY_ENUM.BENIFICIARY },
        { label: 'Amount', key: SORT_KEY_ENUM.AMOUNT }
    ]

    const shouldShowFilteredTransaction = searchValue.length > 0;
    let transactionsToShow = shouldShowFilteredTransaction ? filteredTransactions : transactions;

    if(sortOrder) {
        transactionsToShow = orderBy(transactionsToShow, SORT_KEY_TO_ENTITY_KEY_MAP[sortKey], sortOrder)
    }

    return {
        transactionsToShow,
        sortOrder,
        sortKey,
        searchValue,
        searchValueChangeHandler,
        clearSearchValueHandler,
        sortingOptions,
    }
}
