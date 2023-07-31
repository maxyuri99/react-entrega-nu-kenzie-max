import { Input } from "../Input"
import { useState } from "react"
import { Select } from "../Select"
import styles from "./styles.module.scss"

export const TodoForm = ({ addValue }) => {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("entrada")

    const submit = (event) => {
        event.preventDefault()
        addValue({ title, value, category })
        setTitle("")
        setValue("")
        setCategory("entrada")
    }

    const options = [
        { value: "entrada", label: "Entrada" },
        { value: "despesa", label: "Despesa" }
    ]

    return (
        <div className={styles.formBox}>
            <form onSubmit={submit}>
                <Input
                    placeholder="Digite aqui sua descrição"
                    type="text"
                    name="desc"
                    id="desc"
                    label="Descrição"
                    value={title}
                    setValue={setTitle}
                    required={true}
                    exText={"Ex: Compra de roupas"}
                />

                <Input
                    placeholder="Digite aqui o valor"
                    type="number"
                    name="value"
                    id="value"
                    label="Valor (R$)"
                    value={value}
                    setValue={setValue}
                    required={true}
                />

                <Select
                    label="Tipo de Valor"
                    id="category"
                    value={category}
                    setCategory={setCategory}
                    options={options}
                />

                <button type="submit">Inserir Valor</button>
            </form>
        </div>
    )
}