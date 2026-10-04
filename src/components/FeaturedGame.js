import React from "react";
import LearnMoreButton from "./LearnMoreButton";

function FeaturedGame({ item }) {
  return (
    <div className="featured-game-section">
      {item.map((game) => {
        return (
          <div className="featured-game" key={game.id}>
            <div className="featured-game-image">
              <img src={game.image} alt={game.alt} loading="lazy" />
            </div>
            <div className="game-text">
              <h3 className="game-title">{game.title}</h3>
              <p>{game.tagline}</p>
              <LearnMoreButton />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedGame;
