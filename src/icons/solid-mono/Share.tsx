import IconProps from '../../types/icon';

const Share = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 255.98 245.34"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-inject icon-svg solid-mono ${className || 'icon-svg-xs text-primary me-4'}`}
    >
      <g data-name="Layer 2">
        <path
          className="fill-secondary"
          d="M219.1 108.48v7.68A11.89 11.89 0 01207.15 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zm26.24-60.8a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23h-44.06a20 20 0 00-7.79-12.69 47.13 47.13 0 01-18.24-38.4C149.86 21.34 171.09.33 196.58 0a47.34 47.34 0 0134.56 13.88 46.83 46.83 0 0114.2 33.79z"
        />
        <path
          className="fill-primary"
          d="M5.25 117.34A5.34 5.34 0 000 122.67v98.64A2.68 2.68 0 002.67 224H28a5.33 5.33 0 005.13-3.87l23.6-83.18A10.66 10.66 0 0050.1 124c-9.67-3.52-24.5-7-44.85-6.66zM234.67 176c-21.33 0-64 27-85.33 27S104 186.65 104 186.65s28.74 5.35 45.33 5.35 21.33-5.66 21.33-13.33c0-18.67-31.72-21.56-47.75-24-15.74-8.76-23.92-15.69-50-17.9a28.85 28.85 0 01-.81 4.54l-21.43 75.5c24.27 11 66.05 28.53 88 28.53 32 0 117.32-42.67 117.32-53.33S245.33 176 234.67 176z"
        />
      </g>
    </svg>
  );
};

export default Share;
