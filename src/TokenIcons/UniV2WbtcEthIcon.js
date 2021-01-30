import React from 'react';
import { v4 as uuid } from 'uuid';

export default function UniV2WbtcEthIcon(props) {
  const id = `univ2_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.75" cy="97.5" r="91.5" fill={`url(#${fill})`} fillOpacity="0.9" stroke="#FC157B" strokeWidth="10"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M110.267 82.7978C110.267 92.9371 94.4525 91.7035 89.4282 91.7035V73.8414C94.4525 73.8414 110.267 72.2529 110.267 82.7978ZM114.398 110.529C114.398 121.614 95.4472 120.347 89.4114 120.347V100.677C95.4472 100.694 114.398 98.9531 114.398 110.529ZM126.874 78.7927C125.863 68.214 116.758 64.6653 105.243 63.5837V49H96.3408V63.2965C93.9973 63.2965 91.6032 63.2965 89.2259 63.381V49H80.3744V63.6682H74.7095H62.3343V73.2161C62.3343 73.2161 68.9097 73.0978 68.8085 73.2161C71.2734 72.944 73.5091 74.6779 73.8665 77.1366V117.305C73.7586 119.048 72.2631 120.371 70.5249 120.264C70.5148 120.264 70.5046 120.264 70.4945 120.263C70.6125 120.364 64.0203 120.263 64.0203 120.263L62.25 130.926H73.8496H80.2227V145.831H89.1248V131.145H96.2397V145.763H105.159V131.027C120.198 130.115 130.685 126.397 132 112.286C133.062 100.93 127.734 95.8606 119.22 93.8158C124.396 91.1796 127.65 86.5324 126.874 78.7927Z" fill="white"/>
      <path d="M191.31 45.3508C191.31 68.5799 172.479 87.4108 149.25 87.4108C126.021 87.4108 107.19 68.5799 107.19 45.3508C107.19 22.1217 126.021 3.29077 149.25 3.29077C172.479 3.29077 191.31 22.1217 191.31 45.3508Z" fill="#FD007A" stroke="white" strokeWidth="4.88"/>
      <g style="mix-blend-mode:darken">
        <path d="M139.334 20.258C138.561 20.1388 138.528 20.1248 138.892 20.0693C139.589 19.9627 141.235 20.108 142.369 20.376C145.018 21.0017 147.427 22.6044 150 25.4508L150.683 26.207L151.66 26.0508C155.779 25.393 159.968 25.9158 163.473 27.5248C164.437 27.9674 165.957 28.8485 166.147 29.0749C166.207 29.1471 166.318 29.6116 166.393 30.1073C166.653 31.8221 166.523 33.1365 165.996 34.1183C165.708 34.6525 165.692 34.8218 165.886 35.279C166.04 35.6439 166.469 35.9139 166.895 35.9133C167.765 35.9121 168.703 34.513 169.137 32.5662L169.31 31.793L169.651 32.1777C171.526 34.2885 172.998 37.1672 173.251 39.2163L173.317 39.7505L173.002 39.2649C172.46 38.4291 171.915 37.8602 171.217 37.4013C169.959 36.5742 168.629 36.2927 165.108 36.1083C161.927 35.9417 160.127 35.6717 158.342 35.0931C155.305 34.1089 153.774 32.7982 150.166 28.0938C148.563 26.0042 147.573 24.8481 146.588 23.9171C144.349 21.8016 142.149 20.6921 139.334 20.258Z" fill="white"/>
      </g>
      <g style="mix-blend-mode:darken">
        <path d="M166.865 24.9233C166.945 23.5232 167.135 22.5996 167.52 21.7562C167.672 21.4223 167.814 21.1491 167.836 21.1491C167.858 21.1491 167.792 21.3955 167.689 21.6967C167.41 22.5152 167.364 23.6348 167.556 24.9374C167.801 26.5901 167.94 26.8286 169.697 28.6139C170.521 29.4513 171.48 30.5074 171.828 30.9609L172.46 31.7854L171.828 31.1961C171.055 30.4756 169.278 29.0703 168.885 28.8694C168.621 28.7347 168.582 28.7371 168.42 28.8977C168.27 29.0458 168.239 29.2682 168.218 30.3198C168.186 31.9588 167.961 33.0107 167.419 34.0626C167.125 34.6315 167.079 34.5101 167.344 33.8679C167.542 33.3885 167.563 33.1777 167.561 31.5911C167.558 28.4032 167.177 27.6368 164.944 26.3239C164.379 25.9913 163.447 25.5117 162.873 25.258C162.3 25.0043 161.844 24.7833 161.861 24.7668C161.924 24.7042 164.101 25.336 164.978 25.6711C166.282 26.1696 166.497 26.2342 166.655 26.1741C166.762 26.1337 166.813 25.8265 166.865 24.9233Z" fill="white"/>
      </g>
      <g style="mix-blend-mode:darken">
        <path d="M140.835 30.3771C139.266 28.2298 138.295 24.9374 138.505 22.4762L138.57 21.7146L138.927 21.7794C139.598 21.901 140.755 22.3289 141.296 22.6558C142.783 23.5529 143.426 24.7341 144.081 27.7671C144.272 28.6555 144.524 29.6609 144.64 30.0013C144.826 30.5491 145.53 31.8288 146.103 32.6598C146.515 33.2584 146.241 33.542 145.33 33.4602C143.937 33.3353 142.052 32.0418 140.835 30.3771Z" fill="white"/>
      </g>
      <g style="mix-blend-mode:darken">
        <path d="M164.961 46.3589C157.627 43.424 155.044 40.8766 155.044 36.5783C155.044 35.9457 155.066 35.4282 155.093 35.4282C155.119 35.4282 155.403 35.6369 155.723 35.8921C157.21 37.0776 158.876 37.584 163.486 38.2525C166.199 38.6458 167.725 38.9636 169.134 39.4278C173.61 40.9033 176.379 43.8975 177.04 47.9759C177.232 49.161 177.119 51.3833 176.808 52.5546C176.563 53.4797 175.813 55.1472 175.614 55.2113C175.559 55.229 175.505 55.0189 175.491 54.7332C175.415 53.2018 174.637 51.7109 173.329 50.594C171.842 49.3243 169.845 48.3133 164.961 46.3589Z" fill="white"/>
      </g>
      <g style="mix-blend-mode:darken">
        <path d="M159.812 47.578C159.72 47.0345 159.561 46.3405 159.458 46.0357L159.271 45.4816L159.619 45.8693C160.1 46.4059 160.48 47.0925 160.802 48.0071C161.048 48.7051 161.075 48.9126 161.074 50.0469C161.072 51.1604 161.041 51.3939 160.814 52.0221C160.456 53.0128 160.012 53.7153 159.266 54.4693C157.926 55.8246 156.204 56.5748 153.719 56.8859C153.287 56.9398 152.027 57.0311 150.92 57.0882C148.13 57.2325 146.294 57.5305 144.644 58.1064C144.407 58.189 144.195 58.2396 144.174 58.2182C144.107 58.152 145.23 57.4865 146.158 57.0422C147.467 56.4157 148.769 56.0741 151.687 55.5911C153.128 55.3522 154.617 55.0629 154.995 54.9477C158.565 53.8599 160.4 51.0527 159.812 47.578Z" fill="white"/>
      </g>
      <g style="mix-blend-mode:darken">
        <path d="M163.174 53.512C162.2 51.4301 161.976 49.42 162.51 47.5454C162.567 47.3451 162.659 47.1812 162.714 47.1812C162.769 47.1812 162.999 47.3047 163.225 47.4556C163.674 47.7561 164.575 48.2621 166.974 49.5622C169.968 51.1846 171.675 52.4408 172.836 53.876C173.852 55.1329 174.481 56.5646 174.784 58.3104C174.956 59.2991 174.855 61.6783 174.6 62.6739C173.795 65.8137 171.924 68.2797 169.256 69.7189C168.865 69.9297 168.514 70.1028 168.476 70.1036C168.438 70.1044 168.58 69.7443 168.792 69.3037C169.69 67.4387 169.792 65.6246 169.113 63.6054C168.698 62.3689 167.851 60.8603 166.14 58.3104C164.151 55.3462 163.663 54.5573 163.174 53.512Z" fill="white"/>
      </g>
      <g style="mix-blend-mode:darken">
        <path d="M135.628 64.7452C138.349 62.4613 141.736 60.8388 144.82 60.3406C146.15 60.126 148.364 60.2111 149.595 60.5243C151.568 61.0262 153.333 62.1505 154.251 63.4898C155.148 64.7986 155.533 65.9393 155.934 68.4773C156.092 69.4786 156.264 70.4837 156.316 70.7114C156.617 72.0268 157.203 73.0779 157.928 73.6062C159.081 74.4447 161.066 74.4965 163.018 73.7398C163.349 73.6111 163.637 73.5223 163.657 73.5425C163.728 73.6123 162.745 74.2663 162.051 74.6108C161.118 75.0741 160.376 75.2533 159.39 75.2533C157.602 75.2533 156.117 74.3494 154.878 72.5057C154.635 72.1428 154.087 71.0563 153.661 70.0907C152.353 67.1257 151.707 66.2225 150.188 65.2339C148.867 64.374 147.162 64.2198 145.88 64.8446C144.196 65.6655 143.726 67.8047 144.932 69.1605C145.412 69.6994 146.306 70.1639 147.037 70.2543C148.405 70.4237 149.58 69.3894 149.58 68.0169C149.58 67.1257 149.235 66.6172 148.368 66.2279C147.183 65.6964 145.909 66.3179 145.915 67.4241C145.918 67.896 146.125 68.192 146.6 68.4061C146.906 68.5434 146.913 68.5541 146.664 68.5027C145.577 68.2787 145.322 66.976 146.196 66.1111C147.246 65.0732 149.416 65.5311 150.161 66.9485C150.474 67.5437 150.51 68.7292 150.237 69.4449C149.627 71.0473 147.845 71.8895 146.038 71.4312C144.808 71.1188 144.307 70.7809 142.824 69.2624C140.246 66.6233 139.246 66.112 135.53 65.5356L134.818 65.4251L135.628 64.7452Z" fill="white"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M123.533 17.5144C132.141 27.8979 138.069 32.182 138.728 33.0871C139.272 33.8344 139.068 34.5063 138.136 35.0329C137.617 35.3257 136.552 35.6223 136.019 35.6223C135.415 35.6223 135.208 35.391 135.208 35.391C134.858 35.0612 134.661 35.1189 132.865 31.9494C130.371 28.1028 128.283 24.912 128.226 24.8585C128.095 24.735 128.097 24.7391 132.61 32.7657C133.34 34.4386 132.755 35.0527 132.755 35.291C132.755 35.7757 132.622 36.0304 132.021 36.6974C131.018 37.8094 130.57 39.0588 130.246 41.6447C129.883 44.5434 128.863 46.5909 126.036 50.0954C124.381 52.1468 124.11 52.5228 123.692 53.3496C123.166 54.3908 123.022 54.974 122.963 56.2886C122.901 57.6788 123.022 58.577 123.449 59.906C123.823 61.0697 124.214 61.838 125.212 63.3746C126.074 64.7007 126.57 65.6865 126.57 66.072C126.57 66.3787 126.629 66.3791 127.963 66.0794C131.158 65.3625 133.752 64.1014 135.211 62.5558C136.114 61.5992 136.326 61.071 136.333 59.7605C136.338 58.903 136.307 58.7234 136.074 58.2301C135.694 57.4273 135.003 56.7597 133.48 55.725C131.485 54.369 130.632 53.2774 130.397 51.7762C130.204 50.5444 130.428 49.6754 131.532 47.3756C132.674 44.9951 132.958 43.9807 133.149 41.5813C133.273 40.0311 133.444 39.4198 133.892 38.9291C134.36 38.4174 134.781 38.244 135.937 38.087C137.823 37.831 139.024 37.3461 140.011 36.4421C140.867 35.6579 141.225 34.9023 141.28 33.7649L141.322 32.9027L140.843 32.3483C139.111 30.3403 122.373 15.936 122.266 15.936C122.244 15.936 122.814 16.6463 123.533 17.5144ZM127.542 57.8618C127.934 57.172 127.726 56.2857 127.071 55.8525C126.451 55.4434 125.49 55.6362 125.49 56.1694C125.49 56.3322 125.58 56.4506 125.784 56.555C126.128 56.7305 126.153 56.9282 125.882 57.3319C125.609 57.7409 125.631 58.1006 125.945 58.3448C126.451 58.7386 127.167 58.5219 127.542 57.8618Z" fill="white"/>
      <g style="mix-blend-mode:darken">
        <path fillRule="evenodd" clipRule="evenodd" d="M142.512 38.5392C141.627 38.8094 140.766 39.7419 140.5 40.7197C140.337 41.3162 140.43 42.3625 140.673 42.6857C141.066 43.2076 141.447 43.3451 142.476 43.3379C144.492 43.3239 146.245 42.4646 146.449 41.3903C146.616 40.5097 145.846 39.2892 144.786 38.7535C144.239 38.4771 143.075 38.3675 142.512 38.5392ZM144.869 40.3708C145.18 39.9317 145.044 39.4572 144.515 39.1363C143.508 38.5252 141.985 39.0309 141.985 39.9763C141.985 40.4469 142.779 40.9604 143.507 40.9604C143.992 40.9604 144.655 40.6732 144.869 40.3708Z" fill="white"/>
      </g>
      <defs>
        <linearGradient id={fill} x1="193.25" y1="3.46321" x2="193.25" y2="194" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB9D3E"/>
          <stop offset="1" stopColor="#E7892A"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
