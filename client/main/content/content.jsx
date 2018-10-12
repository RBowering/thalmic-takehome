require('./content.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const Events = require('shared/events/events.jsx');
const AddEvent = require('./addEvent/addEvent.jsx');
const EventsStore = require('shared/events/events.store');
const EventsActions = require('shared/events/events.actions');

const Content = createClass({
	displayName : 'Content',
	getInitialState() {
		return {
			adding : false,
		};
	},
	getDefaultProps() {
		return {
			openAddEvent : () => {},
			onEventClick : () => {},
			activeEvent  : -1,
		};
	},
	openAddEvent() {
		this.setState({
			adding : true,
		});
	},
	toggleAdd() {
		this.setState({
			adding : !this.state.adding,
		});
	},
	render(){
		const rootClassname = cx({
			'content__wrapper--adding' : this.state.adding,
		}, 'content__wrapper');

		const addButtonClasses = cx({
			'button--primary' : !this.state.adding,
			'button--danger'  : this.state.adding,
		}, 'button');

		return <div className={rootClassname}>
			<div className='content__menu'>
				<div>
					<button className={addButtonClasses} onClick={this.toggleAdd}>{this.state.adding ? 'Close' : 'Add'}</button>
				</div>
			</div>
			<div className='content__events'>
				<Events activeEvent={this.props.activeEvent} onEventClick={this.props.onEventClick}/>
			</div>
			<div className='content__add-event'>
				<EventsStore.component
					component={AddEvent}
					getProps={() => ({
						cancel   : this.toggleAdd,
						addEvent : EventsActions.addEvent,
						saving   : EventsStore.getSaving(),
					})}
				/>
			</div>
		</div>;
	},
});

module.exports = Content;
