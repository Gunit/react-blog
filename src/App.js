import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList'

import './style/App.css'

const App = () => {
	return (
		<div>
			<Header />
			<div className='wrapper'>
				<PostForm />
				<PostList />
			</div>
		</div>
	)
}

export default App
