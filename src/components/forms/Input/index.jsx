import styles from "./styles.module.scss"

export const Input = ({ label, id, type, placeholder, required, value, setValue, exText }) => {
    return (
        <div className={styles.inputBox}>
            <label className="paragraph small" htmlFor={id}>{label}</label>
            <input
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required={required}
                placeholder={placeholder}
            />
            <p className="paragraph small">{exText}</p>
        </div>
    )
}