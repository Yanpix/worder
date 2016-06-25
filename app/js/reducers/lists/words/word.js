export const word = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_WORD': {
			return {
				id: action.id,
				title: action.title,
				translation: action.translation,
				description: action.description
			};
		}
		default: {
			return state;
		}
	}
};