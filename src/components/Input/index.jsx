import styles from './Input.module.css'

const Input = ({onChange, value}) => {
    return (
        <input className={styles.input} onChange={onChange} placeholder='Search...'  value={value}></input>
    )
}

export default Input