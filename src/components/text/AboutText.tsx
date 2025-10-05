export default function AboutText() {
  return (
    <div className="max-w-6xl mx-auto px-6 p-3">
      <h1 className="text-3xl font-bold mb-6">About This Weather App</h1>
      <p className="mb-6">
        This project is a simple yet powerful weather application built with{" "}
        Next.js, styled using Tailwind CSS, and enhanced with Firebase for data
        persistence and authentication.
      </p>
      <p className="mb-6">
        The app fetches live weather data from the{" "}
        <a
          href="https://api.open-meteo.com/v1/forecast"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Open-Meteo API
        </a>
        , which provides accurate forecasts without requiring an API key. This
        makes the app fast, lightweight, and accessible for anyone to try out.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Real-time Forecasts</strong>: Displays up-to-date weather
          conditions including temperature, wind speed, and humidity.
        </li>
        <li>
          <strong>Select Country</strong>: Choose a country from the dropdown to
          view localized weather updates.
        </li>
        <li>
          <strong>Responsive Design</strong>: Fully responsive layout built with
          Tailwind CSS for a clean user experience across devices.
        </li>
        <li>
          <strong>Firebase Integration</strong>:
          <ul className="list-disc pl-6 mt-2">
            <li>
              Authentication (sign up &amp; log in to personalize your
              experience)
            </li>
            <li>Optional storage for saving favorite countries</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Frontend</strong>:{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Next.js
          </a>{" "}
          – React framework for fast rendering and routing
        </li>
        <li>
          <strong>Styling</strong>:{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Tailwind CSS
          </a>{" "}
          – utility-first CSS framework
        </li>
        <li>
          <strong>Backend &amp; Auth</strong>:{" "}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Firebase
          </a>{" "}
          – user management and data storage
        </li>
        <li>
          <strong>Weather Data</strong>:{" "}
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open-Meteo API
          </a>{" "}
          – free and reliable weather forecasts
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>The user selects a country from the dropdown menu.</li>
        <li>
          The app queries the Open-Meteo API for forecast data based on that
          country’s location.
        </li>
        <li>Results are displayed in a clean, responsive interface.</li>
        <li>
          If logged in, the user can save favorite countries with Firebase for
          quick access later.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why I Built This</h2>
      <p className="mb-6">
        I created this project to explore integrating Next.js with real-world
        APIs, while learning how to combine Firebase authentication and
        persistent user data into a modern web app. It’s designed to be fast,
        simple, and developer-friendly.
      </p>
    </div>
  );
}
