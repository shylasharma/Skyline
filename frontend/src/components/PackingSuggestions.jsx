function PackingSuggestions({ weatherData }) {
  if (!weatherData) return null;

  const temp = weatherData.current.temperature_2m;
  const code = weatherData.current.weather_code;
  const wind = weatherData.current.wind_speed_10m;

  const clothing = [];
  const essentials = [];
  const warnings = [];

  // Clothing
  if (temp < 10) {
    clothing.push("🧥 Warm Jacket", "🧣 Scarf", "🧤 Gloves");
  } else if (temp < 20) {
    clothing.push("🧥 Light Jacket", "👖 Jeans");
  } else if (temp < 30) {
    clothing.push("👕 T-Shirt", "👟 Sneakers");
  } else {
    clothing.push("🩳 Shorts", "🧢 Cap");
  }

  // Essentials
  if (temp >= 20) {
    essentials.push("💧 Water Bottle");
  }

  if (temp >= 25) {
    essentials.push("🕶 Sunglasses", "🧴 Sunscreen");
  }

  if ((code >= 51 && code <= 82) || code >= 95) {
    essentials.push("☂ Umbrella");
  }

  // Warnings
  if (wind >= 30) {
    warnings.push("💨 Strong winds expected. Carry a windproof jacket.");
  }

  if (code >= 95) {
    warnings.push("⛈ Thunderstorms expected. Avoid unnecessary outdoor travel.");
  }

  let travelTip;

  if (code >= 95) {
    travelTip =
      "Weather conditions are unstable. Delay outdoor activities if possible.";
  } else if ((code >= 51 && code <= 82)) {
    travelTip =
      "Carry an umbrella and waterproof footwear before heading out.";
  } else if (temp < 10) {
    travelTip =
      "It's quite cold outside. Dress in warm layers.";
  } else if (temp < 20) {
    travelTip =
      "Pleasant weather. A light jacket should be enough.";
  } else if (temp < 30) {
    travelTip =
      "Perfect weather for sightseeing and outdoor activities.";
  } else {
    travelTip =
      "Stay hydrated and avoid direct sunlight during the afternoon.";
  }

  return (
    <section className="packing-section">

      <h2 className="section-title">
        🎒 Smart Packing Suggestions
      </h2>

      <div className="packing-card">

        <div className="packing-group">
          <h3>👕 Clothing</h3>

          <ul>
            {clothing.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="packing-group">
          <h3>🎯 Essentials</h3>

          <ul>
            {essentials.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {warnings.length > 0 && (
          <div className="packing-group warning-group">
            <h3>⚠ Weather Alerts</h3>

            <ul>
              {warnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="packing-tip">
          <strong>💡 Travel Tip</strong>

          <p>{travelTip}</p>
        </div>

      </div>

    </section>
  );
}

export default PackingSuggestions;