import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

function PostList({
    posts,
	remove,
    title,
}) {
	
	if (posts.length === 0) return (
		<h1 style={{ textAlign:'center' }}>
			ПОСТОВ НЕТ!
		</h1>
	)
    return (
        <div>
            <h1
				style={{ textAlign: 'center' }}
			>
				{ title }
			</h1>
			<TransitionGroup>
				{ posts.map( (post, index) =>
					<CSSTransition
						key = { post.id }
						timeout={500}
						classNames="post"
					>
						<PostItem
							remove = { remove }
							number = { index + 1 }
							post = { post }
						/>
					</CSSTransition>
				)}
			</TransitionGroup>
        </div>
    );
}

export default PostList;