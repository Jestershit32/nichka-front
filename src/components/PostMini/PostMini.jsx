import { PostProfile } from '../PostProfile/PostProfile'
import styles from "./PostMini.module.scss"
import { Tag } from "../Tag/Tag"
import { PostSettins } from "../PostSettins/PostSettins";
import { SettingsItem } from '../SettingsItem/SettingsItem';

import { Link } from 'react-router-dom';
export const PostMini = () => {




	return (

		<div className={styles.PostMini}>
			<div className={styles.LeftBlock}>
				<PostProfile />
				<div className={styles.InfoMiniBlock}>
					<span className={styles.Name}>
						У вас в Избранных
					</span>
				</div>

				<div className={styles.InfoMiniBlock}>
					<span className={styles.Name}>
						Просмотров
					</span>
					<span className={styles.Value}>
						13
					</span>
				</div>
			</div>
			<div className={styles.MiddleBlock}>
				<div className={styles.Settings}>
					<PostSettins>
						<SettingsItem icon={"close"} name={"Заблокировать"} />
						<SettingsItem icon={"read"} name={"Редактировать"} />
						<SettingsItem icon={"delete"} name={"Удалить"} />
						<SettingsItem icon={"favorite"} name={"В избранное"} />
					</PostSettins>
				</div>
				<Link to={"post/" + 1} >
					<h1 className={styles.H1}>
						Снхрофазатронная диструктуризаця данных при помощи болта и 100 законов квантовой физики
					</h1>
				</Link>
				<div className={styles.TagsBlock} >
					<Tag name={"хуй"} key={1} />
					<Tag name={"хуй"} key={2} />
					<Tag name={"хуй"} key={3} />
					<Tag name={"хуй"} key={5} />
					<Tag name={"хуй"} key={6} />
					<Tag name={"хуй"} key={7} />
					<Tag name={"хуй"} key={4} />
				</div>
			</div>

		</div>
	)
}