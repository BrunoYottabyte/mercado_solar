import React from 'react';
import {IItem} from '../../../../../../types';

const Product = ({product, quantity, ...rest}: IItem) => {
  return (
    <div className="flex gap-12 relative p-16" key={`${product?.id}-image-div`}>
      <img
        className="w-[104px] h-[104px] rounded-md border border-neutral-100-10"
        src={product?.images[0]?.image}
        alt=""
      />
      <div className="w-full flex flex-col justify-between">
        <p className="paragraph1">{product?.name}</p>
        <div className="flex justify-between w-full">
          <p className="headline3 text-neutral-70">R$ {product.price}</p>
          <p className="paragraph3 text-neutral-60">QTD:{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
