import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Comments from '../Comments';
import { createAngularComment } from '../../redux/ducks/comments';


export const AboutAngular = ({ dispatch, comments }) => {
	return (	
		<div>		
			<Link to='/about'>About</Link>
			<h1>Angular</h1> 
			<p>One framework. Mobile & desktop.</p>

			<Comments 
				comments={comments}
				handleSubmit={(newComment) => dispatch(createAngularComment(newComment))}
			/>
		</div>
	);
} 

export default connect(
	(state) => {
		comments: state.comments.angularComments
	}
)(AboutAngular);
