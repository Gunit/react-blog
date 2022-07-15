import styles from './Input.module.css'

const Input = ({ placeholder }) => {
	return <input className={styles.input} placeholder={placeholder} />
}

export default Input
