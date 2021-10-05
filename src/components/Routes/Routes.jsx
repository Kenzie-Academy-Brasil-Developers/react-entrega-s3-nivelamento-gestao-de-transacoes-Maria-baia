import {Switch, Route} from "react-router-dom"
import Form from "../Form/Form";
import { useState } from "react";
import Inputs from "../Inputs/Inputs"
import Outputs from "../Outputs/Outputs"
import Transactions from "../Transactions/Transactions";

const Routes = () => {
    const [transactions, setTransactions ] = useState([
        {name: "banana", quantity: 100, price: 5 },
        {name: "morango", quantity: -10, price: 2 },
        {name: "laranja", quantity: 50, price: 6 },
    ])

    return (
        <Switch>
            <Route exact path="/">
                <Form transactions={transactions} setTransactions={setTransactions}/>
            </Route>
            <Route exact path="/entradas">
                <Inputs transactions={transactions}/>
            </Route>
            <Route exact path="/saídas">
                <Outputs transactions={transactions}/>
            </Route>
            <Route exact path="/movimentacoes">
                <Transactions transactions={transactions}/>
            </Route>
        </Switch>
    )
}

export default Routes;