import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RenBtcIcon(props) {
  const id = `renbtc_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M114.144 87.9962C110.762 97.5549 96.2646 91.1168 91.5281 89.441L97.4861 72.6018C102.223 74.2777 117.661 78.0552 114.144 87.9962ZM108.788 115.517C105.091 125.968 87.6481 118.452 81.9579 116.439L88.5191 97.8947C94.2036 99.924 112.65 104.604 108.788 115.517ZM131.136 89.76C133.711 79.4497 126.312 73.0673 115.817 68.2067L120.681 54.4582L112.289 51.4889L107.52 64.9666C105.311 64.1849 103.054 63.3863 100.785 62.673L105.581 49.1156L97.2368 46.1632L92.3442 59.9913L87.0036 58.1018L75.3372 53.9739L72.1524 62.975C72.1524 62.975 78.3907 65.0567 78.2558 65.1345C80.6704 65.7002 82.1996 68.0804 81.7164 70.5176L68.3179 108.386C67.635 109.992 65.7838 110.741 64.1806 110.061C64.1711 110.057 64.1616 110.054 64.1526 110.049C64.23 110.184 58.0491 107.889 58.0491 107.889L52.8234 117.351L63.7588 121.221L69.7669 123.346L64.7953 137.398L73.1875 140.367L78.0858 126.523L84.7932 128.896L79.9175 142.676L88.3256 145.651L93.2408 131.76C107.723 135.916 118.849 135.909 124.796 123.045C129.585 112.694 126.253 106.137 118.909 101.37C124.668 100.611 129.285 97.3151 131.136 89.76Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#999A9D"/>
          <stop offset="1" stopColor="#5F6064"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
