import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {

	const params = useParams()

	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, isLoading, error] = useFetching( async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})

	const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.postId)
		fetchComments(params.postId)
	}, [])

  	return (
		<div>
			{
				isLoading
				? <MyLoader />
				: <h1>{post.id}. {post.title}</h1>
			}
			<h1>Комментарии</h1>
			{
				isComLoading
				? <MyLoader />
				: <div>
					{comments.map((comm) => 
						<div key={comm.id} style={{ marginTop:20 }}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					)}
				</div>
			}
		</div>
  )
}

export default PostIdPage