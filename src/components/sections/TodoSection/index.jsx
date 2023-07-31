import { TodoForm } from "../../forms/TodoForm"
import { TodoList } from "./TodoList"
import { useState } from "react"
import { TodoTotal } from "./TodoTotal"
import styles from "./style.module.scss"

export const TodoSection = () => {
    const [enteredValues, setEnteredValues] = useState([])

    const addValue = (formData) => {
        const newValue = { ...formData, id: crypto.randomUUID() }
        setEnteredValues([...enteredValues, newValue])
    }

    const removeValue = (removeId) => {
        const newValueList = enteredValues.filter((value) => value.id !== removeId)
        setEnteredValues(newValueList)
    }

    const valueTotal = enteredValues.reduce((prevValue, value) => {
        if (value.category === "entrada") {
            return prevValue + parseFloat(value.value)
        } else {
            return prevValue - parseFloat(value.value)
        }
    }, 0)

    const formattedValue = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valueTotal)

    return (
        <section>
            <div className="container">
                <div className={styles.sectionBox}>
                    <div>
                        <TodoForm addValue={addValue} />
                        <TodoTotal valueTotal={formattedValue} />
                    </div>
                    <TodoList valuesList={enteredValues} removeValue={removeValue} />
                </div>
            </div>
        </section>
    )
}