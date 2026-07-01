import { calculateTravelScore } from "../utils/travelScore";

function TravelScore({ weatherData }) {
  if (!weatherData) return null;

  const result = calculateTravelScore(weatherData);

  return (
    <section className="travel-score-section">

      <h2 className="section-title">
        ⭐ Travel Score
      </h2>

      <div className="travel-score-card">

        <div className="score-circle">

          <h1
            style={{
              color: result.color,
            }}
          >
            {result.score}
          </h1>

          <span>/ 100</span>

        </div>

        <div className="score-details">

          <h2
            style={{
              color: result.color,
            }}
          >
            {result.rating}
          </h2>

          <ul>

  {result.reasons.map((reason, index) => (
    <li key={index}>
      {reason}
    </li>
  ))}

</ul>

        </div>

      </div>

    </section>
  );
}

export default TravelScore;