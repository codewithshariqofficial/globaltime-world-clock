function getDayNight(date, timezone) {
    const options = { timeZone: timezone, hour: '2-digit', hour12: false };
    let hour = parseInt(new Intl.DateTimeFormat('en-US', options).format(date), 10);
    if (hour === 24) hour = 0;
    return hour >= 6 && hour < 18 ? { label: 'MORNING', cls: 'morning' } : { label: 'NIGHT', cls: 'night' };
}

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
            
            // Day/Night badge
            const dayNight = getDayNight(now, timezone);
            let badge = card.querySelector('.day-night-badge');
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'day-night-badge';
                card.appendChild(badge);
            }
            badge.textContent = dayNight.label;
            card.classList.remove('morning', 'night');
            card.classList.add(dayNight.cls);
            
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
