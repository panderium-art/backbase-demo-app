import {useDispatch, useSelector} from "react-redux";
import {add, formatCurrency, subtract} from "../../helpers/currencyHelper";
import {changeAmountValue, changeToAccountValue, decreaseAccountBalance, resetWidgetState} from "./transferWidgetSlice";
import {createTransaction} from "../../services/transactionsService";
import {addNewTransaction} from "../transactionsWidget/transactionsWidgetSlice";
import {useMemo} from "react";


export const useTransferWidgetSelector = () => {
    const dispatch = useDispatch();
    const { toAccountValue, amountValue, accountBalance } = useSelector(state => state.transferWidget);

    const fromAccountValue = `Free Checking(4692) - ${formatCurrency(accountBalance)}`;
    const toAccountChangeHandler = e => dispatch(changeToAccountValue(e.target.value));
    const amountChangeHandler = e => dispatch(changeAmountValue(e.target.value));
    const onClickHandler = () => {
        const transaction = createTransaction(toAccountValue, amountValue);
        dispatch(addNewTransaction(transaction));
        dispatch(decreaseAccountBalance(amountValue));
        dispatch(resetWidgetState());
    }

    const shouldShowErrorMessage = useMemo(() => {
        const OVERDRAFT_LIMIT = -500;
        const estimatedBalance = subtract(accountBalance, amountValue).value;
        return estimatedBalance < OVERDRAFT_LIMIT
    },[accountBalance, amountValue]);

    const estimatedAmountOfMaxTransfer = useMemo(() => {
        const OVERDRAFT_VALUE = 500;
        const maxEstimatedAmount = add(accountBalance,OVERDRAFT_VALUE);
        return formatCurrency(maxEstimatedAmount);
    },[accountBalance])

    const isButtonDisabled = !( toAccountValue && amountValue && amountValue > 0) || shouldShowErrorMessage;

    const literals = {
        widget: {
            title: 'Make a Transfer',
        },
        fromAccountInput: {
            id: 'fromAccount',
            name: 'fromAccount',
            label: 'From Account',
        },
        toAccountInput: {
            id: 'toAccount',
            name: 'toAccount',
            placeholder: 'George Power Electric Company',
            label: 'To Account',
        },
        amountInput: {
            id: 'amount',
            name: 'amount',
            label: 'Amount',
            placeholder: '€ 0.00',
            type: 'number'
        },
        button: {
            type: 'primary',
            label: 'Submit',
        }

    }

    return {
        literals,
        fromAccountValue,
        toAccountValue,
        amountValue,
        isButtonDisabled,
        shouldShowErrorMessage,
        estimatedAmountOfMaxTransfer,
        toAccountChangeHandler,
        amountChangeHandler,
        onClickHandler
    }
}
