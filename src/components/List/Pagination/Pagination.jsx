
import styles from "./Pagination.module.scss"


export const Pagination = ({ pages, pageNumbSet, activ }) => {

	const pag = () => {
		const arr = [];
		for (let i = 1; i <= pages; i++) {
			arr.push(<span key={i} onClick={() => pageNumbSet({ page: i })} className={`${styles.PagItem} ${(activ === i) && styles.active}`}>{i}</span>)
		}
		return arr
	}

	if (pages <= 1) {
		return null
	}

	return (

		<div className={styles.Pagination}  >

			{activ !== 1 ? <span onClick={() => pageNumbSet({ page: activ - 1 })} className={styles.PagItem + " " + styles.PagItemNav}>{"<"}</span> : null}


			<div className={styles.PagNavblock}>
				{

					pag().map(item => {
						return (item)
					})


				}
			</div>
			{pages !== activ ? <span onClick={() => pageNumbSet({ page: activ + 1 })} className={styles.PagItem + " " + styles.PagItemNav}>{">"}</span> : null}

		</div>
	)
}