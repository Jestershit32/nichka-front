import { PostProfile } from '../PostProfile/PostProfile'
import styles from "./PostMini.module.scss"
import { Tag } from "../Tag/Tag"
import { PostSettins } from "../PostSettins/PostSettins";
import { SettingsItem } from '../SettingsItem/SettingsItem';
import { Link } from 'react-router-dom';
import { useMyProfileByTokenQuery } from "../../redux"
export const PostMini = ({ post, noProfile = false }) => {
	const { data, isLoading } = useMyProfileByTokenQuery();


	if (isLoading) {
		return <h1>жди</h1>
	}
	let checkOptions = false;
	let checkInFavorites = false;

	if (data) {
		if (data._id && post.user) {
			checkOptions = data._id === post.user._id || data.rule === "admin"
			if (post._id && data.favorites) {
				checkInFavorites = data.favorites.some(item => item === post._id)
				// console.log(post._id, data.favorites)
			}
		}

	}

	// if (checkOptions) {
	// 	console.log(data.rule, post._id, "есть доступ для редактирования")
	// } else {
	// 	console.log(data.rule, post._id, "нет доступа для редактирования")
	// }

	// if (checkInFavorites) {
	// 	console.log(data.rule, post._id, "у тебя в избранных")
	// } else {
	// 	console.log(data.rule, post._id, "нет у тебя в избранных")
	// }


	// console.log(checkInFavorites, data);

	return (
		<div className={styles.PostMini}>
			<div className={styles.LeftBlock}>
				{!noProfile && <PostProfile user={post.user} />}
				{checkInFavorites &&
					<div className={styles.InfoMiniBlock}>
						<span className={styles.Name}>
							У вас в Избранных
						</span>
					</div>
				}
				<div className={styles.InfoMiniBlock}>
					<span className={styles.Name}>
						Просмотров
					</span>
					<span className={styles.Value}>
						{post.viewsCount}
					</span>
				</div>
			</div>
			<div className={styles.MiddleBlock}>
				<div className={styles.Settings}>
					{data ? <PostSettins>
						{checkOptions ? <>
							{/* <SettingsItem icon={"close"} name={"Заблокировать"} /> */}
							<SettingsItem icon={"read"} name={"Редактировать"} />
							<SettingsItem icon={"delete"} name={"Удалить"} />
						</> : null
						}
						{!checkInFavorites ? <SettingsItem icon={"favorite"} name={"В избранное"} /> : <SettingsItem icon={"close"} name={"Удалить из избранных"} />}
					</PostSettins> : null
					}
				</div>
				<Link className={styles.H1} to={"/post/" + post._id}>
					{post.title}
				</Link>
				<div className={styles.TagsBlock} >
					{post.tags.map((item, key) => <Tag name={item} key={key} />)}
				</div>
			</div >

		</div >
	)
}