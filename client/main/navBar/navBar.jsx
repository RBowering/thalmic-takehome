require('./navBar.less');
const React       = require('react');
const createClass = require('create-react-class');

const EventsSearch = require('shared/events/search/search.jsx');

const NavBar = createClass({
	displayName : 'NavBar',
	render(){
		return <div className='navbar__wrapper'>
			<div className='navbar__logo'>
				<img src='https://www.thalmic.com/assets/quartz/navbar/thalmic-logo-white.svg'/>
			</div>
			<div className='navbar__title'>
				<span className='heading--regular'>Robert Bowering Take-Home Challenge</span>
			</div>
			<div className='navbar__search'>
				<EventsSearch/>
			</div>
		</div>;
	},
});

module.exports = NavBar;
