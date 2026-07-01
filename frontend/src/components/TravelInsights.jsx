function TravelInsights({ weatherData }) {
  if (!weatherData) return null;

  const current = weatherData.current;
  const daily = weatherData.daily;
  const air = weatherData.airQuality;

  const insights = [];

  // Temperature
  if (current.temperature_2m >= 20 && current.temperature_2m <= 30) {
    insights.push({
      icon: "🌤",
      title: "Excellent Weather",
      text: "Perfect conditions for sightseeing and outdoor activities.",
    });
  } else if (current.temperature_2m < 10) {
    insights.push({
      icon: "🥶",
      title: "Cold Conditions",
      text: "Wear warm clothes before heading outside.",
    });
  } else {
    insights.push({
      icon: "☀️",
      title: "Warm Day",
      text: "Stay hydrated if you're outdoors for long periods.",
    });
  }

  // Wind
  if (current.wind_speed_10m < 20) {
    insights.push({
      icon: "🚶",
      title: "Walking Friendly",
      text: "Light winds make today comfortable for walking tours.",
    });
  } else {
    insights.push({
      icon: "💨",
      title: "Wind Alert",
      text: "Expect noticeable winds during the day.",
    });
  }

  // AQI
  if (air && air.us_aqi <= 50) {
    insights.push({
      icon: "🌿",
      title: "Air Quality",
      text: "Air quality is good for outdoor activities.",
    });
  } else if (air && air.us_aqi <= 100) {
    insights.push({
      icon: "😷",
      title: "Moderate AQI",
      text: "Sensitive people should limit prolonged outdoor exposure.",
    });
  } else if (air) {
    insights.push({
      icon: "⚠️",
      title: "Poor Air Quality",
      text: "Consider wearing a mask and reducing outdoor activities.",
    });
  }

  // Sunrise & Sunset
  if (daily?.sunrise?.length && daily?.sunset?.length) {
    const sunrise = new Date(daily.sunrise[0]).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    const sunset = new Date(daily.sunset[0]).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    insights.push({
      icon: "🌅",
      title: "Golden Hours",
      text: `Sunrise at ${sunrise} • Sunset at ${sunset}`,
    });
  }

  return (
    <section className="travel-section">

      <h2 className="section-title">
        🌍 Travel Intelligence
      </h2>

      <div className="travel-grid">

        {insights.map((item, index) => (
          <div className="travel-card" key={index}>

            <div className="travel-icon">
              {item.icon}
            </div>

            <div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TravelInsights;