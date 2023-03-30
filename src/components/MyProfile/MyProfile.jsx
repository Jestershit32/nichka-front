import styles from "./MyProfile.module.scss"
import iconNobody from "./rule.svg"
import Avatar from "../../global-css/svg/profile.jpg"
import { AlertWindow } from "../AlertWindow/AlertWindow";

import { useMyProfileByTokenQuery } from '../../redux'
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom"
import { toggleWindow } from "../../redux/slices/alertWindow";



export const MyProfile = () => {

	const ifOpenWindow = useSelector(state => state.alertWindow.window.open)

	const { data, isLoading } = useMyProfileByTokenQuery();
	const dispatch = useDispatch();
	const nav = useNavigate();


	if (isLoading) {
		return <h1>*</h1>
	}

	const alertFunc = () => {
		nav(0);
		return localStorage.removeItem("token");

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



	if (data) {
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
					<span onClick={() => dispatch(toggleWindow())} className={`${styles.bottomText} ${styles.exit}`} >
						Выйти
					</span>
				</div>
				<AlertWindow H={"Выход"} message={"Вы действительно хотите выйти"} inOkName={"Выйти"} inOk={alertFunc} open={ifOpenWindow} back={() => dispatch(toggleWindow())} />
			</div>

		)
	} else {
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
}