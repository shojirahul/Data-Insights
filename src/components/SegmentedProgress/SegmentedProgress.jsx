
import './SegmentedProgress.scss';

const SegmentedProgress = ({ value = 68 }) => {
  // Ensure value stays between 0 and 100
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  // SVG Configuration
  const radius = 50;
  const strokeWidth = 14;
  const viewBoxSize = 200;
  const center = viewBoxSize / 2;
  const circumference = 2 * Math.PI * radius;

  // 1. Calculate Dash Array for the 4 distinct background segments
  // We want 4 segments. Let's make each segment take ~18% and gaps take ~7% of the circle.
  const bgSegment = circumference * 0.18;
  const bgGap = circumference * 0.07;
  const bgDashArray = `${bgSegment} ${bgGap}`;

  // 2. Calculate Dash Offset for the active progressive overlay
  // The active stroke overlays on top of the segments based on the percentage.
  const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div className="segmented-progress-container">
      <div className="segmented-progress-wrapper">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="svg-rotate"
        >
          {/* Background Track: Light lavender segmented ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#E1D9FC" /* Light purple background track */
            strokeWidth={strokeWidth}
            strokeDasharray={bgDashArray}
          />

          {/* Active Progress Layer: Dark purple progress filler */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#703ED1" /* Active dark purple color */
            strokeWidth={strokeWidth}
            strokeDasharray={bgDashArray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            className="progress-circle-active"
          />
        </svg>

        {/* Centered Percentage Label */}
        <div className="label-container">
          <span className="value-text">{normalizedValue}</span>
          <span className="percent-sign">%</span>
        </div>
      </div>
    </div>
  );
};

export default SegmentedProgress;
