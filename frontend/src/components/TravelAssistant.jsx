import { useState } from "react";

import PackingSuggestions from "./PackingSuggestions";
import TravelInsights from "./TravelInsights";
import TravelScore from "./TravelScore";

function TravelAssistant({ weatherData }) {

  const [showTravel, setShowTravel] = useState(false);

  if (!weatherData) return null;

  return (

<section className="travel-assistant">

<div className="travel-assistant-card">

<button
className="travel-toggle"
onClick={() => setShowTravel(!showTravel)}
>

<div>

<h2>
🧳 Travel Assistant
</h2>

<p>
Everything you need before stepping outside.
</p>

</div>

<span>

{showTravel ? "▲" : "▼"}

</span>

</button>

{showTravel && (

<div className="travel-content">

<TravelScore weatherData={weatherData} />

<PackingSuggestions weatherData={weatherData} />

<TravelInsights weatherData={weatherData} />

</div>

)}

</div>

</section>

);
     
}

export default TravelAssistant;