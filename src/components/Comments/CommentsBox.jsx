import React, { Component } from 'react';


export default class CommentsBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			user: ''
		};

	}

	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	handleUserChange(e) {
		this.setState({ user: e.target.value });
	}

	handleSubmit(e) {
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
				onChange={(e) => this.handleUserChange(e)}
			/>
			<textarea 
				placeholder="Leave a nice comment"
				style={{display: 'block'}} 
				value={this.state.text} 
				onChange={(e) => this.handleTextChange(e)} 
			/>
			<button onClick={() => this.handleSubmit()}>Post</button>
		</div>);
	}
}
