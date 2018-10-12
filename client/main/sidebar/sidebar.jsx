require('./sidebar.less');
const React       = require('react');
const createClass = require('create-react-class');

const EventsStore = require('shared/events/events.store');
const EventsActions = require('shared/events/events.actions');

const SidebarContent = createClass({
	displayName : 'SidebarContent',
	getDefaultProps() {
		return {
			event          : null,
			close          : () => {},
			setActiveEvent : () => {},
		};
	},
	close() {
		this.props.setActiveEvent(-1);
		this.props.close();
	},
	render() {
		if(!this.props.event) {
			return null;
		}

		// TODO: Perhaps use moment to give custom formatting
		const timestamp = (new Date(this.props.event.timestamp)).toLocaleString();

		return <div className='sidebar__wrapper'>
			<div className='sidebar__row sidebar__row--close'>
				<div onClick={this.props.close}>X</div>
			</div>
			<div className='sidebar__row sidebar__row--icon'>
				<img height={50} width={50} src={this.props.event.icon}/>
			</div>
			<div className='sidebar__row sidebar__row--title'>
            	<div className='heading--regular'>
            		{this.props.event.title}
            	</div>
			</div>
			<div className='sidebar__row sidebar__row--item sidebar__row--service'>
            	<div className='heading--subheading'>Service ID</div>
            	<div>{this.props.event.serviceId}</div>
			</div>
			<div className='sidebar__row sidebar__row--item sidebar__row--type'>
				<div className='heading--subheading'>Type</div>
				<div>{this.props.event.type}</div>
			</div>
			<div className='sidebar__row sidebar__row--item sidebar__row--timestamp'>
            	<div className='heading--subheading'>Timestamp</div>
            	<div>{timestamp}</div>
			</div>
			<div className='sidebar__row sidebar__row--data'>
				<code>{this.props.event.data}</code>
			</div>
		</div>;
	},
});

const Sidebar = createClass({
	displayName : 'Sidebar',
	getDefaultProps() {
		return {
			close : () => {},
		};
	},
	render() {
		return <EventsStore.component
			component={SidebarContent}
			getProps={() => ({
				event          : EventsStore.getActiveEvent(),
				close          : this.props.close,
				setActiveEvent : EventsActions.setActiveEvent,
			})}
		/>;
	},
});

module.exports = Sidebar;
