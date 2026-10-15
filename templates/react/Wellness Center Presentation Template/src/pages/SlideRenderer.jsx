import { useParams, Navigate } from 'react-router-dom';
import { TOTAL_SLIDES } from '../config/constants';
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide6 from '../slides/Slide6';
import Slide7 from '../slides/Slide7';
import Slide8 from '../slides/Slide8';
import Slide9 from '../slides/Slide9';
import Slide10 from '../slides/Slide10';
import Slide11 from '../slides/Slide11';
import Slide12 from '../slides/Slide12';

export default function SlideRenderer({ isPrintMode = false }) {
  const { id } = useParams();
  const slideNum = isPrintMode ? null : parseInt(id);

  if (!isPrintMode && (isNaN(slideNum) || slideNum < 1 || slideNum > TOTAL_SLIDES)) {
    return <Navigate to="/slide/1" replace />;
  }

  const slides = [
    <Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />,
    <Slide4 key="4" />, <Slide5 key="5" />, <Slide6 key="6" />,
    <Slide7 key="7" />, <Slide8 key="8" />, <Slide9 key="9" />,
    <Slide10 key="10" />, <Slide11 key="11" />, <Slide12 key="12" />
  ];

  if (isPrintMode) {
    return (
      <>
        {slides.map((slide, index) => (
          <div key={index} className="print-slide w-screen h-screen">
            {slide}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="w-full h-full animate-fade-in">
      {slides[slideNum - 1]}
    </div>
  );
}