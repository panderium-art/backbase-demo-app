import { createSlice } from '@reduxjs/toolkit';
import { subtract } from "../../helpers/currencyHelper";

export const transferWidgetSlice = createSlice({
    name: 'transferWidget',
    initialState: {
        toAccountValue: '',
        amountValue: '',
        accountBalance: 5824.76
    },
    reducers: {
        changeToAccountValue: (state, { payload }) => {
            state.toAccountValue = payload;
        },
        changeAmountValue: (state, { payload }) => {
            state.amountValue = payload;
        },
        decreaseAccountBalance: (state, { payload }) => {
            state.accountBalance = subtract(state.accountBalance, payload);
        },
        resetWidgetState:(state) => {
            state.toAccountValue = '';
            state.amountValue = '';
        }
    },
});

export const {
    changeToAccountValue,
    changeAmountValue,
    decreaseAccountBalance,
    resetWidgetState,
} = transferWidgetSlice.actions;

export default transferWidgetSlice.reducer;
