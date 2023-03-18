import styles from "./MyProfile.module.scss"
import iconRule from "./rule.svg"
import Avatar from "../../global-css/svg/profile.jpg"

import { Link } from "react-router-dom"


export const MyProfile = () => {
	return (
		<div className={styles.MyProfile}>
			<Link to={`/profile/${33}`}>
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
			</Link>
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