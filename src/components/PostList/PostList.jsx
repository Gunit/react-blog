import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

import styles from './PostList.module.css'

const PostList = () => {
	return (
		<div className={styles.postList}>
			<h1 className={styles.postListTitle}>Создай свой пост</h1>
			<form>
				<Input placeholder='Название поста' />
				<Input placeholder='Описание поста' />
				<Button>Создать пост</Button>
				<Button>Удалить пост</Button>
				<Button>Редактировать пост</Button>
			</form>
		</div>
	)
}

export default PostList
