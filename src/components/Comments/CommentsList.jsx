import React from 'react';


export default ({ comments }) => {
	return (<div>
		<hr />
		<h1>Comments</h1>
		{
			comments.map((comment, i) => {
				return (<div key={i}>
					<h2>{comment.user} said:</h2>
					<p>{comment.text}</p>
				</div>)
			})
		}
	</div>);
}
