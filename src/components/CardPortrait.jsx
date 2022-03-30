function CardPortrait({ productData }) {
  const {
    name,
    price,
    ratings,
    inStock,
    fastDelivery,
    oldPrice,
    discountPercent,
    image,
  } = productData;

  return (
    <div className="card relative text-center">
      <button className="btn round btn-light btn-floating badge badge-lg badge-inside-top-right">
        <i
          className="fas fa-heart fa-lg"
          style={{
            color: "red",
            cursor: "pointer",
          }}
        />
      </button>
      <img className="image-responsive" src={image} alt={name} />
      <div className="card-header">
        <small className="text-muted">{name}</small>
      </div>
      <div className="card-body">
        <h3 className="text-bold">₹ {price}</h3>
        <small>
          <span className="text-strikethrough">₹ {oldPrice}</span>{" "}
          <span className="text-bold">{discountPercent}% off</span>
        </small>
        <p className="text-muted">⭐ {ratings}/5 ⭐</p>
        {inStock ? (
          <small className="text-muted"> In Stock </small>
        ) : (
          <small> Out of Stock </small>
        )}
        {fastDelivery ? (
          <small className="text-muted"> Fast Delivery </small>
        ) : (
          <small> 3 days minimum </small>
        )}
      </div>
      <div className="card-footer">
        <button className="btn btn-primary btn-width-100">Add to Cart</button>
      </div>
    </div>
  );
}

export { CardPortrait };
