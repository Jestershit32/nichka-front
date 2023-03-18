
import { useState } from "react"
import styles from "./AddPostWindow.module.scss"
import iconAdd from "./add.svg";
import iconDel from "./cls.svg";


export const AddPostWindow = () => {
	const [file, setfile] = useState("")
	// const [tegs, setTegs] = useState([]);
	return (
		<div className={styles.AddPostWindow}>
			<div className={styles.Window}>
				<h1 className={styles.H1}>Добавить док в нычку</h1>
				<form action="" className={styles.Form}>
					<div className={`${styles.TextBlock} ${"" && styles.error}`}>
						<input type="text" placeholder="Введите Название" className={styles.TextInput} required />
					</div>

					<div className={`${styles.TextBlock} ${"" && styles.error}`}>
						{/* <input type="text" placeholder="Введите Имя" className={styles.TextInput} required /> */}
						<textarea className={styles.TextInput + " " + styles.TextArea} cols="30" rows="auto" placeholder="Ведите описание"></textarea>
					</div>

					<div className={styles.addTegblock}>
						<div className={styles.addTegTextBar}>
							<div className={`${styles.TextBlock} ${"" && styles.error}`}>
								<input type="text" placeholder="Введите тег" className={styles.TextInput} />
							</div>
							<input type="button" value={"+"} className={styles.addTegButton} />
						</div>
						<div className={styles.tegBox}>
							<span className={styles.Teg}>
								{"#fjdbgskj"}
								<img className={styles.TegDel} src={iconDel} alt="" />
							</span>
						</div>
					</div>


					<input type="File" id="myfile" className={styles.fileInput} onChange={e => setfile(e.target.files[0]?.name)} />
					<label htmlFor="myfile" className={styles.fileBlock}>
						<img src={iconAdd} alt="" className={styles.filePic} />
						<span className={styles.fileText}>{file ? file : "Добавьте файл"}</span>
					</label>

					<input type="submit" value="Добавить" className={styles.TextButton} />

				</form>
				<p className={styles.errorName}>
					Ошибка: {"Пустые поля"}
				</p>
			</div>
		</div>
	)
}