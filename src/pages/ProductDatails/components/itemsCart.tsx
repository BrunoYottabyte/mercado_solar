import React from 'react';
import SvgUse from '../../../components/svg/svgUse';
import {useProductDetail} from '../context';
import {IProductProps} from '../types';

const ItemsCart = (product: IProductProps) => {
  const {removeProduct} = useProductDetail();
  return (
    <div>
      <div className="p-24 flex gap-12">
        <img
          src={product.images[0].image}
          className="w-[7.5rem] h-[7.5rem] border border-neutral-100/10 rounded-md"
        />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="paragraph1">{product.name}</p>
            <SvgUse
              id="#icon_trash_ms"
              onClick={() => removeProduct(product.id)}
              classe="w-32 h-32 hover:cursor-pointer  shrink-0"
            />
          </div>
          <div className="flex justify-between items-center pr-24">
            <span className="text-neutral-70 headline3">
              R$ {product.price}
            </span>
            <p className="paragraph3 text-neutral-60">
              QTD: {product.quantity}
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <span className="block absolute  border border-transparent border-b-neutral-30 w-full h-1 left-0 bottom-0"></span>
      </div>
    </div>
  );
};

export default ItemsCart;
