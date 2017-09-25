const logs = (state = [], action) => {
	let newState = state.slice(0);
	switch (action.type) {
		case '@@redux/INIT':
			break;
		case 'LOG':
			newState.push(action.payload);
		default:
			console.log(`ACTION`, action);
	}
	return newState;
}
export default logs;