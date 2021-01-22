import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RepV2Icon(props) {
  const id = `repv2_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z"
        fill={fill} />
      <path
        d="M142.859 114.956L133.001 98.4857C132.629 97.877 131.834 97.6911 131.225 98.0631L124.816 102.172C124.241 102.544 124.055 103.305 124.41 103.897L130.041 113.299C130.21 113.586 130.126 113.975 129.838 114.161L96.9998 135.214C96.7968 135.349 96.5262 135.349 96.3232 135.214L63.4676 114.161C63.1801 113.975 63.0956 113.603 63.2647 113.299L68.8956 103.897C69.2507 103.305 69.0647 102.544 68.4898 102.172L62.081 98.0631C61.4722 97.674 60.6775 97.8601 60.3055 98.4857L50.4471 114.956C49.7369 116.14 50.1089 117.661 51.2587 118.389L95.2749 146.594C96.1034 147.135 97.1857 147.135 98.0142 146.594L142.03 118.389C143.197 117.661 143.552 116.14 142.859 114.956Z"
        fill="white"/>
      <path
        d="M67.2217 89.3205L73.6305 93.4295C74.2392 93.8184 75.034 93.6325 75.406 93.0068L96.1036 58.3925C96.3573 57.9867 96.9489 57.9867 97.1858 58.3925L117.9 93.0068C118.272 93.6157 119.067 93.8016 119.676 93.4295L126.085 89.3205C126.659 88.9484 126.846 88.1875 126.49 87.5957L101.751 46.2344C101.278 45.4735 100.466 45 99.5701 45H93.7362C92.8398 45 92.0114 45.4735 91.5549 46.2344L66.8158 87.5957C66.4607 88.1875 66.6467 88.9484 67.2217 89.3205Z"
        fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193"
                        gradientUnits="userSpaceOnUse">
          <stop stopColor="#2AE7A8"/>
          <stop offset="1" stopColor="#0CC98A"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
