import styles from "./MyProfile.module.scss"
import iconRule from "../../global-css/svg/rule.svg"
import Avatar from "../../global-css/svg/profile.jpg"


export const MyProfile = () => {
	return (
		<div className={styles.MyProfile}>

			<div className={styles.BlockUp}>
				<img className={styles.Avatar} src={Avatar} alt="" />
				<div className={styles.NameBlock}>
					<span className={styles.NameText}>
						Веденев
					</span>
					<span className={styles.NameText}>
						Максим
					</span>
				</div>
			</div>
			<div className={styles.BlockBottom}>
				<div className={styles.Nikblock}>
					<img className={styles.RuleIcon} src={iconRule} alt="" />
					<span className={styles.bottomText}>
						Jestershit32
					</span>
				</div>
				<span className={`${styles.bottomText} ${styles.exit}`} >
					Выйти
				</span>
			</div>

		</div>

	)
}