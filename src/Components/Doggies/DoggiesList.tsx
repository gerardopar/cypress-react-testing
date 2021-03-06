import React from "react";

import DoggieItem from "./DoggiesItem";

import "./Doggies.scss";

type Doggie = {
  url?: string;
};

const DoggiesList: React.FC<{ doggies: Doggie[] }> = ({ doggies }) => {
  return (
    <div data-testid="app-doggie-list" className="doggies">
      <div className="doggies__results">
        <h3 data-testid="app-doggie-result-text" className="doggies__results--text">Results found {doggies.length}</h3>
      </div>

      <div data-testid="app-doggies" className="doggies__wrap">
        {doggies.length > 0 ? (
          doggies.map((doggie) => <DoggieItem doggie={doggie} />)
        ) : (
          <p>Search A doggie breed :)</p>
        )}
      </div>
    </div>
  );
};

export default DoggiesList;
