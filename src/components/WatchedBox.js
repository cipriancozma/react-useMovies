import React, { useState } from "react";
import { tempWatchedData } from "../data";
import Summary from "./Summary";
import WatchedList from "./WatchedList";

function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);

  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
