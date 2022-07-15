import PostItem from '../PostItem/PostItem'
import styles from './PostList.module.css'

const PostList = () => {
	return (
		<div className={styles.postListWrapper}>
			<h2 className={styles.postTitle}>Посты про Frontend</h2>
			<PostItem />
		</div>
	)
}

export default PostList
