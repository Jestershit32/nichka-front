

import styles from "./AlertWindow.module.scss"
import { useNavigate } from "react-router-dom"

export const AlertWindow = ({ message, H, inOk, open, back }) => {
	const nav = useNavigate();


	if (!open) {
		return null
	}


	return (
		<div className={styles.AlertBlock}>
			<div className={styles.AlertWindow}>
				<h1 className={styles.H1}>
					{H}
				</h1>
				<p className={styles.P}>
					{message}
				</p>
				<div className={styles.vibor}>
					<button onClick={() => {
						back()
					}}
						className={styles.button}>Отмена</button>
					<button onClick={() => {
						nav(0)
						inOk()
						back()
					}} className={styles.button}>Да</button>
				</div>
			</div>
		</div>
	)
}