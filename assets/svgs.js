import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const TopLogo = props => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <Circle cx="20" cy="20" r="20" fill="#26235C" />
      <Path
        d="M7 27.8715L10.2651 25.9501C10.8949 27.0359 11.4679 27.9553 12.8424 27.9553C14.1599 27.9553 14.9906 27.4538 14.9906 25.5047L19.0003 12.2459V25.5598C19.0003 29.5984 16.5662 31.4368 13.0144 31.4368C9.8068 31.4368 7.94482 29.8212 7 27.8715Z"
        fill="#F7DF1E"
      />
      <Path
        d="M17.1145 11.8091C18.219 11.8091 19.1144 10.9564 19.1144 9.90453C19.1144 8.85269 18.219 8 17.1145 8C16.0099 8 15.1145 8.85269 15.1145 9.90453C15.1145 10.9564 16.0099 11.8091 17.1145 11.8091Z"
        fill="#F7DF1E"
      />
      <Path
        d="M32 15.5363L28.7347 17.4577C28.1049 16.3715 27.5317 15.4525 26.1573 15.4525C24.8399 15.4525 24.0091 15.9537 24.0091 17.9031L19.9995 31.1617V17.8481C19.9995 13.8096 22.4336 11.9712 25.9854 11.9712C29.1927 11.9712 31.0547 13.5867 31.9997 15.5366"
        fill="#F7DF1E"
      />
    </Svg>
  );
};

export const BackArrow = props => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.25 12.2744L19.25 12.2744"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Tick = props => {
  return (
    <Svg width="11" height="9" viewBox="0 0 11 9" fill="none" {...props}>
      <Path
        d="M1 4.15617L3.81151 6.81787L9.31137 1"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
};
