
import styles from "./Post.module.scss"
import { Tag } from "../Tag/Tag"
import { PostProfile } from '../PostProfile/PostProfile'
import { PostInfo } from './PostInfo/PostInfo'

export const Post = ({ post }) => {



	return (
		<div className={styles.Post}>
			<div className={styles.PostLeft}>
				<PostProfile user={post.user} />
				<PostInfo dateUse={post.createdAt + " "} dateUpdate={post.updateAt + " "} views={post.viewsCount} inFavorit={0} />
			</div>
			<div className={styles.PostRight}>
				<h1 className={styles.H1}>
					{post.title}
				</h1>
				<p className={styles.P}>
					{post.description}
				</p>
				<div className={styles.tags}>
					{post.tags.map((item, key) => <Tag name={item} key={key} />)}
				</div>
			</div>
		</div>
	)
}