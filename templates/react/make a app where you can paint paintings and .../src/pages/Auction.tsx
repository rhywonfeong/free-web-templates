import React from 'react';
import { useGame } from '../context/GameContext';
import { Link } from 'react-router-dom';

const Auction: React.FC = () => {
  const { paintings, acceptBid } = useGame();

  const auctionPaintings = paintings.filter((p) => p.status === 'auction');
  const soldPaintings = paintings.filter(p => p.status === 'sold');

  return (
    <div className="page auction-page">
      <header className="page-header">
        <h1>Auction House</h1>
        <p>Watch the bids roll in and sell your art for profit!</p>
      </header>

      {auctionPaintings.length === 0 ? (
        <div className="empty-state">
          <p>You have no paintings currently up for auction.</p>
          <Link to="/" className="btn btn-primary">Go to Gallery</Link>
        </div>
      ) : (
        <div className="painting-grid">
          {auctionPaintings.map((painting) => (
            <div key={painting.id} className="painting-card auction-card">
              <div className={`framed-art frame-${painting.frameStyle || 'modern'}`} style={{ position: 'relative' }}>
                <div className="painting-image-container">
                  <img src={painting.dataUrl} alt={painting.title} className="painting-image" />
                  <div className="live-badge">LIVE</div>
                </div>
              </div>
              <div className="painting-info">
                <h3>{painting.title}</h3>
                
                {painting.lastBidder && (
                   <div className="bidder-info">
                     <span className="bidder-name">{painting.lastBidder}</span> is bidding...
                   </div>
                )}
                
                <div className="bid-section">
                  <span className="bid-label">Current Bid:</span>
                  <span className="bid-amount">${painting.currentBid.toLocaleString()}</span>
                </div>
                <button
                  className="btn btn-success"
                  onClick={() => acceptBid(painting.id)}
                >
                  Accept Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {soldPaintings.length > 0 && (
        <div className="sold-section">
          <h2>Recently Sold</h2>
          <div className="sold-grid">
            {soldPaintings.slice(-4).map(painting => (
              <div key={painting.id} className="sold-item">
                <img src={painting.dataUrl} alt={painting.title} className="sold-thumbnail" />
                <div className="sold-details">
                    <span className="sold-title">{painting.title}</span>
                    <span className="sold-price">${painting.currentBid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Auction;