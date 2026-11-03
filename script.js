const clockCards = document.querySelectorAll('.clock-card');

function getDayNight(date, timezone) {
    const hour = parseInt(
        new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            hour12: false
        }).format(date),
        10
    ) % 24;

    return hour >= 6 && hour < 18
        ? { label: 'MORNING', cls: 'morning' }
        : { label: 'NIGHT', cls: 'night' };
}

function updateClocks() {
    clockCards.forEach(card => {
        const timezone = card.getAttribute('data-timezone');
        const timeElement = card.querySelector('.time');
        const dateElement = card.querySelector('.date');

        try {
            const timeOptions = {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };

            const dateOptions = {
                timeZone: timezone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };

            const now = new Date();

            timeElement.textContent = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
            dateElement.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(now);

            const dayNight = getDayNight(now, timezone);

            let badge = card.querySelector('.day-night-badge');
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'day-night-badge';
                card.appendChild(badge);
            }

            badge.textContent = dayNight.label;
            card.classList.toggle('morning', dayNight.cls === 'morning');
            card.classList.toggle('night', dayNight.cls === 'night');
        } catch (error) {
            console.error(`Error updating clock for ${timezone}:`, error);
            timeElement.textContent = 'Error';
            dateElement.textContent = 'Invalid Timezone';
        }
    });
}

// Update once on load, then every second
updateClocks();
setInterval(updateClocks, 1000);

// Refresh immediately when the user returns to the tab
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateClocks();
    }
});
