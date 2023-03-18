import ProfileImage from "../../global-css/svg/profile.jpg"
import IconRule from "./rule.svg"

import IconPub from "./public.svg"
import IconFav from "./favorit.svg"
import styles from "./Profile.module.scss"


export const Profile = () => {
	return (<>
		<h1 className={styles.H1}>Профиль</h1>
		<div className={styles.ProfileWindow}>

			<div className={styles.Profile}>
				<img className={styles.ProfileImage} src={ProfileImage} alt="" />
				<div className={styles.MiddleBlock}>
					<div className={styles.InfoString}>
						<span className={styles.InfoStringName}>Фамилия</span>
						<span className={styles.InfoStringValue}>Веденев</span>
					</div>
					<div className={styles.InfoString}>
						<span className={styles.InfoStringName}>Имя</span>
						<span className={styles.InfoStringValue}>Максим</span>
					</div>
					<div className={styles.InfoString}>
						<span className={styles.InfoStringName}>Ник</span>
						<span className={styles.InfoStringValue}>jestershit32</span>
					</div>
					<div className={styles.InfoString}>
						<span className={styles.InfoStringName}>Роль</span>
						<span className={styles.InfoStringValue}>
							<img className={styles.InfoStringRule} src={IconRule} alt="" />
							creator
						</span>
					</div>
				</div>
			</div>
			<div className={styles.RightBlock}>
				<span className={styles.ButtonToggler}>
					<img className={styles.ButtonTogglerIcon} src={IconFav} alt="" />
					Избранное</span>
				<span className={styles.ButtonToggler}>
					<img className={styles.ButtonTogglerIcon} src={IconPub} alt="" />
					Опубликованное</span>
			</div>
		</div>
		<h1 className={styles.H1}>Избранное</h1>
	</>
	)
}