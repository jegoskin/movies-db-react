import { combineReducers } from 'redux';
import logs from './logs';
import movie from './movie';

const app = combineReducers({
	logs,
	movie
})

export default app;