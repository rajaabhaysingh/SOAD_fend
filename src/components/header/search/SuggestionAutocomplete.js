import React, { useState } from "react";

const SuggestionAutocomplete = () => {
  // local state management
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="fcc">
      <i className="fas fa-search search_bar_icon mar_l-8 mar_r-8"></i>
      <input
        placeholder="Search job"
        type="text"
        className="search_bar_input"
      />
    </div>
  );
};

export default SuggestionAutocomplete;
