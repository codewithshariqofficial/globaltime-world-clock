# GlobalTime - Live World Clock Dashboard

A simple world clock dashboard built with HTML, CSS, and JavaScript. It shows the current local time and date for 10 countries, updating every second - no libraries, no APIs, no build tools.

Each card also shows a MORNING or NIGHT badge and changes its color theme based on the local hour of that city.

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
| Germany (Berlin) | `Europe/Berlin` |
| Brazil (Sao Paulo) | `America/Sao_Paulo` |
| India (Kolkata) | `Asia/Kolkata` |
| Canada (Toronto) | `America/Toronto` |

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (Intl API)

## Project Structure

```
globaltime-world-clock/
├── index.html   # Markup
├── style.css    # Styling
└── script.js    # Clock logic
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in any modern browser.
3. Times update automatically every second.

## Live Demo

https://globaltime-world-clock.vercel.app

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Code With Shariq Official** - [GitHub](https://github.com/codewithshariqofficial)