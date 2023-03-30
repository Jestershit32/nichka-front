
import { useState } from "react"
import { useLoginMutation, useMyProfileByTokenQuery } from "../../redux"
import styles from "./LoginWindow.module.scss"
import { useNavigate } from "react-router-dom"

export const LoginWindow = () => {
	const [nickname, setNickname] = useState('max32')
	const [password, setPassword] = useState('1337')
	const [loginFetch, { error, isLoading }] = useLoginMutation();
	const { data } = useMyProfileByTokenQuery();
	const nav = useNavigate()


	const handleNickname = (e) => {
		setNickname(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}



	if (data) {
		nav("/")
		console.log(data)
	}



	const handlerAuth = async (obj) => {
		if (nickname && password) {
			try {
				const { token } = await loginFetch(obj).unwrap()
				localStorage.setItem("token", token)
				nav("/")
			}
			catch (error) {
				console.log({ error, message: "не получилось не фартануло" })
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