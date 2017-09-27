const movie = (state = {
	list : [],
	movieDetail : {}
}, action) => {
	let newState = Object.assign({},state);
	switch (action.type) {
		case 'MOVIE_LIST' :
			newState.list = action.payload;
			break;
		case 'MOVIE_DETAIL' :
			newState.movieDetail = action.payload;
			break;
	}
	return newState;
}

export default movie;