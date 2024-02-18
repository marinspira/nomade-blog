import { useState } from 'react';

export default function DragImage({ src }) {
  const [position, setPosition] = useState({ x: 1500, y: -270 });

  const handleMouseDown = (e) => {
    const initialX = e.clientX - position.x;
    const initialY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
      <div onMouseDown={handleMouseDown}>
        <img
          src={src}
          alt="Draggable Image"
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            scale: 7,
            opacity: 0.7,
            cursor: 'grab', 
          }}
        />
      </div>
  );
}
