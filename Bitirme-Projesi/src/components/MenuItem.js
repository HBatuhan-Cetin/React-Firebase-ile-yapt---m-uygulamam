function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: '10px' }}>{name}</h1>
      <h6 style={{ marginTop: '10px',marginBottom: '10px'}}>{content}</h6>
      <p style={{ marginTop: '10px',color: 'red', fontSize: '25px'}}>{price} ₺</p>
    </div>
  );
}

export default MenuItem;
