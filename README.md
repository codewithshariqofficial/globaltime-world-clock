# GlobalTime — Live World Clock Dashboard

A simple world clock dashboard built with **HTML, CSS and JavaScript**. It shows the current local time and date for 10 countries, updating every second — no libraries, no APIs, no build tools.

Each card also shows a **MORNING** or **NIGHT** badge and changes its color theme based on the local hour of that city.

## Features

- Live time updates every second
- Current date for every city
- Correct timezone and daylight saving handling via `Intl.DateTimeFormat`
- Morning/night badge with matching card theme
- Glassmorphism dark UI
- Responsive CSS Grid layout
- Invalid timezone error handling

## Countries

| Country | Timezone |
|---|---|
| Pakistan (Karachi) | `Asia/Karachi` |
| USA (New York) | `America/New_York` |
| UK (London) | `Europe/London` |
| Japan (Tokyo) | `Asia/Tokyo` |
| UAE (Dubai) | `Asia/Dubai` |
| Australia (Sydney) | `Australia/Sydney` |
| Canada (Toronto) | `America/Toronto` |
| Saudi Arabia (Riyadh) | `Asia/Riyadh` |
| Germany (Berlin) | `Europe/Berlin` |
| China (Shanghai) | `Asia/Shanghai` |

## Tech Stack

- HTML5
- CSS3 (Grid, variables, gradients, backdrop blur)
- JavaScript (ES6)
- Google Fonts — Poppins and JetBrains Mono

## Project Structure

```
globaltime-world-clock/
├── index.html   # Clock cards and page layout
├── style.css    # Theme, grid and responsive styles
├── script.js    # Time formatting and live updates
└── README.md
```

## Run Locally

Open `index.html` in any modern browser. That's it.

Or clone the repository:

```bash
git clone https://github.com/codewithshariqofficial/globaltime-world-clock.git
cd globaltime-world-clock
```

For development, you can use the **Live Server** extension in VS Code.

## Add a New Country

Add a card inside `#clock-grid` in `index.html`:

```html
<div class="clock-card" data-timezone="Europe/Paris">
    <div class="country-name">France (Paris)</div>
    <div class="time">00:00:00</div>
    <div class="date">Loading...</div>
</div>
```

The JavaScript picks up the new card automatically. Use any valid [IANA timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Customize the Theme

Colors are defined as CSS variables at the top of `style.css`:

```css
:root {
    --bg-color: #0f172a;
    --card-bg: rgba(255, 255, 255, 0.05);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent-color: #38bdf8;
}
```

## Author

**Shariq Shahid** — [@codewithshariqofficial](https://github.com/codewithshariqofficial)
