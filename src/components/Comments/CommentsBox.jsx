import React, { Component } from 'react';


export default class CommentsBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			user: ''
		};

		this.handleTextChange = (e) => this._handleTextChange(e);
		this.handleUserChange = (e) => this._handleUserChange(e);
		this.handleSubmit = (e) => this._handleSubmit(e);
	}

	_handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	_handleUserChange(e) {
		this.setState({ user: e.target.value });
	}

	_handleSubmit(e) {
		this.props.parentSubmit(this.state.text, this.state.user);

		this.setState({
			text: '',
			user: ''
		});
	}

	render() {
		return (<div>
			<input
				style={{display: 'block'}}
				placeholder="Name"
				type="text"
				value={this.state.user}
				onChange={this.handleUserChange}
			/>
			<textarea 
				placeholder="Leave a nice comment"
				style={{display: 'block'}} 
				value={this.state.text} 
				onChange={this.handleTextChange} 
			/>
			<button onClick={this.handleSubmit}>Post</button>
		</div>);
	}
}
