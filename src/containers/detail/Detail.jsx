import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'material-ui';

import StarIcon from 'material-ui/svg-icons/toggle/star';

import { _get, get } from '../../actions/movie';

class Detail extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		_get(id, this.props.get);
	}
	render() {
		return(
			<div>
				<Card>
					<CardTitle title={ this.props.movie.name } subtitle={ <div><StarIcon style={{height: '16px'}} />{this.props.movie.rating}</div> } />
					<CardText>
						<p> { this.props.movie.description } </p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))