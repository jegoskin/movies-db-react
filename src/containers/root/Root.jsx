import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { log } from '../../actions/log';
import { AppBar, FlatButton, IconButton } from 'material-ui';

import AddIcon from 'material-ui/svg-icons/content/add';
import HomeIcon from 'material-ui/svg-icons/action/home';

import Home from '../home/Home';
import New from '../new/New';
import Detail from '../detail/Detail';
import Edit from '../edit/Edit';

class NavBarBase extends React.Component {
  render() {
    this.props;
    return (
      <AppBar
        title="Movie Database"
        iconElementLeft={<IconButton onClick={() => this.props.history.push('/')}><HomeIcon /></IconButton>}
        iconElementRight={<IconButton onClick={() => this.props.history.push('/new')}><AddIcon /></IconButton>}
      >
      </AppBar>
    )
  }
}
const NavBar = withRouter(NavBarBase);

class Root extends React.Component {
  constructor() {
    super();
    this.state = this.getInitState();
  }
  getInitState = () => ({})
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/new' component={New}/>
          <Route exact path='/detail/:id' component={Detail}/>
          <Route exact path='/edit/:id' component={Edit}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
