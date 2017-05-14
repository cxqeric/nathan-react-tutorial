import React, { Component } from 'react';

import CommentsList from './CommentsList';
import CommentsBox from './CommentsBox';


export default class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: []
		};

		this.handleSubmit = (text, user) => this._handleSubmit(text, user);
	}

	_handleSubmit(text, user) {
		this.setState({
			comments: [...this.state.comments, {text, user} ]
		})
	}

	render() {
		return (<div>
			<CommentsBox parentSubmit={this.handleSubmit} />
			<CommentsList comments={this.state.comments} />
		</div>);
	}
}

