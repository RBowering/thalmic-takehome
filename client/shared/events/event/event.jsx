require('./event.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const Panel = require('shared/panel/panel.jsx');

const Event = createClass({
	displayName : 'Event',
	getDefaultProps() {
		return {
			active      : false,
			onClick     : () => {},
			event       : {},
			deleteEvent : () => {},
		};
	},
	onClick() {
		this.props.onClick(this.props.event.id);
	},
	deleteEvent() {
		this.props.deleteEvent(this.props.event.id);
	},
	render() {
		const rootClassname = cx({
			'event__wrapper--active' : this.props.active,
		}, 'event__wrapper');

		return <div className={rootClassname} >
			<Panel
				header={<div className='event__title heading--regular'>{this.props.event.title}</div>}
				icon={<img height={50} width={50} src={this.props.event.icon}/>}
				footer={
					<div className='event__footer'>
						<button onClick={this.onClick} className='button button--primary'>Inspect</button>
						<button onClick={this.deleteEvent} className='button button--danger'>Delete</button>
					</div>
				}
			/>
		</div>;
	},
});

module.exports = Event;
