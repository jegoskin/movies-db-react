import React from 'react';

import { Dialog, FlatButton, RaisedButton } from 'material-ui';

class ComfirmDialog extends React.Component {
	constructor() {
		super();
		this.state = this.getInitState();
	}
	getInitState = () => ({
		open: false,
		onResult: null,
		title: ''
	})
	show = (title, callback) => {
		let newState = {
			open: true,
			onResult: callback,
			title: title
		}
		this.setState(newState)
	}
	hide = () => this.setState(this.getInitState())
	render(){
		const actions = [
			<FlatButton label='Cancle' onClick={() => this.state.onResult(false)} />,
			<RaisedButton label='OK' onClick={() => this.state.onResult(true)}/>
		]
		return (
			<Dialog
				title={this.state.title}
				actions={actions}
				modal={true}
				open={this.state.open}
				onRequestClose={this.hide}
			>
			</Dialog>
		)
	}
}

export default ComfirmDialog;