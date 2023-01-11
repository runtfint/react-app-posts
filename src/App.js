import React from 'react';
import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "Javascript", body: "Description"},
		{id: 2, title: "Javascript 2", body: "Description"},
		{id: 3, title: "Javascript 3", body: "Description"},
	])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')


	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			title,
			body,
		}
		setPosts([...posts, newPost])
		setTitle('')
		setBody('')
	}
	
	return (
		<div className="App">
			<form>
				<MyInput
					type="text"
					placeholder="Title"
					value = { title }
					onChange = { e => setTitle(e.target.value) }
				/>

				<MyInput
					type="text"
					placeholder="Desc"
					value = { body }
					onChange = { e => setBody(e.target.value) }
				/>

				<MyButton
					onClick = { addNewPost }
				>
					Create
				</MyButton>
			</form>

			<PostList
				posts={ posts }
				title = "JS Posts"
			/>
		</div>
  	);
}

export default App;
