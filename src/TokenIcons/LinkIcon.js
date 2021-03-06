import React from 'react';
import { v4 as uuid } from 'uuid';

export default function LinkIcon(props) {
  const id = `link_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z" fill={fill} />
      <path d="M97 42L87.2645 47.6972L60.7354 63.3027L51 69V123L60.7354 128.697L87.5079 144.303L97.2434 150L106.979 144.303L133.265 128.697L143 123V69L133.265 63.3027L106.735 47.6972L97 42ZM70.4709 111.605V80.3945L97 64.789L123.529 80.3945V111.605L97 127.211L70.4709 111.605Z" fill="white" />
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2A5ADA" />
          <stop offset="1" stopColor="#0232B2" />
        </linearGradient>
      </defs>
    </svg>

  );
}
