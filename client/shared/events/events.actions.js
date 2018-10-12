const request = require('superagent');

const EventsStore = require('./events.store');

// TODO: Replace this with a url from config
const url = 'https://forgetful-elephant.herokuapp.com/events';

const EventsActions = {
	fetchEvents() {
		EventsStore.setters.setLoading(true);
		request.get(url).then((response) => {
			EventsStore.setters.setEvents(response.body);
			EventsStore.setters.setLoading(false);
		}, (err) => {
			EventsStore.setters.setError(err.message);
			EventsStore.setters.setLoading(false);
		});
	},
	addEvent(event) {
		EventsStore.setters.setSaving(true);
		// TODO: Error handling
		request.post(url).send(event).then((response) => {
			EventsStore.setters.addEvent(response.body);
			EventsStore.setters.setSaving(false);
		}, () => {
			EventsStore.setters.setSaving(false);
		});
	},
	setActiveEvent(id) {
		EventsStore.setters.setActiveEvent(id);
	},
	deleteEvent(id) {
		request.delete(`${url}/${id}`).then(() => {
			EventsStore.setters.removeEvent(id);
		});
	},
	setFilter(filter) {
		EventsStore.setters.setFilter(filter);
	},
};

module.exports = EventsActions;
