

import styles from "./AlertWindow.module.scss"

export const AlertWindow = ({ message, H, inOk, inOkName, open, back }) => {



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
						inOk()
						back()
					}} className={styles.button}>{inOkName}</button>
				</div>
			</div>
		</div>
	)
}