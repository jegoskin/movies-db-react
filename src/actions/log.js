export const log = (message) => ({
	type: 'LOG',
	payload: {
		message
	}
})