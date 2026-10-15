import React from 'react';
import { useGame } from '../context/GameContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { paintings, sendToAuction } = useGame();

  const galleryPaintings = paintings.filter((p) => p.status === 'gallery');

  return (
    <div className="page gallery-page">
      <header className="page-header">
        <h1>Your Gallery</h1>
        <p>View your masterpieces and send them to the auction house to earn money.</p>
      </header>

      {galleryPaintings.length === 0 ? (
        <div className="empty-state">
          <p>You haven't painted anything yet!</p>
          <Link to="/paint" className="btn btn-primary">Go to Studio</Link>
        </div>
      ) : (
        <div className="painting-grid">
          {galleryPaintings.map((painting) => (
            <div key={painting.id} className="painting-card">
              <div className={`framed-art frame-${painting.frameStyle || 'modern'}`}>
                <div className="painting-image-container">
                  <img src={painting.dataUrl} alt={painting.title} className="painting-image" />
                </div>
              </div>
              <div className="painting-info">
                <h3>{painting.title}</h3>
                <p className="frame-type-label">Frame: {painting.frameStyle}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => sendToAuction(painting.id)}
                >
                  Send to Auction
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;