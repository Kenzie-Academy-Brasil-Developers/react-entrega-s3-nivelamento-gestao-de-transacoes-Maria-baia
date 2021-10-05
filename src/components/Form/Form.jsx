import { useState } from "react"
import { useHistory } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = ({transactions, setTransactions}) => {
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice]= useState()
    const history = useHistory()


    const addFruits = (name, quantity, price) => {
        setTransactions([...transactions, {name: name, quantity: quantity, price:price}])
        toast.success("Fruta adicionada.")
    }

    return (
        <div className="display">
            <h1>Quintanda de frutas</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da fruta" />
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" />
            <button onClick={() => addFruits(name, quantity, price)} >Adicionar</button>
            <button onClick={() => history.push('/entradas')}>Entradas</button>
            <button onClick={() => history.push('/saídas')}>Saídas</button>
            <button onClick={() => history.push('/movimentacoes')}>Todas as movimentacoes</button>
            <ToastContainer/>
        </div>
    )
}

export default Form
