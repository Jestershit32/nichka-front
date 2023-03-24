
import styles from "./PostInfo.module.scss"


export const PostInfo = ({ dateUse, dateUpdate, views, inFavorit }) => {

	const dateUpdateBlock = <div className={styles.InfoMiniBlock}>
		<span className={styles.Name}>
			Дата последнего
			Изменения:
		</span>
		<span className={styles.Value}>
			{dateUpdate.slice(0, 10)}
		</span>
	</div>


	return (
		<div className={styles.PostInfo}>
			<div className={styles.InfoMiniBlock}>
				<span className={styles.Name}>
					Дата
					публикации:
				</span>
				<span className={styles.Value}>
					{dateUse.slice(0, 10)}
				</span>
			</div>
			{!dateUpdate && dateUpdateBlock}
			<div className={styles.InfoMiniBlock}>
				<span className={styles.Name}>
					Просмотров
				</span>
				<span className={styles.Value}>
					{views}
				</span>
			</div>
			<div className={styles.InfoMiniBlock}>
				<span className={styles.Name}>
					В избранных
				</span>
				<span className={styles.Value}>
					{inFavorit}
				</span>
			</div>
		</div>
	)
}