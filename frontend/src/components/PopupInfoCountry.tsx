import React from "react";

interface CountryInfoPopupProps {
  country: {
    name: string;
    emoji: string;
    code: string;
    continent: {
      name: string;
    };
  };
  onClose: () => void;
}

const PopupInfoCountry: React.FC<CountryInfoPopupProps> = ({
  country,
  onClose,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          X
        </button>
        <h2>{country.name}</h2>
        <p>{country.emoji}</p>
        <p>
          <strong>Code:</strong> {country.code}
        </p>
        <p>
          <strong>Continent:</strong> {country.continent.name}
        </p>
      </div>
    </div>
  );
};

export default PopupInfoCountry;
