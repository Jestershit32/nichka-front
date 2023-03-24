import styles from "./MyProfile.module.scss"
import iconNobody from "./rule.svg"
import Avatar from "../../global-css/svg/profile.jpg"
import { AlertWindow } from "../AlertWindow/AlertWindow";

import { useMyProfileByTokenQuery } from '../../redux'
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom"
import { logout, updateUser, toggleOpenWindow } from "../../redux/slices/myProfile";
import { useEffect } from "react";


export const MyProfile = () => {
	const { data, isLoading } = useMyProfileByTokenQuery();
	const dispatch = useDispatch();
	const ifOpenWindow = useSelector(state => state.myProfile.logoutWindow.open)

	useEffect(() => {
		dispatch(updateUser(data))
	}, [dispatch, data])

	if (isLoading) {
		return <h1>жди нахуй</h1>
	}





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

	if (!data) {
		return (
			<Link to={`/login`}>
				<div className={styles.MyProfile}>
					<div className={styles.BlockUp}>
						<div className={styles.NameBlock}>
							<span className={styles.NameText}>
								Войти
							</span>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	return (

		<div className={styles.MyProfile}>

			<Link to={`/profile/${data._id}`}>
				<div className={styles.BlockUp}>
					<img className={styles.Avatar} src={data.avatarUrl && Avatar} alt="" />
					<div className={styles.NameBlock}>
						<span className={styles.NameText}>
							{data.firstName}
						</span>
						<span className={styles.NameText}>
							{data.lastName}
						</span>
					</div>
				</div>
			</Link>
			<div className={styles.BlockBottom}>
				<div className={styles.Nikblock}>
					<img className={styles.RuleIcon} src={rule(data.rule)} alt="" />
					<span className={styles.bottomText}>
						{data.nickname}
					</span>
				</div>
				<span onClick={() => dispatch(toggleOpenWindow())} className={`${styles.bottomText} ${styles.exit}`} >
					Выйти
				</span>
			</div>
			<AlertWindow H={"Выход"} message={"Вы действительно хотите выйти"} inOk={() => { dispatch(logout()) }} open={ifOpenWindow} back={() => dispatch(toggleOpenWindow())} />
		</div>

	)
}