require('./addEvent.less');
const React       = require('react');
const createClass = require('create-react-class');
const { Form, Text, TextArea } = require('informed');


const Panel = require('shared/panel/panel.jsx');

// TODO: Form validations
const AddEvent = createClass({
	displayName : 'AddEvent',
	getDefaultProps() {
		return {
			addEvent : () => {},
			saving   : false,
		};
	},
	getHeader() {
		return <div className='heading--regular'>Create New Event</div>;
	},
	getFooter() {
		return <div className='add-event__buttons'>
			<button disabled={this.props.saving} onClick={this.submitForm} type='button' className='button button--primary'>Save</button>
		</div>;
	},
	setFormApi(formApi) {
		this.formApi = formApi;
	},
	submitForm() {
		this.props.addEvent({
			...this.formApi.getState().values,
			timestamp : Date.now(),
		});
	},
	render(){
		return <div className='add-event__wrapper'>
			<Panel
				header={this.getHeader()}
				footer={this.getFooter()}
			>
				<Form getApi={this.setFormApi} id='addEvent-form'>
					<div>
						<label htmlFor='addEvent-title'>Title</label>
						<Text field='title' id='addEvent-title'/>
					</div>
					<div>
						<label htmlFor='addEvent-type'>Type</label>
						<Text field='type' id='addEvent-type'/>
					</div>
					<div>
						<label htmlFor='addEvent-serviceId'>Service ID</label>
						<Text field='serviceId' id='addEvent-serviceId'/>
					</div>
					<div>
						<label htmlFor='addEvent-icon'>Icon URL</label>
						<Text field='icon' id='addEvent-icon'/>
					</div>
					<div>
						<label htmlFor='addEvent-data'>Payload</label>
						<TextArea field='data' id='addEvent-data'/>
					</div>
				</Form>
			</Panel>
		</div>;
	},
});

module.exports = AddEvent;
