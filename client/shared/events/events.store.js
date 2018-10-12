const flux = require('pico-flux');

const State = {
	events      : [],
	loading     : false,
	saving      : false,
	activeEvent : -1,
	adding     	: false,
};

const EventsStore = flux({
	setEvents(events) {
		State.events = events;
	},
	setLoading(loading) {
		State.loading = loading;
	},
	addEvent(event) {
		State.events.push(event);
	},
	setSaving(saving) {
		State.saving = saving;
	},
	setFilter(filter) {
		if(filter) {
			State.filter = filter.trim();
		} else {
			State.filter = '';
		}
	},
	setActiveEvent(id) {
		State.activeEvent = id;
	},
	removeEvent(id) {
		State.events = State.events.filter((event) => event.id !== id);
	},
	setAdding(adding) {
		State.adding = adding;
	},
});

EventsStore.getEvents = () => State.events;
EventsStore.getSaving = () => State.saving;
EventsStore.getEventById = (id) => State.events.find((event) => event.id === id);
EventsStore.getActiveEventId = () => State.activeEvent;
EventsStore.getActiveEvent = () => State.events.find((event) => event.id === State.activeEvent);
EventsStore.isLoading = () => State.loading;
EventsStore.isAdding = () => State.adding;

// TODO: Memoize this so it doesn't get too expensive
EventsStore.getFilteredEvents = () => {
	if(!State.filter) {
		return State.events;
	}

	const typeRegex = /([^:]+):(.+)/;
	const result = typeRegex.exec(State.filter);
	if(result && result.length > 2 && result[2].trim() !== '') {
		return State.events.filter((event) => {
			return typeof event[result[1]] === 'string' && event[result[1]].toLowerCase().indexOf(result[2].trim().toLowerCase()) > -1;
		});
	}

	const filterLower = State.filter.toLowerCase();
	return State.events.filter((event) => typeof event.title === 'string' && event.title.toLowerCase().indexOf(filterLower) > -1);
};

module.exports = EventsStore;
