import React, { Component } from 'react';

import CommentsList from './CommentsList';
import CommentsBox from './CommentsBox';


export default class Comments extends Component {

	handleSubmit(text, user) {
		this.props.handleSubmit({ user, text });
	}

	render() {
		return (<div>
			<CommentsBox parentSubmit={(text, user) => this.handleSubmit(text, user)} />
			<CommentsList comments={this.props.comments} />
		</div>);
	}
}

