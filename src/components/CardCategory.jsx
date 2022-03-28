function CardCategory({ data }) {
  const { src, alt, name } = data;

  return (
    <div className="card relative round">
      <img
        className="image-responsive round card-category"
        src={src}
        alt={alt}
      />
      <div className="card-header absolute badge-center-bottom position-modified">
        <h2 className="font-montserrat color-white">{name.toUpperCase()}</h2>
      </div>
    </div>
  );
}

export { CardCategory };
