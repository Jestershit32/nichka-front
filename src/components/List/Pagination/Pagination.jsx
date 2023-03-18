
import styles from "./Pagination.module.scss"


export const Pagination = () => {
	return (
		<div className={styles.Pagination}>

			<span className={styles.PagItem}>{"<"}</span>
			<div className={styles.PagNavblock}>
				<span className={`${styles.PagItem} ${true && styles.active}`}>{"1"}</span>
				<span className={styles.PagItem}>{"2"}</span>
				<span className={styles.PagItem}>{"3"}</span>
				<span className={styles.PagItem}>{"4"}</span>
			</div>
			<span className={styles.PagItem}>{">"}</span>

		</div>
	)
}