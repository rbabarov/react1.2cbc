import propTypes from 'prop-types';
import React from 'react';

class ProductProfile extends React.Component {

  render() {
    const { card } = this.props;
    const { brand, title, description, descriptionFull, currency, price } = card;
    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="description">{descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{currency}{price}.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ProductProfile.propTypes = {
  brand: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  descriptionFull: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
}

export default ProductProfile;
