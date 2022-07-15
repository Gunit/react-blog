import Button from '../UI/Button/Button'

import styles from './PostItem.module.css'

const PostItem = () => {
	return (
		<div className={styles.postItemWrapper}>
			<div className={styles.postItem}>
				<h3>1</h3>
				<div className={styles.postItemText}>
					<strong>Для чего нужна библиотека React ?</strong>
					<p>
						JavaScript-библиотека с открытым исходным кодом для разработки
						пользовательских интерфейсов. React разрабатывается и поддерживается
						Facebook, Instagram и сообществом отдельных разработчиков и
						корпораций.
					</p>
				</div>
				<div className={styles.postItemBtn}>
					<Button>Открыть</Button>
					<Button>Удалить</Button>
				</div>
			</div>

			<div className={styles.postItem}>
				<h3>1</h3>
				<div className={styles.postItemText}>
					<strong>Для чего нужна библиотека React ?</strong>
					<p>
						JavaScript-библиотека с открытым исходным кодом для разработки
						пользовательских интерфейсов. React разрабатывается и поддерживается
						Facebook, Instagram и сообществом отдельных разработчиков и
						корпораций.
					</p>
				</div>
				<div className={styles.postItemBtn}>
					<Button className={styles.open}>Открыть</Button>
					<Button className={styles.del}>Удалить</Button>
				</div>
			</div>
		</div>
	)
}

export default PostItem
