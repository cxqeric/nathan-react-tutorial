const CREATE_REACT_COMMENT = 'nathan-tutorial/comments/CREATE_REACT_COMMENT';
const CREATE_ANGULAR_COMMENT = 'nathan-tutorial/comments/CREATE_ANGULAR_COMMENT';

const initialState = {
	reactComments: [],
	angularComments: [],
};

export default (state=initialState, action) => {
	switch (action.type) {
		case CREATE_REACT_COMMENT:
			return {
				...state,
				reactComments: [ ...state.reactComments, action.newComment ]
			};
		case CREATE_ANGULAR_COMMENT:
			return {
				...state,
				angularComments: [ ...state.angularComments, action.newComment ]
			}
		default:
			return state;
	}
}

export const createReactComment = newComment => {
	return {
		type: CREATE_REACT_COMMENT,
		newComment
	}
}

export const createAngularComment = newComment => {
	return {
		type: CREATE_ANGULAR_COMMENT,
		newComment
	}
}
