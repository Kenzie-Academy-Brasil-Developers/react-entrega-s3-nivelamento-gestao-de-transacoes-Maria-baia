import { useHistory } from "react-router-dom";
import { useState } from "react";

const Outputs = ({transactions}) => {
    const history = useHistory()
    const [total, setTotal] = useState(0)

    return (
        <div className="display">
            <div>
            <h1>Saídas</h1>
                <div className="table">
                    <h2>Frutas</h2>
                    <h2>Quantidade</h2>
                    <h2>Preço</h2>
                </div>
            </div>
            <ul>
            {transactions
            .filter((transaction) => transaction.quantity < 0)
            .map((filteredTransaction, index) => 
            <li key={index}>
                <h2>{filteredTransaction.name}</h2>
                <p>{filteredTransaction.quantity}</p>
                <span>{filteredTransaction.price}</span>
            </li>
            )}
            <h2>Quantidade de frutas vendidas:
                {transactions
                .filter((transaction) => transaction.quantity < 0)
                .reduce((total, current) => total + (-1 * parseInt(current.quantity)), total)}
            </h2>
            <h2>Valor: R$
                {transactions
                .filter((transaction) => transaction.quantity < 0)
                .reduce((total, current) => total + parseFloat(current.price), total)
                .toFixed(2)}
            </h2>
            <button onClick={() => history.push("/")}>Voltar</button>
        </ul>
        </div>
    )
}

export default Outputs;