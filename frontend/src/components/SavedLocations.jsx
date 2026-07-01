import { FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

function SavedLocations({
  savedCities,
  saveCurrentCity,
  handleSearch,
  setCity,
  setSavedCities,
}) {
  return (
    <section className="saved-section">

      <div className="saved-card">

        <h2 className="saved-title">
          <FaMapMarkerAlt />
          <span>Saved Locations</span>
        </h2>

        <button
          className="save-city-btn"
          onClick={saveCurrentCity}
        >
          <HiPlus />
          Save Current City
        </button>

        {savedCities.length === 0 ? (

          <div className="saved-empty">

            <p>No saved cities yet.</p>

            <span>
              Search a city and save it for quick access.
            </span>

          </div>

        ) : (

          <div className="saved-list">

            {savedCities.map((city, index) => (

              <div
                key={index}
                className="saved-chip"
              >

                <button
                  className="saved-chip-name"
                  onClick={() => {
                    setCity(city);
                    handleSearch(city);
                  }}
                >
                  ⭐ {city}
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    setSavedCities(
                      savedCities.filter(
                        (item) => item !== city
                      )
                    )
                  }
                >
                  <FaTrash />
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default SavedLocations;