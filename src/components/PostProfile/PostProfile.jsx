import iconNobody from "./rule.svg"
import Avatar from "../../global-css/svg/profile.jpg"
import styles from "./PostProfile.module.scss"
import { Link } from "react-router-dom"


export const PostProfile = ({ user }) => {
	const rule = (rule) => {
		switch (rule) {
			// case "nobody":
			// 	return iconNobody
			case "creator":
				return iconNobody
			case "admin":
				return iconNobody
			default:
				return iconNobody
		}
	}

	if (!user) {

		return (
			<div className={styles.PostProfile}>
				<div className={styles.BlockUp}>
					<img className={styles.Avatar} src={Avatar} alt="" />
				</div>
				<div className={styles.BlockBottom}>
					<div className={styles.Nikblock}>
						<img className={styles.RuleIcon} src={iconNobody} alt="" />
						<span className={styles.bottomText}>
							Никто
						</span>
					</div>
				</div>
			</div>
		)
	}

	return (

		<div className={styles.PostProfile}>
			<Link to={"/profile/" + user._id}>
				<div className={styles.BlockUp}>
					<img className={styles.Avatar} src={user.avatarUrl && Avatar} alt="" />
					<div className={styles.NameBlock}>
						<span className={styles.NameText}>
							{user.firstName}
						</span>
						<span className={styles.NameText}>
							{user.lastName}
						</span>
					</div>
				</div>
			</Link>
			<div className={styles.BlockBottom}>
				<div className={styles.Nikblock}>
					<img className={styles.RuleIcon} src={rule(user.rule)} alt="" />
					<span className={styles.bottomText}>
						{user.nickname}
					</span>
				</div>
			</div>
		</div>

	)
}