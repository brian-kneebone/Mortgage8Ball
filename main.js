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

// Utility method to debounce auto-completes

const debounce = (func, delay = 1000) => {

	let timeoutId = 0;

	return (...args) => {

			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => { func.apply(null, args); }, delay)
	}
}

// Utility method to normalize dollar input values

const normalizeDollarsValue = async (event) => {

	if (event.target.value.length < 0) return;
	if (event.target.type != 'text') return;
	if (!Number(event.target.value)) return;

	try {
		var number = Number(event.target.value.replace(/[^0-9.-]+/g,""));

		const formatter = new Intl.NumberFormat('en-CA', {
			style: 'decimal',
			useGrouping: 'always',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});

		var value = formatter.format(number);

		event.target.value = value;
	}
	catch {

	}

}

// Test dollar input normalization on initial principal

var initialPrincipal = document.querySelector('#initialPrincipal');
initialPrincipal.addEventListener('input', debounce(normalizeDollarsValue, 500));