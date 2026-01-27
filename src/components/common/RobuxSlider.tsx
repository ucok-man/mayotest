// RobuxSlider Component - Custom fancy slider with value bubble inside handle

import React, { useState, useRef, useEffect } from "react";

interface RobuxSliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export const RobuxSlider: React.FC<RobuxSliderProps> = ({
  min = 50,
  max = 5000,
  step = 10,
  initialValue = 50,
  onChange,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate percentage for positioning
  const percent = ((value - min) / (max - min)) * 100;

  // Update slider value
  const updateValue = (newValue: number) => {
    // Constrain and round to step
    const constrainedValue = Math.max(min, Math.min(max, newValue));
    const steppedValue = Math.round(constrainedValue / step) * step;

    setValue(steppedValue);
    if (onChange) {
      onChange(steppedValue);
    }
  };

  // Get value from position
  const getValueFromPosition = (clientX: number): number => {
    if (!trackRef.current) return value;

    const rect = trackRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
    return min + percentage * (max - min);
  };

  // Mouse/Touch handlers
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    updateValue(getValueFromPosition(clientX));
  };

  const handleMove = (clientX: number) => {
    if (isDragging) {
      updateValue(getValueFromPosition(clientX));
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Global mouse/touch move and up handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchend", handleEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("touchend", handleEnd);
      };
    }
  }, [isDragging]);

  return (
    <>
      <style>{`
        .robux-slider-container {
          position: relative;
          padding: 30px 0 20px;
          margin-top: 10px;
        }

        .robux-slider-track {
          width: 100%;
          height: 12px;
          background: #E0E0E0;
          border-radius: 50px;
          position: relative;
          cursor: pointer;
        }

        .robux-slider-progress {
          height: 100%;
          background: #FF7797;
          border-radius: 50px;
          position: absolute;
          left: 0;
          top: 0;
          pointer-events: none;
        }

        .robux-slider-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 42px;
          border-radius: 24px;
          background: #FF7797;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            12px 12px 24px 0px rgba(255, 255, 255, 0.44) inset,
            -12px -12px 24px 0px rgba(255, 119, 151, 0.22) inset,
            12px 12px 24px 0px rgba(255, 119, 151, 0.22),
            -12px -12px 24px 0px rgba(255, 255, 255, 0.22);
          user-select: none;
          z-index: 2;
          transition: transform 0.1s ease;
        }

        .robux-slider-handle:active {
          transform: translate(-50%, -50%) scale(1.05);
        }

        .robux-slider-value {
          color: white;
          font-weight: 600;
          font-size: 17px;
          line-height: 1;
          font-family: 'Chillax', sans-serif;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
          pointer-events: none;
        }
      `}</style>

      <div className={`robux-slider-container ${className}`}>
        {/* Hidden input for accessibility */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => updateValue(parseInt(e.target.value))}
          className="sr-only"
          aria-label="Robux amount"
        />

        {/* Custom Slider Track */}
        <div
          ref={trackRef}
          className="robux-slider-track"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          {/* Progress Bar */}
          <div
            className="robux-slider-progress"
            style={{ width: `${percent}%` }}
          />

          {/* Handle with Value Inside */}
          <div
            className="robux-slider-handle"
            style={{ left: `${percent}%` }}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            <span className="robux-slider-value">{value}</span>
          </div>
        </div>
      </div>
    </>
  );
};
