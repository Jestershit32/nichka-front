
import styles from "./RegistrWindow.module.scss"
import iconPic from "./pic.svg"
import { useState } from "react"

export const RegistrWindow = () => {
	const [file, setfile] = useState("")

	return (
		<div className={styles.RegistrWindow}>

			<div className={styles.Window}>
				<h1 className={styles.H1}>Регистрация в нычку</h1>
				<form action="" className={styles.Form}>
					<div className={`${styles.TextBlock} ${true && styles.error}`}>
						<input type="text" placeholder="Введите Имя" className={styles.TextInput} required />
					</div>

					<div className={`${styles.TextBlock} ${true && styles.error}`}>
						<input type="text" placeholder="Введите Фамилию" className={styles.TextInput} required />
					</div>

					<div className={`${styles.TextBlock} ${true && styles.error}`}>
						<input type="text" placeholder="Введите логин" className={styles.TextInput} required />
					</div>

					<div className={styles.TextBlock}>
						<input type="password" placeholder="Введите пароль" className={styles.TextInput} required />
					</div>


					<input type="File" id="myfile" className={styles.fileInput} onChange={e => setfile(e.target.files[0]?.name)} />
					<label htmlFor="myfile" className={styles.fileBlock}>
						<img src={iconPic} alt="" className={styles.filePic} />
						<span className={styles.fileText}>{file ? file : "Вставьте фото"}</span>
					</label>

					<input type="submit" value="Зарегистрироваться" className={styles.TextButton} />
				</form>
				<p className={styles.errorName}>
					Ошибка: {"Пустые поля"}
				</p>
			</div>

		</div>
	)
}