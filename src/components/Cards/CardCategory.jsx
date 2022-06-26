function CardCategory({ data }) {
  const { src, alt, name } = data;

  return (
    <div className="card-category round relative">
      <img className="image-responsive round" src={src} alt={alt} />
      <span className="absolute badge-inside-center">
        <h3 className="h3 color-white">{name.toUpperCase()}</h3>
      </span>
    </div>
  );
}

export { CardCategory };
