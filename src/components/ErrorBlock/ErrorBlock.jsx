
import { Link } from "react-router-dom"
import styles from "./Error.module.scss"


export const ErrorBlock = () => {
	return (
		<div className={styles.ErrorBlock}>
			<h1 className={styles.H1}>Ошибка 404</h1>
			<span className={styles.Span}>упс... или не она... ну в общем какая то ошибка</span>
			<Link className={styles.Link} to={"/"}>
				{"> Go to Home"}
			</Link>
		</div>
	)
}