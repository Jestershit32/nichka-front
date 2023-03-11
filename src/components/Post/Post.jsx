
import styles from "./Post.module.scss"
import { Tag } from "../Tag/Tag"
import { PostProfile } from '../PostProfile/PostProfile'
import { PostInfo } from './PostInfo/PostInfo'

export const Post = () => {
	const tags = [
		"хэтэмэль",
		"Ghbdfg",
		"html",
		"react",
		"redux",
		"хэтэмэль",
		"Ghbdfg",
		"html",
		"react",
		"redux",
		"хэтэмэль",
		"Ghbdfg",
		"html",
		"react",
		"redux",
	]


	return (
		<div className={styles.Post}>
			<div className={styles.PostLeft}>
				<PostProfile />
				<PostInfo />
			</div>
			<div className={styles.PostRight}>
				<h1 className={styles.H1}>
					Механизм саморазвития и регуляции данных с помошью квантовой физики
				</h1>
				<p className={styles.P}>
					Механизм саморазвития и регуляции данных с помошью
					квантовой физики Механизм саморазвития и регуляции
					данных с помошью квантовой физики Механизм саморазвития
					и регуляции данных с помошью квантовой физики Механизм
					саморазвития и регуляции данных с помошью квантовой
					физикиМеханизм саморазвития и регуляции данных с помошью
					квантовой физики Механизм саморазвития и регуляции данных
					с помошью квантовой физики Механизм саморазвития и регуляц
					ии данных с помошью квантовой физики Механизм саморазвития
					и регуляции данных с помошью квантовой физики Механизм сам
				</p>
				<div className={styles.tags}>
					{tags.map((item, key) => <Tag name={`#${item}`} key={key} />)}
				</div>
			</div>
		</div>
	)
}