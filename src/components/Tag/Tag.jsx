
import styles from "./Tag.module.scss"


export const Tag = ({ name }) => {
	return (
		<span className={styles.Tag}>
			{name}
		</span>
	)
}