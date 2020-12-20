
## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
!

## Choice of framework

As a framework I chose React, below you can find reasons why:
* I have experience working with React
* It will take more time for me to start project from scratch on Angular, cause I have to learn it in parallel and I won't be in time with that task. My last Angular I've worked with was Angular 2.

## Application Structure

Applications was made with:
* React with React hooks
* Redux
* Plain CSS


I'll describe all the folders inside src.
* app - it is the Redux store of the application. Almost all the data is stored there.
* atomic-components - here you can find a set of components which is used across the app.
* entities - here you can find `TransactionEntity` which I use to work with transactions.
* enums - set of enums which is used across the whole application.
* features - here you can find 2 features: `transactionsWidget` and `transferWidget`. These features are stateful - they work with Redux state and capable of getting data for View. Also `TransactionsWidget` feature has its own set of components which is used only for showing list of transactions.
* helpers - set of helper methods to work with date, currency and transactions.
* mocks - `transactions.json` which was used as data mock.
* services - here you find `transactionsService.js` which is capable of working with `TransactionEntity`.



## What was done
* Core logic of `TransferWidget` was implemented:
    * added possibility to make transfer
    * added overdraft logic - if user decides to make big transfer which will overdraft his balance more that €500 he will see error message and transfer button will be disabled.
    * added hint message which shows max amount of money transfer. It depends on our current account balance.
    * after each transfer account balance will be changed. It is shown as a part of `From Account` value.
     
* Core logic of `TransactionsWidget` was implemented:
    * list of transactions from `transactions.json` is displayed in `TransactionsWidget`.
    * each new transfer appears on the top of the transactions list.
    * added possibility to search in transactions list by `Benificiary` and `Amount`.
    * added possibility to clear search state via cross icon
    * added `empty state` stub in case we didn't find anything with search.
    * added possibility to sort list by `Date`, `Benificiary` and `Amount`.
    * sorting order is persistent across all sorting options.

* Added CI/CD pipeline. On each push to main branch it makes:
    * building of application
    * deploying it to firebase hosting - https://backbase-demo.web.app/
    
## What wasn't done
* Responsiveness wasn't added.
* Tests weren't added.
* Multi-language support wasn't added.
* WCAG level A wasn't added.

