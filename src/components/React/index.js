import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Comments from '../Comments';
import { createReactComment } from '../../redux/ducks/comments';


export const AboutReact = ({ dispatch, comments }) => {
	return (
		<div>
			<Link to='/about'>About</Link>
			<h1>React</h1>
			<p>A Javascript Library For Building User Interfaces</p>

			<Comments 
				comments={comments} 
				handleSubmit={(newComment) => dispatch(createReactComment(newComment))}
			/>
		</div>
	);
}

export default connect(
	(state) => ({
		comments: state.comments.reactComments
	})
)(AboutReact);
