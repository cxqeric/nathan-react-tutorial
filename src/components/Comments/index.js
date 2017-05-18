import React, { Component } from 'react';

import CommentsList from './CommentsList';
import CommentsBox from './CommentsBox';


export default class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: []
		};

	}

	handleSubmit(text, user) {
		this.setState(prevState => ({
			comments: [...prevState.comments, {text, user} ]
		}))
	}

	render() {
		return (<div>
			<CommentsBox parentSubmit={(text, user) => this.handleSubmit(text, user)} />
			<CommentsList comments={this.state.comments} />
		</div>);
	}
}

