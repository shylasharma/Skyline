export function calculateTravelScore(weatherData) {
  if (!weatherData) {
    return null;
  }

  const current = weatherData.current;
  const airQuality = weatherData.airQuality;

  let score = 100;
  const reasons = [];

  // Temperature
  if (current.temperature_2m < 10) {
    score -= 20;
    reasons.push("Very cold weather");
  } else if (current.temperature_2m > 35) {
    score -= 20;
    reasons.push("Very hot weather");
  } else if (current.temperature_2m > 30) {
    score -= 10;
    reasons.push("Hot weather");
  } else {
    reasons.push("🌡 Comfortable temperature");
  }

  // Wind
  if (current.wind_speed_10m > 30) {
    score -= 10;
    reasons.push("Strong winds");
  } else {
    reasons.push("💨 Calm winds");
  }

  // Rain
  if (current.weather_code >= 51 && current.weather_code <= 82) {
    score -= 15;
    reasons.push("Rain expected");
  }

  // Thunderstorm
  if (current.weather_code >= 95) {
    score -= 30;
    reasons.push("Thunderstorms expected");
  }

  // Air Quality
  if (airQuality && airQuality.us_aqi !== undefined) {
    if (airQuality.us_aqi <= 50) {
      reasons.push("🌿 Good air quality");
    } else if (airQuality.us_aqi <= 100) {
      score -= 10;
      reasons.push("Moderate air quality");
    } else {
      score -= 25;
      reasons.push("Poor air quality");
    }
  }

  // Keep score between 0 and 100
  score = Math.max(0, Math.min(score, 100));

  let rating;
  let color;

  if (score >= 90) {
    rating = "Excellent";
    color = "#4CAF50";
  } else if (score >= 75) {
    rating = "Very Good";
    color = "#8BC34A";
  } else if (score >= 60) {
    rating = "Good";
    color = "#FFC107";
  } else if (score >= 40) {
    rating = "Fair";
    color = "#FF9800";
  } else {
    rating = "Poor";
    color = "#F44336";
  }

  return {
    score,
    rating,
    color,
    reasons,
  };
}