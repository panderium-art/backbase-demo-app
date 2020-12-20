import React from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import Header from "./atomic-components/Header/Header";
import AppView from "./atomic-components/AppView/AppView";
import TransferWidget from "./features/transferWidget/TransferWidget";
import TransactionsWidget from "./features/transactionsWidget/TransactionsWidget";

function App() {
    return(
        <div className="AppView">
            <Header
                logoUrl={logo}
            />
            <AppView>
                <TransferWidget />
                <TransactionsWidget />
            </AppView>
        </div>
    )
}

export default App;
