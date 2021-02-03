import React from 'react';

{
  /* 상품 미리보기 */
}
function Product(props) {
  /*  useState를 통해 data를 뽑아쓰는거이기에, props가 되는거구나!! */
  return (
    <div className="_product">
      <img src={'https://google' + props.i + '.jpg'} />
      <h5>{props.product.made_by}</h5>
      <h4>{props.product.title}</h4>
      <p>{props.product.review}</p>
    </div>
  );
}

export default Product;