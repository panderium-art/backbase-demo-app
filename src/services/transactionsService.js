import transactions from '../mocks/transactions.json'
import currency from 'currency.js';
import {TransactionEntity} from "../entities/TransactionEntity";

export const getTransactionsList = () => {
    return transactions.data.map(item => new TransactionEntity(item))

};

export const createTransaction = (toAccount, amount) => {
    const transactionObj = {
        transaction: {
            amountCurrency: {
                amount: currency(amount),
            },
        },
        merchant: {
            name: toAccount,
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAZlBMVEXCIyf////hkZPbfX/dhIbwyMnTYWT23d7KP0LQVFfSWl3MRknIODzOTVDGMTXfi4399/fz0tPVaGvZdnj67OzXcHP01tfFLDDtvr/45uf78fHHNjndgoTEKCzoqqzjnJ7qs7XimJkikhCWAAACMElEQVR42u3a0Y6iMBSAYaCKIooVRdSREd//JfdmNzH1THYm9HRK83/XzTS/0WPpmGUAAAAAAAAAAAAAAAAAAAAAAAAAYrMo3pTumtZMduyqRjkkf3P7cNYccy8O914xZFi97/jpLjr4KclPnWJJK2xYOWuq3JeHYslSeBO4a0ZvJYVeSC1sZ5w1a+utZKNX8im8md0RU3gLOeuFNLf/f977q7eSVq/kLmy3c9Z03kIuYUfwQWsE51bx26QU9juqjeBScQRfvvF5H2cwgcUR7H53bX2N4FHzyPUQNqyVRvBZM6Q5vW+4VBrBV9VTsBF27HRGsFUNGc7CS9frjGDdB5ONsOPTnQnGGLP4if0YPEQawbae/md3p9AhtdU5TrShQ7KnzglvsKFDpBF89XAwWoUOEUdwMceQTBjBdj3HkI3K48MvhIgn3HKOIdIlw2qYYYg4gvdzDJFOuHY7wxDxnnecY4h4wu0q2eYLfQwhPi4Z1jGE+LhkiCPEwz1vHCEeLhkiCZl+yRBJyPRLhlhCJl8yRBPSphJSEkIIIYQQEkXIavkj22hDFjN8QiSEEEIISSBkTwghEYbcEgmp8jRC+kNMIUXz1/bV+lX9avdPdb8G/lGN1+eR3/yZU8CQcyohl1RCHqmEmFRCqkRC7JBISMDPum7IMZGQW59IyDNLI+TUJBLShuyY/D/Er+2zJEKsyVIIsWMduCOrC/8WZZ8BAAAAAAAAAAAAAAAAAAAASNUfRgoqtXcjVLMAAAAASUVORK5CYII=",
        }
    };
    return new TransactionEntity(transactionObj);
}

