require('less/root.less');
require('less/tweak.less');
require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const Content = require('./content/content.jsx');
const NavBar = require('./navBar/navBar.jsx');
const Sidebar = require('./sidebar/sidebar.jsx');

const Main = createClass({
	displayName : 'Main',
	getInitialState() {
		return {
			sidebarOpen : false,
		};
	},
	openSidebar() {
		this.setState({
			sidebarOpen : true,
		});
	},
	closeSidebar() {
		this.setState({
			sidebarOpen : false,
		});
	},
	render(){
		const mainClassname = cx({
			'Main__sidebar--open' : this.state.sidebarOpen,
		}, 'Main');

		return <div className='container'>
			<div className={mainClassname}>
				<div className='navBar'>
					<NavBar/>
				</div>
				<div className='content'>
					<Content onEventClick={this.openSidebar}/>
				</div>
				<div className='sidebar'>
					<Sidebar close={this.closeSidebar}/>
				</div>
			</div>
		</div>;
	},
});

module.exports = Main;
