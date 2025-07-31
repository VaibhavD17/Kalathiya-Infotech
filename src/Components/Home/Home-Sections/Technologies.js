import React, { useEffect, useRef, useState } from 'react';


const technologies = [
  { name: 'Wordpress', icon: './Assets/Image/icon1.png' },
  { name: 'CodeIgniter', icon: './Assets/Image/icon2.png' },
  { name: 'PHP', icon: './Assets/Image/icon3.png' },
  { name: 'Adobe XD', icon: './Assets/Image/icon4.png' },
  { name: 'Python', icon: './Assets/Image/icon5.png' },
  { name: 'JavaScript', icon: './Assets/Image/icon6.png' },
  { name: 'Node.js', icon: './Assets/Image/icon7.png' },
  { name: 'Next.js', icon: './Assets/Image/icon8.png' },
  { name: 'Three.js', icon: './Assets/Image/icon9.png' },
  { name: 'Apple', icon: './Assets/Image/icon10.png' },
  { name: 'CSS3', icon: './Assets/Image/icon11.png' },
  { name: 'Android', icon: './Assets/Image/icon12.png' },
  { name: 'Firebase', icon: './Assets/Image/icon13.png' },
  { name: 'HTML5', icon: './Assets/Image/icon14.png' },
  { name: 'MySQL', icon: './Assets/Image/icon15.png' },
  { name: 'React', icon: './Assets/Image/icon16.png' },
  { name: 'Figma', icon: './Assets/Image/icon17.png' },
  { name: 'Photoshop', icon: './Assets/Image/icon18.png' },
  { name: 'Illustrator', icon: './Assets/Image/icon19.png' },
  { name: 'Flutter', icon: './Assets/Image/icon20.png' },
  { name: 'Vue.js', icon: './Assets/Image/icon21.png' },
  { name: 'Laravel', icon: './Assets/Image/icon22.png' },
  { name: 'Swift', icon: './Assets/Image/icon23.png' },
  { name: 'Django', icon: './Assets/Image/icon24.png' },
  { name: 'MongoDB', icon: './Assets/Image/icon25.png' },
  { name: 'Angular', icon: './Assets/Image/icon26.png' },
];

const centralIcons = [
  { name: 'Web Design', icon: './Assets/Image/web-techno.png' },
  { name: 'Mobile App', icon: './Assets/Image/mobile-techno.png' },
];

function Technologies() {
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.querySelectorAll('.tech-icon');
    const numIcons = icons.length;
    const iconsPerCircle = Math.ceil(numIcons / 2);

    const circleRadius = isMobile ? 130 : 285;
    const horizontalOffset = isMobile ? 160 : 320;
    const rotationSpeed = 0.0003;

    const animateIcons = (timestamp) => {
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const time = timestamp * rotationSpeed;

      icons.forEach((icon, index) => {
        const isLeftCircle = index < iconsPerCircle;
        const circleCenterX = centerX + (isLeftCircle ? -horizontalOffset : horizontalOffset);
        const circleCenterY = centerY;

        const angle = (index % iconsPerCircle / iconsPerCircle) * Math.PI * 2 + time;

        const x = circleCenterX + circleRadius * Math.cos(angle) - (icon.offsetWidth / 2);
        const y = circleCenterY + circleRadius * Math.sin(angle) - (icon.offsetHeight / 2);

        icon.style.transform = `translate(${x}px, ${y}px)`;
      });

      animationFrameId.current = requestAnimationFrame(animateIcons);
    };

    animationFrameId.current = requestAnimationFrame(animateIcons);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 mt-16 overflow-hidden relative font-inter">
      {/* Backgrounds */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d8b4fe 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* Decorations */}
      <img
        src={'./Assets/Image/techno-1.png'}
        alt="Tech Left"
        className="absolute top-0 left-[-20px] max-w-[150px] md:max-w-[300px] object-contain z-0  animate-floatX"
      />

      <img
        src={'./Assets/Image/techno-2.png'}
        alt="Tech Right"
        className="absolute bottom-0 right-0 max-w-[150px] md:max-w-[300px] object-contain z-0 animate-floatX delay-[2s]"
      />



      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#8a49d6] mb-20 sm:mb-28 text-center uppercase tracking-wide">
        TECHNOLOGIES <span className="text-black"> WE WORK WITH </span>
      </h1>

      {/* Rotating Icons */}
      <div
        ref={containerRef}
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] max-w-full"
      >
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="tech-icon absolute flex flex-col items-center justify-center p-2 rounded-full bg-[#f0e3ff] shadow-md border border-[rgba(138,73,214,1)] cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{
              width: isMobile ? '60px' : '90px',
              height: isMobile ? '60px' : '90px',
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/48x48/cccccc/000000?text=Icon";
              }}
            />
          </div>
        ))}

        {/* Central Icons */}
        {centralIcons.map((item, index) => (
          <div
            key={item.name}
            className="absolute flex flex-col items-center justify-center p-2 rounded-full bg-[#f0e3ff] shadow-xl border border-[rgba(138,73,214,1)] transform hover:scale-105 transition-transform duration-200"
            style={{
              width: isMobile ? '100px' : '150px',
              height: isMobile ? '100px' : '150px',
              left: `calc(50% ${index === 0 ? '-' : '+'} ${isMobile ? '160px' : '320px'} - ${isMobile ? '50px' : '75px'})`,
              top: `calc(50% - ${isMobile ? '50px' : '75px'})`,
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/96x96/cccccc/000000?text=Icon";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;

