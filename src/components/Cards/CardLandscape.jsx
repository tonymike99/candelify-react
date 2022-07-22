function CardLandscape({ data }) {
  const { src, alt, title, profession, description } = data;

  return (
    <div className="card card-horizontal">
      <div className="card-left-content">
        <img className="image-responsive" src={src} alt={alt} />
      </div>

      <div className="card-right-content">
        <h3 className="h3">{title}</h3>
        <small>{profession}</small>
        <small className="text-grey">{description}</small>
        <button className="btn btn-primary btn-width-100">Read More</button>
      </div>
    </div>
  );
}

export { CardLandscape };
