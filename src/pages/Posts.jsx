import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import MyModal from '../components/UI/modal/MyModal';
import MyPagination from '../components/UI/pagination/MyPagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css'
import { getPagesCount } from '../utils/pages';

function Posts() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({sort: '', query:''});

	const [modal, setModal] = useState(false);

	const [totalPages, setTotalPages] = useState(0);

	const [limit, setLimit] = useState(10);

	const [page, setPage] = useState(1);

	

	const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
	})

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(x => x.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
		fetchPosts(limit, page)
	}

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
/*
	const fetchPosts = async () => {
		setIsPostLoading(true)
		const posts = await PostService.getAll()
		setPosts(posts)
		setIsPostLoading(false)
	}
*/
	useEffect(() => {
		fetchPosts(limit, page)
	}, []);

	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal
				visible={modal}
				setVisible = {setModal}
			>
				<PostForm
					create = { createPost }
				/>
			</MyModal>
			<PostFilter
				filter = {filter}
				setFilter = {setFilter}
			/>
			{postError &&
				<h1>Произошла ошибка {postError}</h1>
			}
			{isPostsLoading
				? <div style={{ display:'flex', justifyContent:'center', marginTop:30 }}><MyLoader/></div>
				: <PostList
					posts={ sortedAndSearchedPosts }
					remove = { removePost }
					title = "JS Posts"
				  />
			}
			<MyPagination
				changePage = {changePage}
				page = {page}
				totalPages = {totalPages}
			/>
			
		</div>
  	);
}

export default Posts;
