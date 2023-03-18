import iconRule from "./rule.svg"
import Avatar from "../../global-css/svg/profile.jpg"
import styles from "./PostProfile.module.scss"


export const PostProfile = () => {
	return (
		<div className={styles.PostProfile}>
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
			</div>
		</div>
	)
}