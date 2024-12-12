import PropTypes from "prop-types";

const BugSvg = ({
  fillColorCircle = "none",
  strokeColorCircle = "black",
  strokeWidthCircle = 2,
  fillColorPath = "none",
  strokeColorPath = "black",
  strokeWidthPath = 2,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <title>bug</title>
    <g id="bug">
      <circle
        cx="64"
        cy="64"
        r="64"
        fill={fillColorCircle}
        stroke={strokeColorCircle}
        strokeWidth={strokeWidthCircle}
      />
      <path
        d="M89,40c-3.93,9.55-11.51,12.15-21,13c-5.9,17.33.62,36.47,13,49C104.88,90.71,109.26,57,89,40Z"
        fill={fillColorPath}
        stroke={strokeColorPath}
        strokeWidth={strokeWidthPath}
      />
      <path
        d="M72.43,45.31A22.08,22.08,0,0,0,83,36a38.15,38.15,0,0,0-8.24-3.3l5.56-6.8a3,3,0,0,0-4.64-3.8l-7.55,9.23a31.72,31.72,0,0,0-8.26,0L52.32,22.1a3,3,0,1,0-4.64,3.8l5.56,6.8A38.15,38.15,0,0,0,45,36,22.12,22.12,0,0,0,72.43,45.31Z"
        fill={fillColorPath}
        stroke={strokeColorPath}
        strokeWidth={strokeWidthPath}
      />
      <path
        d="M47,50a23,23,0,0,1-8-10c-1,.87-15.43,13.39-13,33,2.46,19.85,19.86,28.46,21,29C59.38,89.47,65.9,70.33,60,53,57.93,52.82,51.49,53.14,47,50Z"
        fill={fillColorPath}
        stroke={strokeColorPath}
        strokeWidth={strokeWidthPath}
      />
    </g>
  </svg>
);

// PropTypes para BugSvg
BugSvg.propTypes = {
  fillColorCircle: PropTypes.string,
  strokeColorCircle: PropTypes.string,
  strokeWidthCircle: PropTypes.number,
  fillColorPath: PropTypes.string,
  strokeColorPath: PropTypes.string,
  strokeWidthPath: PropTypes.number,
};

// Valores por defecto para las propiedades
BugSvg.defaultProps = {
  fillColorCircle: "none",
  strokeColorCircle: "black",
  strokeWidthCircle: 2,
  fillColorPath: "none",
  strokeColorPath: "black",
  strokeWidthPath: 2,
};

export default BugSvg;
