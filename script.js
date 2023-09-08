document.addEventListener("DOMContentLoaded", function () {
    // Function to update the current day of the week.
    function updateCurrentDayOfTheWeek() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDayOfTheWeek = new Date().getDay();
      const dayOfWeekElement = document.querySelector('.current-day-of-the-week');
      if (dayOfWeekElement) {
        dayOfWeekElement.textContent = ` ${daysOfWeek[currentDayOfTheWeek]}`;
      }
    }
  
    // Function to update the current UTC time.
    function updateCurrentUTCTime() {
        const options = { timeZoneName: "short" }; // Display timezone abbreviation
        const currentUTCTime = new Date().toLocaleString("en-US", options);
        const utcTimeElement = document.querySelector('.current-utc-time');
        if (utcTimeElement) {
          utcTimeElement.textContent = ` ${currentUTCTime}`;
        }
      }
  
    // Call the functions to update the DOM elements.
    updateCurrentDayOfTheWeek();
    updateCurrentUTCTime();
  });
  