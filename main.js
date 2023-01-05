// Initialize Bulma Calendars

const options = {
	type: 'date',
	dateFormat: 'yyyy-MM-dd',
	showHeader: false,
	showClearButton: false,
	editTimeManually: true
}

bulmaCalendar.attach('[type="date"]', options);

// Initialize Start Mortgage Date

const startMortgageDate = document.querySelector('#startMortgageDate').bulmaCalendar;

const today = (new Date()).toISOString().split('T')[0];
startMortgageDate.startDate = today

startMortgageDate.save();
startMortgageDate.refresh();
