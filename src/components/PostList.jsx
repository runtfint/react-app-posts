import React from 'react';
import PostItem from './PostItem';

function PostList({
    posts,
    title,
}) {
    return (
        <div>
            <h1
				style={{ textAlign: 'center' }}
			>
				{ title }
			</h1>
			{ posts.map( (post, index) =>
				<PostItem
					number = { index + 1 }
					key = { post.id }
					post = { post }
				/>
			)}
        </div>
    );
}

export default PostList;