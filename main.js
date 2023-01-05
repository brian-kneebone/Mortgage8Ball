// Prepare the options
const options = {
  type: 'date',
  dateFormat: 'yyyy-MM-dd',
	showHeader: false,
	showClearButton: false,
	editTimeManually: true
}

// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]', options);

// Loop on each calendar initialized
calendars.forEach(calendar => {
	// Add listener to select event
	calendar.on('select', date => {
		// console.log(date);
	});
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#startMortgageDate');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', datepicker => {
		// console.log(datepicker.data.value());
	});
}

// Set the current date/time for the mortgage start date.
const today = (new Date()).toISOString().split('T')[0];
calendars[0].startDate = today
calendars[0].save();
calendars[0].refresh();