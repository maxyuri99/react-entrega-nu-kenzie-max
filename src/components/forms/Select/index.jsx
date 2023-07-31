import SelectIten from "react-select"
import styles from "./styles.module.scss"

export const Select = ({ label, id, value, setCategory, options }) => {
    const handleChange = (selectedOption) => {
        setCategory(selectedOption.value)
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            controlHover:"none",
            height: "3rem",
            fontFamily: "var(--font-primary)",
            fontSize: "0.8125rem",
            fontWeight: "400",
            color: "var(--grey-3)",
            padding: "0 0.6rem",
            border: state.isFocused ? "2px solid var(--grey-4)" : "none",
            boxShadow: "none",
            backgroundColor: "var(--grey-1)",
            borderRadius: "5px",
            "&:hover": {
                border: state.isFocused ? "2px solid var(--grey-4)" : "none",
            }
        }),
        option: (provided, state) => ({
            ...provided,
            fontFamily: "var(--font-primary)",
            fontSize: "0.8125rem",
            fontWeight: "400",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            backgroundColor: state.isSelected ? "var(--grey-2)" : state.idFocused ? "var(--grey-2)" : "var(--grey-1)",
            borderRadius: "1px",
            color: "var(--grey-4)",
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none"
        }),
    }

    return (
        <div className={styles.selectBox}>
            <label className="paragraph small" htmlFor={id}>{label}</label>
            <SelectIten
                name={id}
                id={id}
                setCategory={setCategory}
                value={options.find((option) => option.value === value)}
                styles={customStyles}
                options={options}
                onChange={handleChange} 
                isSearchable={false}
                />
        </div>
    )
}