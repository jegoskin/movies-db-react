import api from '../api/api';
import Movie from '../classes/Movie';

export const _add = (movieData, callback) => {
	let movieEntity = new Movie(movieData);
	api.insert(movieEntity.json()) 
		.then(() => callback() )
		.catch((err) => alert(err) )
}

export const _edit = (movieData, callback) => {
	let movieEntity = new Movie(movieData);
	api.edit(movieEntity.json())
		.then(() => callback())
		.catch((err) => alert(err))
}

export const list = (moviesData) => ({ 
	type: 'MOVIE_LIST',
	payload: moviesData
})

export const _list = (callback) => {
	api.list()
		.then((moviesData) => callback(moviesData))
		.catch((err) => alert(err))
}

export const _delete = (id, callback) => {
	api.delete(id)
		.then((moviesData) => callback(moviesData))
		.catch((err) => alert(err))
}

export const _get = (id, callback) => {
	api.get(id)
		.then((movieData) => callback (movieData))
		.catch((err) => alert(err))
}

export const get = (movieData) => ({
	type: 'MOVIE_DETAIL',
	payload : movieData
})