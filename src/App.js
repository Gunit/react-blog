import Header from './components/Header/Header'
import PostList from './components/PostList/PostList'

import './style/App.css'

const App = () => {
	return (
		<div>
			<Header />
			<div className='wrapper'>
				<PostList />
			</div>
		</div>
	)
}

export default App
