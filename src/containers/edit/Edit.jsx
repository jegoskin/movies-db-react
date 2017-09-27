import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Card, CardTitle, CardText, TextField, CardActions, RaisedButton } from 'material-ui';

import { _get, get, _edit } from '../../actions/movie';

class Edit extends React.Component {
	constructor () {
		super();
		this.state = this.getInitState()
	}

	getInitState = () => ({
		id: null,
		name: '',
		description: '',
		rating: ''
	})

	componentDidMount() {
		let id = this.props.match.params.id;
		_get(id, (movieDetail) => {
			this.props.get(movieDetail);
			this.setState({
				id: this.props.movie.id,
				name: this.props.movie.name,
				description: this.props.movie.description,
				rating: this.props.movie.rating
			})
		});
	}

	handleChange = (e) => {
		let value = e.currentTarget.value;
		let id = e.currentTarget.id;
		let newState = Object.assign({}, this.state);
		newState[id] = value;
		this.setState(newState);
	}

	handleClick = (e) => {
		e.preventDefault();
		let movieData = Object.assign({}, this.state);
		_edit(movieData, () => this.props.history.push('/'))
		this.setState(this.getInitState());
	}

	checkInputs = () => {
		return (this.state.name && this.state.rating)? false : true;
	}

	render() {
		return(
			<div>
				<Card>
					<CardTitle title="Upravit film"/>
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

const mapStateToProps = (state) => ({
	movie : state.movie.movieDetail
})

const mapDispatchToProps = {
	get
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))