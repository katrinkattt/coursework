import './btn.css';

export const Btn = ({ func, text, heigh }) => (
  <button
    onClick={func}
    className="main"
    style={heigh && { height: `${heigh}px` }}
  >
    {text}
  </button>
);
