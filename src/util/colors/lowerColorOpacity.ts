const lowerColorOpacity = ({hex = '', opacity = 0.8}) =>
  `${hex}${Math.floor(opacity * 255)
    .toString(16)
    .padStart(2, '0')}`;

export default lowerColorOpacity;
