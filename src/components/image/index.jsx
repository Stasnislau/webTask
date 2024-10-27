const Image = ({ src, alt, className, width = 'auto', height = 'auto' }) => {

  const handleImageError = (e) => {
    e.target.alt = 'Image failed to load';
  };

  return <img src={src} alt={alt} className={className} width={width} height={height} onError={handleImageError} />;

};

export default Image;
