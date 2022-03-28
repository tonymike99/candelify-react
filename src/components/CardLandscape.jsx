function CardLandscape({ data }) {
  const { src, alt, title, profession, description } = data;

  return (
    <div className="card card-horizontal">
      <div className="card-left-content">
        <img className="image-responsive" src={src} alt={alt} />
      </div>
      <div className="card-right-content">
        <div className="card-header">
          <h2 className="text-bold">{title}</h2>
          <small className="text-muted">{profession}</small>
        </div>
        <div className="card-body">
          <small className="text-muted">{description}</small>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export { CardLandscape };
