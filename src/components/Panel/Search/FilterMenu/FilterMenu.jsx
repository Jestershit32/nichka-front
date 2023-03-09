
import styles from "./FilterMenu.module.scss"
import iconON from "./icon/on.svg"
// import iconOFF from "./icon/off.svg"


export const FilterMenu = () => {

	const  = true;

	return (
		<div className={styles.FilterMenu}>
			<div className={styles.filterItem}>
				<span className={styles.ItemName}>Самые новые</span>
				<img className={styles.Itemicon} src={iconON} alt="" />
			</div>
			<div className={styles.filterItem}>
				<span className={styles.ItemName}>Самые старое</span>
				<img className={styles.Itemicon} src={iconON} alt="" />
			</div>

			<div className={styles.filterItem}>
				<span className={styles.ItemName}>Колличество записей на странице</span>
				<select className={styles.itemSelect}>
					<option className={styles.itemOption} value="10">10</option>
					<option className={styles.itemOption} value="20">20</option>
				</select>
			</div>



		</div>
	)
}