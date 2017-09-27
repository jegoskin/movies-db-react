import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardMedia, Dialog, FlatButton, RaisedButton } from 'material-ui';
import ComfirmDialog from '../../components/ComfirmDialog'
import { list, _list, _delete } from '../../actions/movie';
import MovieList from './MovieList';

class Home extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		_list(this.props.list)
	}
	handleDelete = (movie) => {
		this.comfirmDialog.show(`Are you sure you want to delete "${movie.name}"?`, (result) => {
			if (result) {
				_delete(movie.id, moviesData => {
					this.props.list(moviesData);
					this.forceUpdate();
				})
			}
			this.comfirmDialog.hide()
		});
	}
	handleDetail = (id) => {
		this.props.history.push('/detail/'+id);
	}
	handleEdit = (id) => {
		this.props.history.push('/edit/'+id)
	}
	render () {
		return (
			<div>
				<Card>
					<CardTitle title="Home" />
					<CardMedia>
						<MovieList movies={this.props.movies} onDelete={this.handleDelete} onDetail={this.handleDetail} onEdit={this.handleEdit} />
					</CardMedia>
				</Card>
				<ComfirmDialog ref={(i) => {this.comfirmDialog = i} }  />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	movies : state.movie.list
})

const mapDispatchToProps = {
	list
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
