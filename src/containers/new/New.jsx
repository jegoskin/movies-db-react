import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardText, TextField, CardActions, RaisedButton } from 'material-ui';
import { _add } from '../../actions/movie';

class New extends React.Component {
	constructor () {
		super();
		this.state = this.getInitState()
	}

	getInitState = () => ({
		name: '',
		description: '',
		rating: ''
	})

	handleChange = (e) => {
		let value = e.currentTarget.value;
		let id = e.currentTarget.id;
		let newState = Object.assign({}, this.state);
		if (id == 'rating')	{
			value = value > 10? 10 : value;
			value = value < 0? 0 : value;
		}
		newState[id] = value;
		this.setState(newState);
	}

	handleClick = (e) => {
		e.preventDefault();
		let movieData = Object.assign({}, this.state);
		_add(movieData, () => this.props.history.push('/'))
		this.setState(this.getInitState());
	}

	checkInputs = () => {
		return (this.state.name && this.state.rating)? false : true;
	}

	render() {
		return (
			<div>
				<Card>
					<CardTitle title="Inset new movie"/>
					<CardText>
						<TextField value={this.state.name} onChange={this.handleChange} type="text" id="name" floatingLabelText="Name" fullWidth={true} />
						<TextField value={this.state.description} onChange={this.handleChange} type="text" id="description" floatingLabelText="Description" fullWidth={true} />
						<TextField value={this.state.rating} onChange={this.handleChange} type="number" min="0" max="10" id="rating" floatingLabelText="Rating" fullWidth={true} />
						<CardActions><RaisedButton primary={true} label="Send" onClick={this.handleClick} disabled={this.checkInputs()}/></CardActions>
					</CardText>
				</Card>
			</div>
		)
	}
}
export default withRouter(New)
