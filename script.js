function updateClocks() {
    const clockCards = document.querySelectorAll('.clock-card');
    
    clockCards.forEach(card => {
        const timezone = card.getAttribute('data-timezone');
        const timeElement = card.querySelector('.time');
        const dateElement = card.querySelector('.date');
        
        try {
            // Options for formatting time
            const timeOptions = {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            
            // Options for formatting date
            const dateOptions = {
                timeZone: timezone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            
            const now = new Date();
            
            // Format time and date
            const timeString = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
            const dateString = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
            
            // Update DOM
            timeElement.textContent = timeString;
            dateElement.textContent = dateString;
            
        } catch (error) {
            console.error(`Error updating clock for ${timezone}:`, error);
            timeElement.textContent = "Error";
            dateElement.textContent = "Invalid Timezone";
        }
    });
}

// Initial update
updateClocks();

// Update every second
setInterval(updateClocks, 1000);
