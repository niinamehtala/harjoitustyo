function fetchHistoricalEvents() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;

    //console.log(day)
    //console.log(month)

    // wiki 
    fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Verkkovirhe, tapahtumia ei voitu ladata.');
        }
        return response.json();
    })
    .then(data => {
        displayEvents(data);
    })
    .catch(error => {
        console.error('Virhe haettaessa historiallisia tapahtumia:', error);
        displayErrorMessage("Tapahtumia ei voitu ladata. Yritä myöhemmin uudelleen.");
    });
}

function displayEvents(data) {
    let eventContainer = document.getElementById("events");

    eventContainer.innerHTML = ''; 

    if (data.events.length === 0) {
        displayErrorMessage("Tälle päivälle ei löytynyt historiallisia tapahtumia.");
        return;
    }

    
    data.events.forEach(event => {
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        // Muodostetaan tapahtuman sisältö
        eventDiv.innerHTML = `
            <h3>${event.year}</h3>
            <p>${event.text}</p>
        `;
        
        eventContainer.appendChild(eventDiv);
    });
}

function displayErrorMessage(message) {
    let eventContainer = document.getElementById("events");
    eventContainer.innerHTML = `<p class="error">${message}</p>`;
}

document.addEventListener("DOMContentLoaded", function() {
    fetchHistoricalEvents();
});