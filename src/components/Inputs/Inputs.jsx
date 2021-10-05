import { useHistory } from "react-router-dom"
import { useState } from "react";

const Inputs = ({transactions}) => {
    const history = useHistory()
    const [total, setTotal] = useState(0)

    return (
        <div className="display">
            <div>
                <h1>Entradas</h1>
                <div className="table">
                    <h2>Frutas</h2>
                    <h2>Quantidade</h2>
                    <h2>Preço</h2>
                </div>
            </div>
            <ul>
                {transactions
                .filter((transaction) => transaction.quantity > 0)
                .map((filteredTransaction, index) => 
                <li key={index}>
                    <h3>{filteredTransaction.name}</h3>
                    <p>{filteredTransaction.quantity}</p>
                    <span>{filteredTransaction.price}</span>
                </li>
                )}
                <h2>Quantidade de frutas recebidas:
                    {transactions
                    .filter((transaction) => transaction.quantity > 0)
                    .reduce((total, current) => total + parseInt(current.quantity), total)}
                </h2>
                <button onClick={() => history.push("/")}>Voltar</button>
            </ul>
        </div>
    )
}

export default Inputs