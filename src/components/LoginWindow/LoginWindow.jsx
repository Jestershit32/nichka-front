
import { useState } from "react"
import { login } from "../../redux/slices/myProfile"
import { useLoginMutation } from "../../redux"
import { useDispatch, useSelector } from "react-redux"
import styles from "./LoginWindow.module.scss"
import { useNavigate } from "react-router-dom"

export const LoginWindow = () => {
	const [nickname, setNickname] = useState('max32')
	const [password, setPassword] = useState('1337')
	const [loginFetch, { error, isLoading }] = useLoginMutation();
	const dispatch = useDispatch();

	const nav = useNavigate()
	const checkUser = useSelector((state) => state.myProfile.user)

	const handleNickname = (e) => {
		setNickname(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}



	if (checkUser) {
		nav("/")
		console.log(checkUser)
	}



	const handlerAuth = async (obj) => {
		if (nickname && password) {
			try {
				const { _id, token } = await loginFetch(obj).unwrap()
				dispatch(login({ _id, token }))
				nav("/")
			}
			catch (error) {

			}
		}
	}




	if (isLoading) {
		return <h1> жди нахуй</h1>
	}


	return (
		<div className={styles.LoginWindow}>
			<div className={styles.Window}>
				<h1 className={styles.H1}>Вход в нычку</h1>
				<div action="" className={styles.Form}>
					<div className={`${styles.TextBlock} ${true && styles.error}`}>
						<input type="text" placeholder="Введите логин" className={styles.TextInput} value={nickname} onChange={(e) => handleNickname(e)} />
					</div>
					<div className={styles.TextBlock}>
						<input type="password" placeholder="Введите пароль" className={styles.TextInput} value={password} onChange={(e) => handlePassword(e)} />
					</div>
					<input type="submit" value="Войти" onClick={() => handlerAuth({ nickname: nickname, password: password })} className={styles.TextButton} />
				</div>
				<p className={styles.errorName}>
					{error ? error.data.message : ""}
				</p>
			</div>
		</div>
	)
}