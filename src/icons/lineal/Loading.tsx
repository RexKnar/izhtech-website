import IconProps from '../../types/icon';

const Loading = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 409.6 353.3"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-inject icon-svg ${className || 'icon-svg-md text-yellow mb-3'}`}
    >
      <path
        className="lineal-stroke"
        d="M176.6 353.3c-46.9 0-91.9-18.6-125-51.8-68.9-68.9-68.9-181 0-249.9 69-69 180.9-69 249.9 0 24 24 40.5 54.3 47.7 87.5.4 1.9.8 3.9 1.2 6.2l2.7 14.8c1.1 6.2-3 12.2-9.3 13.3-.7.1-1.3.2-2 .2h-51c-5.4 0-10-3.7-11.2-9l-2.1-9.9C265.3 99 210.1 63.8 154.4 76.1s-90.9 67.4-78.6 123.2c7.9 35.6 33.9 64.4 68.6 75.8 3 1 6.1 1.8 9.1 2.5 6.2 1.4 10 7.5 8.6 13.7-1.4 6.2-7.5 10-13.7 8.6-3.7-.9-7.5-1.9-11.1-3.1C71 275 34.9 203.4 56.8 137c6.2-18.7 16.6-35.7 30.5-49.7 49.2-49.3 129-49.5 178.4-.3 17.3 17.2 29.2 39 34.3 62.9l.2.9h28.1l-.2-1.4c-.4-2-.7-3.8-1.1-5.4C308.9 60.9 226.9 8.3 143.8 26.4c-28.8 6.3-55.2 20.7-76 41.5-60 60-60 157.6 0 217.6 41 41.1 101.7 55.5 156.9 37.4L206 290.3c-3-5.6-.9-12.5 4.6-15.5 5.3-2.9 12-1.1 15.2 4.1l25.6 44.4c3.2 5.5 1.3 12.5-4.2 15.6-.6.4-1.3.7-2 .9l-10.8 3.7c-18.6 6.5-38.1 9.8-57.8 9.8z"
      />
      <path className="lineal-fill" d="M236.6 160.7l80.8 140 80.8-140H236.6z" />
      <path
        className="lineal-stroke"
        d="M317.4 312.1c-4.1 0-7.9-2.2-9.9-5.7l-80.8-140c-3.2-5.5-1.3-12.5 4.2-15.6 1.7-1 3.7-1.5 5.7-1.5h161.6c6.3 0 11.4 5.1 11.4 11.4 0 2-.5 4-1.5 5.7l-80.8 140c-2.1 3.6-5.9 5.7-9.9 5.7zm-61-140l61 105.7 61-105.7h-122z"
      />
    </svg>
  );
};

export default Loading;
