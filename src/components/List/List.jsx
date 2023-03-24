
import styles from "./List.module.scss"
import { Pagination } from "./Pagination/Pagination"

export const List = ({ isLoading, children, pages, pageNumbSet, activ }) => {
	if (isLoading) {
		return <h1>жди</h1>
	}

	return (
		<div className={styles.List}>
			<Pagination pages={pages} pageNumbSet={pageNumbSet} activ={activ} />
			{children}
			<Pagination pages={pages} pageNumbSet={pageNumbSet} activ={activ} />
		</div>
	)
}