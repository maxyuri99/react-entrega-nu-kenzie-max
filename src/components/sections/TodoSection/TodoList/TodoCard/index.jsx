
export const TodoCard = ({ title, category, value, id, removeValue }) => {
    const formattedValue = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);


    return (
        <>
            <div>
                <h2 className="title">{title}</h2>
                <p className="paragraph small">{formattedCategory}</p>
            </div>

            <div>
                <p className="paragraph small">{formattedValue}</p>
                <button onClick={() => removeValue(id)}>Excluir</button>
            </div>

        </>
    )
}