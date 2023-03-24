
import styles from "./FilterMenu.module.scss"
import iconON from "./icon/on.svg"
import iconOFF from "./icon/off.svg"


import { setInOnePage, setSortBy } from "../../../redux/slices/listSettings";

import { useSelector, useDispatch } from "react-redux";

export const FilterMenu = () => {
	const dispatch = useDispatch()
	const { newOrOld, inOnePage } = useSelector(state => state.listSettings)

	return (
		<div className={styles.FilterMenu}>
			<div className={styles.filterItem}>
				<span className={styles.ItemName}>Самые новые</span>
				<img onClick={() => dispatch(setSortBy({ sortBy: "new" }))} className={styles.Itemicon} src={newOrOld === "new" ? iconON : iconOFF} alt="" />
			</div>


			<div className={styles.filterItem}>
				<span className={styles.ItemName}>Самые старое</span>
				<img onClick={() => dispatch(setSortBy({ sortBy: "old" }))} className={styles.Itemicon} src={newOrOld === "old" ? iconON : iconOFF} alt="" />
			</div>

			<div className={styles.filterItem} >
				<span className={styles.ItemName}>Колличество записей на странице</span>
				<select className={styles.itemSelect} value={inOnePage} onChange={(e) => dispatch(setInOnePage({ inOnePage: e.target.value }))}>
					<option className={styles.itemOption} value="10">10</option>
					<option className={styles.itemOption} value="20">20</option>
				</select>
			</div>
		</div>
	)
}