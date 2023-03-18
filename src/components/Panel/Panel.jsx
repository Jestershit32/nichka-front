import styles from "./Panel.module.scss"




export const Panel = ({ children, noBack }) => {
	return (
		<div className={styles.PanelBlock}>
			<div className={styles.Panel}>

				{!noBack && <span className={styles.PanelBack} >{"<Назад"}</span>}
				{children}
			</div>
		</div>
	)
}