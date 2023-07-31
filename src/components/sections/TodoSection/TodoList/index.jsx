import { TodoCard } from "./TodoCard"
import styles from "./style.module.scss"

export const TodoList = ({ valuesList, removeValue }) => {

    return (
        <div className={styles.listBox}>
            <h1 className="title">Resumo Financeiro</h1>

            {valuesList.length > 0 ? (
                <ul>
                    {valuesList.map((value) => (
                        <li key={value.id} className={value.category === "despesa" ? styles.expense : styles.entering}>
                            <TodoCard
                                id={value.id}
                                title={value.title}
                                category={value.category}
                                value={value.value}
                                removeValue={removeValue}
                            />
                        </li>

                    ))}
                </ul>

            ) : (
                <p className="title one">Você ainda não possui nenhum lançamento </p>
            )}

        </div>
    )
}