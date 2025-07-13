import { useNavigate } from 'react-router-dom';
import '../styles/intro.css';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white px-4 space-y-10">
      
      {/* 3D Card */}
      <div className="card-container noselect">
        <div className="canvas">
          {/* 25 Grid Trackers */}
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`}></div>
          ))}

          <div id="card">
            <div className="card-content">

              <div className="card-glare"></div>

              <div className="cyber-lines">
                <span></span><span></span><span></span><span></span>
              </div>

              <div className="title">WELCOME</div>

              <p id="prompt"></p>

              <div className="glowing-elements">
                <div className="glow-1"></div>
                <div className="glow-2"></div>
                <div className="glow-3"></div>
              </div>

              <div className="subtitle">
                <span className="highlight">CAESER CIPHER</span>
              </div>

              <div className="card-particles">
                {Array.from({ length: 6 }, (_, i) => <span key={i}></span>)}
              </div>

              <div className="corner-elements">
                <span></span><span></span><span></span><span></span>
              </div>

              <div className="scan-line"></div>

              {/* Caesar Cipher description at bottom of the card */}
   <div
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-center text-sm w-[260px]"
  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
>
  <h2 className="text-lg font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
    🔐 What is Caesar Cipher?
  </h2>
  <p className="leading-relaxed">
    The Caesar Cipher is one of the simplest and most widely known encryption techniques. It works by shifting the letters of a message by a fixed number of positions in the alphabet. It's an ancient method, yet it's the foundation of modern cryptography!
  </p>
  <img
  src="/images/lock-icon.webp"
  alt="Lock Icon"
  className="mx-auto object-contain"
  style={{ height: '150px', width: 'auto' }}
/>
</div>



            </div>
          </div>
        </div>
      </div>

  <div className="mt-[70px]"> {/* or mt-[100px] if you want more gap */}
  <button type="button" className="btn">
    <strong>NEXT</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>
    <div id="glow">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </button>
</div>



    </div>
  );
}
