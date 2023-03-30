import { PostProfile } from '../PostProfile/PostProfile'
import styles from "./PostMini.module.scss"
import { Tag } from "../Tag/Tag"
import { PostSettins } from "../PostSettins/PostSettins";
import { SettingsItem } from '../SettingsItem/SettingsItem';
import { Link, useNavigate } from 'react-router-dom';
import {
	useMyProfileByTokenQuery,
	useAddInFavoritesMutation,
	useRemoveInFavoritesMutation,
	useRemovePostMutation
} from "../../redux"
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/slices/messages'
import { AlertWindow } from '../AlertWindow/AlertWindow';
import { useState } from 'react';


export const PostMini = ({ post, noProfile = false }) => {
	const [isOpen, setOpen] = useState(false);
	const { data, isLoading } = useMyProfileByTokenQuery();
	const [addInFavorites] = useAddInFavoritesMutation()
	const [removeInFavorites] = useRemoveInFavoritesMutation()
	const [removePost] = useRemovePostMutation();
	const dispatch = useDispatch()
	const nav = useNavigate()
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



	if (data && post) {
		// console.log(post.data.doc);
		if (data?._id && post.user?._id) {
			// console.log("Дошло");
			// console.log(post.data.doc.user._id)
			checkOptions = data._id === post.user?._id || data.rule === "admin"
		}
		if (post._id && data.favorites) {
			checkInFavorites = data.favorites.some(item => item === post._id)
		}
		// if (checkOptions) {
		// 	console.log(data.rule, post._id, "есть доступ к редактированию")
		// } else {
		// 	console.log(data.rule, post._id, "Нет доступа к редактированию")
		// }
		// if (checkInFavorites) {
		// 	console.log(data.rule, post._id, "у тебя в избранных")
		// } else {
		// 	console.log(data.rule, post._id, "нет у тебя в избранных")
		// }

	}

	const addInFavoritesClick = async (id) => {
		try {
			const add = await addInFavorites(id).unwrap()
			console.log({ add })
			dispatch(addMessage({
				message: "запись " + add.post.title + " добавлена в ваше избранное",
				status: "success"
			}))
		}
		catch (error) {
			console.log(error.data.message)
			dispatch(addMessage({
				message: error.data.message,
				status: "error"
			}))
		}
	}

	const removeInFavoritesClick = async (id) => {
		try {
			const remove = await removeInFavorites(id).unwrap()
			console.log({ remove })
			dispatch(addMessage({
				message: "запись " + remove.post.title + " удалена из ваших избранных",
				status: "success"
			}))
		}
		catch (error) {
			console.log(error.data.message)
			dispatch(addMessage({
				message: error.data.message,
				status: "error"
			}))
		}
	}
	const removePostClick = async (id) => {
		try {
			const backState = await removePost(id).unwrap()
			console.log(backState)
			dispatch(addMessage({
				message: "Пост " + backState.post.title + " удален",
				status: "success"
			}))
			console.log({ backState })
		} catch (error) {
			console.log(error.data.message)
			dispatch(addMessage({
				message: error.data.message,
				status: "error"
			}))
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
							<SettingsItem icon={"read"} name={"Редактировать"} onClick={() => nav("/edit/" + post._id)} />
							<SettingsItem icon={"delete"} name={"Удалить"} onClick={() => setOpen(prev => !prev)} />
						</> : null
						}
						{!checkInFavorites ? <SettingsItem icon={"favorite"} name={"В избранное"} onClick={() => addInFavoritesClick(post._id)} /> : <SettingsItem icon={"close"} name={"Удалить из избранных"} onClick={() => removeInFavoritesClick(post._id)} />}
					</PostSettins> : null
					}
				</div>
				<Link className={styles.H1} to={"/post/" + post._id}>
					{post.title}
				</Link>
				<div className={styles.TagsBlock} >
					{post.tags.map((item, key) => <Tag name={item} key={key} />)}
				</div>
			</div>
			<AlertWindow message={`Вы действительно хотите удалить пост`} H={`${post.title}`} inOk={() => removePostClick(post._id)} inOkName={"удалить"} open={isOpen} back={() => setOpen(prev => !prev)} />
		</div>
	)
}