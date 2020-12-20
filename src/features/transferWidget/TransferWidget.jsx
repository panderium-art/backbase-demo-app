import React from "react";

import './TransferWidget.styles.css'

import arrows from "../../arrows.png";
import Input from "../../atomic-components/Input/Input";
import Button from "../../atomic-components/Button/Button";
import Widget from "../../atomic-components/Widget/Widget";

import {useTransferWidgetSelector} from "./transferWidgetSelector";

const TransferWidget = () => {
    const {
        literals,
        fromAccountValue,
        toAccountValue,
        amountValue,
        isButtonDisabled,
        shouldShowErrorMessage,
        estimatedAmountOfMaxTransfer,
        toAccountChangeHandler,
        amountChangeHandler,
        onClickHandler,
    } = useTransferWidgetSelector();

    const renderErrorMessage = () => (
        <p className="message error-message">
            Your Account Balance can't be overdrafted more than €500.00.
        </p>
    )

    const renderHintMessage = () => (
        <p className="message info-message">
            Maximum amount of money transfer is {estimatedAmountOfMaxTransfer}
        </p>
    )

    return (
        <Widget
            title={literals.widget.title}
            icon={arrows}
        >
            <Input
                value={fromAccountValue}
                className="input-container"
                isDisabled
                {...literals.fromAccountInput}
            />
            <Input
                value={toAccountValue}
                className="input-container"
                onChange={toAccountChangeHandler}
                {...literals.toAccountInput}
            />
            <Input
                value={amountValue}
                className="input-container"
                onChange={amountChangeHandler}
                {...literals.amountInput}
            />
            {
                renderHintMessage()
            }
            {
                shouldShowErrorMessage && renderErrorMessage()
            }
            <Button
                onClick={onClickHandler}
                isDisabled={isButtonDisabled}
                {...literals.button}
            />
        </Widget>
    )
}

export default TransferWidget;
