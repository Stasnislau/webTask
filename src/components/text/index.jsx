function Text({ className, color, size, style, children }) {
  const textStyle = {
    color: color || 'black',
    fontSize: size || '16px',
    ...style,
  };

  return <p className={className} style={textStyle}>{children}</p>;
}

export default Text;
