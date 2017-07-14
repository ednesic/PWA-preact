import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import style from '../style';


import Header from './header';
import AppSideBar from './sidebar';
import Sidebar from 'react-sidebar';

import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      sidebarOpen: false
	    }

	    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	  }

	  onSetSidebarOpen(open) {
	    this.setState({sidebarOpen: open});
	  }

		sidebarStyle(){
			return {
				sidebar:{
					zIndex: 3,
					width: '60%',
					backgroundColor: '#673AB7'
				},
				overlay:{
					zIndex: 2
				}
			}
		}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {

		var sidebarContent = <AppSideBar />;

		return (
			<div id="app">
			<Header hamburgerClick={this.onSetSidebarOpen.bind(this, true)}/>
			<Sidebar sidebar={sidebarContent}
						styles={this.sidebarStyle()}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
						</Router>
      </Sidebar>
			</div>
		);
	}
}
