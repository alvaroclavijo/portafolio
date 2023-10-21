import React from "react";

interface ImageProps {
  imgURL?: string;
  svg?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageRenderer: React.FC<ImageProps> = ({
  imgURL,
  svg,
  alt,
  width,
  height,
}) => {
  if (svg) {
    return (
      <img
        className="w-auto h-24"
        src={`data:image/svg+xml;base64,${btoa(svg)}`}
        alt={alt || "SVG Image"}
        width={width || 100}
        height={height || 100}
      />
    );
  } else if (imgURL) {
    return (
      <img
        src={imgURL}
        alt={alt || "Image"}
        width={width || 100}
        height={height || 100}
      />
    );
  } else {
    return null;
  }
};

export default ImageRenderer;
