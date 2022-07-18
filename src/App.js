import { useState } from 'react'
import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList'
import Select from './components/UI/Select/Select'

import './style/App.css'

const App = () => {
	const [posts, setPosts] = useState([])
	const [selectedSort, setSelectedSort] = useState('')

	const createPost = post => {
		post.id = Date.now()
		setPosts([...posts, post])
	}

	const deletedPost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPost = sort => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}
	return (
		<div>
			<Header />
			<div className='wrapper'>
				<PostForm create={createPost} />
				<Select
					onChange={sortPost}
					value={selectedSort}
					defaultValue='Сортировка'
					options={[
						{ value: 'title', name: 'По заголовку' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
				{posts.length > 0 ? (
					<PostList posts={posts} deleted={deletedPost} />
				) : (
					<h2
						style={{
							textAlign: 'center',
							fontWeight: 900,
							fontSize: '30px',
							color: '#1e212c',
						}}
					>
						Список пуст :)
					</h2>
				)}
			</div>
		</div>
	)
}

export default App
