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
	getDefaultProps() {
		return {
			onEventClick : () => {},
			setAdding    : () => {},
		};
	},
	toggleAdd() {
		this.props.setAdding(!this.props.adding);
	},
	render(){
		const rootClassname = cx({
			'content__wrapper--adding' : this.props.adding,
		}, 'content__wrapper');

		const addButtonClasses = cx({
			'button--primary' : !this.props.adding,
			'button--danger'  : this.props.adding,
		}, 'button');

		return <div className={rootClassname}>
			<div className='content__menu'>
				<div>
					<button className={addButtonClasses} onClick={this.toggleAdd}>{this.props.adding ? 'Close' : 'Add'}</button>
				</div>
			</div>
			<div className='content__events'>
				<Events onEventClick={this.props.onEventClick}/>
			</div>
			<div className='content__add-event'>
				<AddEvent
					addEvent={this.props.addEvent}
					saving={this.props.saving}
				/>
			</div>
		</div>;
	},
});

const ContentWrapper = createClass({
	render() {
		return <EventsStore.component
			component={Content}
			getProps={() => ({
				addEvent  : EventsActions.addEvent,
				saving    : EventsStore.getSaving(),
				adding    : EventsStore.isAdding(),
				setAdding : EventsActions.setAdding,
			})}
		/>;
	},
});

module.exports = ContentWrapper;
