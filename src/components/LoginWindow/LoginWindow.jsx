
import styles from "./LoginWindow.module.scss"


export const LoginWindow = () => {
	return (
		<div className={styles.LoginWindow}>
			<div className={styles.Window}>
				<h1 className={styles.H1}>Вход в нычку</h1>
				<form action="" className={styles.Form}>
					<div className={`${styles.TextBlock} ${true && styles.error}`}>
						<input type="text" placeholder="Введите логин" className={styles.TextInput} />
					</div>
					<div className={styles.TextBlock}>
						<input type="password" placeholder="Введите пароль" className={styles.TextInput} />
					</div>
					<input type="submit" value="Войти" className={styles.TextButton} />
				</form>
				<p className={styles.errorName}>
					Ошибка: {"Пустые поля"}
				</p>
			</div>
		</div>
	)
}