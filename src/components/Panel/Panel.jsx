
import styles from "./Panel.module.scss"
import { PostSettins } from "./PostSettins/PostSettins"
// import { Search } from './Search/Search'


export const Panel = () => {
	return (
		<div className={styles.PanelBlock}>
			<div className={styles.Panel}>
				<span className={styles.PanelBack} >{"<Назад"}</span>
				<PostSettins />
				{/* <Search /> */}

			</div>
		</div>
	)
}