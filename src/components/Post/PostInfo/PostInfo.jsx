
import styles from "./PostInfo.module.scss"


export const PostInfo = () => {
	return (
		<div className={styles.PostInfo}>
			<div className={styles.InfoMiniBlock}>
				<span className={styles.Name}>
					Дата
					публикации:
				</span>
				<span className={styles.Value}>
					09.09.2000
				</span>
			</div>
			<div className={styles.InfoMiniBlock}>
				<span className={styles.Name}>
					Просмотров
				</span>
				<span className={styles.Value}>
					13
				</span>
			</div>
			<div className={styles.InfoMiniBlock}>
				<span className={styles.Name}>
					В избранных
				</span>
				<span className={styles.Value}>
					12
				</span>
			</div>
		</div>
	)
}