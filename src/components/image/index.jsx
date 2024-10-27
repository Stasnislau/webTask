import { useState, useEffect } from "react";

const Image = ({
  src,
  alt = "Image",
  className,
  width = "auto",
  height = "auto",
  placeholder,
  srcSet,
  sizes,
  objectFit = "cover",
  objectPosition = "center",
  onLoad,
  onError,
  loadingType = "lazy",
}) => {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      setLoading(false);
      setCurrentSrc(src);
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      setLoading(false);
      setError(true);
      if (onError) {
        onError();
      }
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  return (
    <div className="image-container">
      {loading && !currentSrc && (
        <div
          className="skeleton-loader"
          style={{
            backgroundColor: "#f0f0f0",
            animation: "pulse 1.5s infinite",
            width: "100%",
            height: "100%",
          }}
        />
      )}
      {
        !loading(
          <img
            src={currentSrc}
            alt={error ? `${alt} (failed to load)` : alt}
            loading={loadingType}
            className={className}
            width={width}
            height={height}
            srcSet={srcSet}
            sizes={sizes}
            onError={handleImageError}
            style={{
              objectFit,
              objectPosition,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        )
      }
    </div>
  );
};

export default Image;
