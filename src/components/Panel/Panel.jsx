import { useNavigate } from "react-router-dom"
import styles from "./Panel.module.scss"




export const Panel = ({ children, noBack }) => {
	const nav = useNavigate()
	return (
		<>
			<div className={styles.PanelBlock}>
				<div className={styles.Panel}>

					{!noBack && <span onClick={() => nav(-1)} className={styles.PanelBack} >{"<Назад"}</span>}
					{children}
				</div>
			</div>
		</>
	)
}