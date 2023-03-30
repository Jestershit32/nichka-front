import { Panel } from '../Panel/Panel';
import { Search } from "../Search/Search";
import { List } from "../List/List"
import { PostMini } from "../PostMini/PostMini"
import styles from "./ProfilePosts.module.scss"
import { useGetPostsQuery } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/listSettings';


export const ProfilePosts = ({ userID, postsFav }) => {

	let statusTab = useSelector(state => state.profilePage.favoritOrCreated)

	const { page, inOnePage, newOrOld, searchValue, } = useSelector(state => state.listSettings)
	const { data, isLoading } = useGetPostsQuery({ page, inOnePage, newOrOld, searchValue, userID });
	const dispatch = useDispatch();




	if (isLoading) {
		return <h1>*</h1>
	}

	if (statusTab === "created") {
		return (
			<>
				<h1 className={styles.H1}>Созданное</h1>
				<Panel noBack>
					<Search />
				</Panel>
				<List isLoading={isLoading} pages={data.countPages} pageNumbSet={(i) => dispatch(setPage(i))} activ={page}>
					{data.posts.map((item) => {
						return <PostMini post={item} key={item._id} />
					})}
				</List>
			</>)
	} else {
		return (<>
			<h1 className={styles.H1}>Избранное</h1>
			<List isLoading={isLoading} pages={postsFav.length} pageNumbSet={(i) => dispatch(setPage(i))} activ={page}>
				{postsFav.map((item) => <PostMini noProfile post={item} key={item._id} />)}
			</List>
		</>)
	}


}