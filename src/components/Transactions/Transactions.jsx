import { useHistory } from "react-router-dom"

const Transactions = ({transactions}) => {
    const history = useHistory()

    return (
        <div className="display">
            <div>
            <h1>Todas as movimentações</h1>
                <div className="table">
                    <h2>Frutas</h2>
                    <h2>Quantidade</h2>
                    <h2>Preço</h2>
                </div>
            </div>
            <ul>
            {transactions
            .map((transaction, index) => 
            <li key={index}>
                <h2>{transaction.name}</h2>
                <p>{transaction.quantity}</p>
                <span>{transaction.price}</span>
            </li>
            )}
            <button onClick={() => history.push("/")}>Voltar</button>
        </ul>
        </div>
    )
}

export default Transactions