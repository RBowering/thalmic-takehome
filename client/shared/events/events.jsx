require('./events.less');
const React       = require('react');
const createClass = require('create-react-class');

const EventsStore = require('./events.store');
const EventsActions = require('./events.actions');
const Event = require('./event/event.jsx');

const EventsLayout = createClass({
	getDefaultProps() {
		return {
			events         : [],
			activeEvent    : -1,
			onEventClick   : () => {},
			setActiveEvent : () => {},
			deleteEvent    : () => {},
		};
	},
	onEventClick(id) {
		this.props.setActiveEvent(id);
		this.props.onEventClick();
	},
	renderEvents() {
		return this.props.events.map((event) => <Event
			active={this.props.activeEvent === event.id}
			key={event.id}
			event={event}
			onClick={this.onEventClick}
			deleteEvent={this.props.deleteEvent}
		/>);
	},
	render() {
		// TODO: Add a real spinner
		if(this.props.loading) {
			return <div className='events__wrapper--loading'>
                Loading...
			</div>;
		}

		if(!this.props.events.length) {
			return <div className='events__none-found'>
                No Events Found!
			</div>;
		}

		return <div className='events__wrapper'>
			{this.renderEvents()}
		</div>;
	},
});

const Events = createClass({
	componentDidMount() {
		EventsActions.fetchEvents();
	},
	render() {
		return <EventsStore.component
			component={EventsLayout}
			getProps={() => ({
				events         : EventsStore.getFilteredEvents(),
				activeEvent    : EventsStore.getActiveEventId(),
				setActiveEvent : EventsActions.setActiveEvent,
				deleteEvent    : EventsActions.deleteEvent,
				loading        : EventsStore.isLoading(),
				onEventClick   : this.props.onEventClick,
			})}
		/>;
	},
});

module.exports = Events;
