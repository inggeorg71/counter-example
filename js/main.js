let  yourDate = "2019-08-26";

let currentDate = moment();
let destinationDate = moment(yourDate,'YYYY-MM-DD');
let timeDifference = destinationDate.diff(currentDate,"seconds");

let clock = $('.your-clock').FlipClock(timeDifference,{
	clockFace: 'DailyCounter',
	clockFaceOptions: {
		countdown: true,
		language: 'german'
	}
});
