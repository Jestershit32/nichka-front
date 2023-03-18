
import styles from "./List.module.scss"
import { Pagination } from "./Pagination/Pagination"

export const List = ({ children }) => {
	return (
		<div className={styles.List}>
			<Pagination />
			{children}
			<Pagination />
		</div>
	)
}