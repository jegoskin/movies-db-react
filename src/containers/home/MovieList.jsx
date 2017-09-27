import React from 'react';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, IconButton } from 'material-ui';

import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DetailIcon from 'material-ui/svg-icons/action/search';
import EditIcon from 'material-ui/svg-icons/image/edit';

class MovieList extends React.Component{

	render() {
		return (
			<div>
				<Table>
					<TableHeader
						displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
					>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Rating</TableHeaderColumn>
							<TableHeaderColumn></TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} >
						{ this.props.movies.map((item, index) => <TableRow key={ index }>
							<TableRowColumn>{ item.id }</TableRowColumn>
							<TableRowColumn>{ item.name }</TableRowColumn>
							<TableRowColumn>{ item.rating }</TableRowColumn>
							<TableRowColumn>
								<IconButton tooltip="Delete" tooltipPosition="left-left" onClick={(e) => this.props.onDelete(item)} ><DeleteIcon /></IconButton>
								<IconButton tooltip="Detail" tooltipPosition="left-left"onClick={(e) => this.props.onDetail(item.id)} ><DetailIcon/></IconButton>
								<IconButton tooltip="Edit" tooltipPosition="left-left"onClick={(e) => this.props.onEdit(item.id)} ><EditIcon/></IconButton>
							</TableRowColumn>
						</TableRow>) }
					</TableBody>
				</Table>
			</div>
		)
	}
}

export default MovieList;