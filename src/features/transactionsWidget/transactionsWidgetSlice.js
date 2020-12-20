import { createSlice } from '@reduxjs/toolkit';
import {getTransactionsList} from "../../services/transactionsService";
import {SORT_ORDER_ENUM} from "../../enums/sortOrderEnum";
import {isTransactionFulfillSearchQuery} from "../../helpers/transactionsHelper";

export const transactionsWidgetSlice = createSlice({
    name: 'transactionsWidget',
    initialState: {
        transactions: getTransactionsList(),
        searchValue: '',
        filteredTransactions: [],
        sortOrder: SORT_ORDER_ENUM.ASC,
        sortKey:'',
    },
    reducers: {
        addNewTransaction: (state, { payload }) => {
            state.transactions.unshift(payload);
        },
        changeSearchValue: (state, { payload }) => {
            state.searchValue = payload
        },
        clearSearchValue: (state) => {
            state.searchValue = '';
        },
        filterTransactions: (state, { payload }) => {
            state.filteredTransactions = state.transactions.filter(transaction => {
                return isTransactionFulfillSearchQuery(transaction, payload);
            })
        },
        setSortParams: (state, { payload }) => {
            if(state.sortKey === payload) {
                state.sortOrder = state.sortOrder === SORT_ORDER_ENUM.ASC ? SORT_ORDER_ENUM.DESC : SORT_ORDER_ENUM.ASC
            }
            state.sortKey = payload;
        }
    },
});

export const {
    addNewTransaction,
    changeSearchValue,
    clearSearchValue,
    filterTransactions,
    setSortParams
} = transactionsWidgetSlice.actions;

export default transactionsWidgetSlice.reducer;
