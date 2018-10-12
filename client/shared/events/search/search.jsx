require('./search.less');
const React       = require('react');
const createClass = require('create-react-class');

const EventsActions = require('../events.actions');

const EventSearch = createClass({
	displayName : 'EventSearch',
	timeoutId   : -1,
	onSearchChange(e) {
		clearTimeout(this.timeoutId);
		const value = e.currentTarget.value;
		this.timeoutId = setTimeout(() => {
			EventsActions.setFilter(value);
		}, 500);
	},
	render() {
		return <div className='event__search' >
			<input placeholder='Search...' name='search' type='text' onChange={this.onSearchChange}/>
		</div>;
	},
});

module.exports = EventSearch;
