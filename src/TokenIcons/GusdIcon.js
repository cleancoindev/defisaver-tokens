import React from 'react';
import { v4 as uuid } from 'uuid';

export default function GusdIcon(props) {
  const id = `gusd_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path
        d="M110.819 52C94.9873 52 81.5405 64.1745 79.8509 79.8468C64.1705 81.5405 52 94.9873 52 110.815C52.0043 119.084 55.2907 127.013 61.1372 132.86C66.9837 138.707 74.9122 141.995 83.1809 142C99.0127 142 112.513 129.825 114.149 114.153C129.825 112.46 142 99.0127 142 83.185C141.996 74.9163 138.709 66.9874 132.863 61.1401C127.016 55.2928 119.088 52.0054 110.819 52V52ZM134.694 86.6745C133.915 91.7884 131.522 96.5196 127.865 100.177C124.207 103.835 119.476 106.228 114.362 107.006V86.6745H134.694V86.6745ZM59.3064 107.325C60.0744 102.202 62.4626 97.4588 66.1212 93.7906C69.7798 90.1225 74.5166 87.7219 79.6382 86.9405V107.272H59.3064V107.325V107.325ZM107.06 114.362C106.215 120.09 103.338 125.323 98.9534 129.104C94.5693 132.886 88.9708 134.965 83.1809 134.96C77.3921 134.965 71.7947 132.887 67.4112 129.106C63.0278 125.325 60.151 120.093 59.3064 114.366H107.06V114.362ZM107.325 86.6745V107.272H86.6745V86.6745H107.325ZM134.694 79.6382H86.9405C87.7851 73.9102 90.6624 68.6773 95.0466 64.8955C99.4307 61.1137 105.029 59.0355 110.819 59.0405C116.608 59.0355 122.205 61.1133 126.589 64.8943C130.972 68.6754 133.849 73.9072 134.694 79.6341V79.6382Z"
        fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00DCFA"/>
          <stop offset="1" stopColor="#0096B4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
