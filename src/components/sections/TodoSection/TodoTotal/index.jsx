import styles from "./style.module.scss"

export const TodoTotal = ({ valueTotal }) => {

    return (
        <div className={styles.totalBox}>
            <div>
                <p className="paragraph bold">Valor Total:</p>
                <p className="paragraph small">O valor se refere ao saldo</p>
            </div>
            <span className="paragraph bold pinkColor">{valueTotal}</span>
        </div>
    )

}