function updateClock() {
    const now = new Date();

    // Get hours

    let hours = now.getHours();

    const minutes = String(now.getMinutes()).padStart(2, "0");

    const seconds = String(now.getSeconds()).padStart(2, "0");

    // AM / PM

    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24 hour → 12 hour

    hours = hours % 12;

    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");

    // Display time

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;

    // Display AM / PM

    document.getElementById("ampm").textContent = ampm;

    // DATE + DAY
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    };

    const formattedDate = now.toLocaleDateString("en-IN", options);

    document.getElementById("date").textContent = formattedDate;
}

// Start clock

updateClock();

// Update every second

setInterval(updateClock, 1000);



const API_KEY = "YOUR_OPENWEATHER_API_KEY";

const CITY = "Surat";

async function getWeather() {
    if (API_KEY === "YOUR_OPENWEATHER_API_KEY") {
        document.getElementById("condition").textContent =
            "Add OpenWeather API key";

        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();

        // Temperature

        const temperature = Math.round(data.main.temp);

        document.getElementById("temperature").textContent =
            `${temperature}°C`;

        // Weather condition

        const condition = data.weather[0].description;

        document.getElementById("condition").textContent = condition;

        // Weather icon

        const weatherMain = data.weather[0].main.toLowerCase();

        let icon = "🌤️";

        if (weatherMain.includes("clear")) {
            icon = "☀️";
        } else if (weatherMain.includes("cloud")) {
            icon = "☁️";
        } else if (weatherMain.includes("rain")) {
            icon = "🌧️";
        } else if (weatherMain.includes("thunder")) {
            icon = "⛈️";
        } else if (weatherMain.includes("snow")) {
            icon = "❄️";
        } else if (
            weatherMain.includes("mist") ||
            weatherMain.includes("fog")
        ) {
            icon = "🌫️";
        }

        document.getElementById("weatherIcon").textContent = icon;
    } catch (error) {
        document.getElementById("condition").textContent =
            "Weather unavailable";

        document.getElementById("error").textContent = error.message;
    }
}

// Get weather

getWeather();

// Refresh weather every 10 minutes

setInterval(getWeather, 10 * 60 * 1000);
