import React from 'react';
import { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "AAA", body: "CCC"},
		{id: 2, title: "BBB", body: "BBB"},
		{id: 3, title: "CCC ", body: "AAA"},
	])

	const [selectedSort, setSelectedSort] = useState('');
	
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(x => x.id !== post.id))
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}
	
	return (
		<div className="App">
			<PostForm
				create = { createPost }
			/>
			<div>
				<MySelect
					options={[
						{value: 'title', name: "По названию"},
						{value: 'body', name: "По описанию"},
					]}
					defaultValue="Сортировка по:"
					value={selectedSort}
					onChange={sortPosts}
				/>
			</div>
			{ posts.length !== 0
				?
				<PostList
					posts={ posts }
					remove = { removePost }
					title = "JS Posts"
				/>
				:
				<h3 style={{ textAlign: 'center' }}>
					Постов нет
				</h3>
			}
		</div>
  	);
}

export default App;
