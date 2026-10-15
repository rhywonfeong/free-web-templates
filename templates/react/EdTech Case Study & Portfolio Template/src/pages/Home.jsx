import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy home page to redirect directly to the case study for the purpose of this demonstration
export default function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/portfolio/brasea');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-[#8A8A8A]">
      Redirecting to portfolio case...
    </div>
  );
}