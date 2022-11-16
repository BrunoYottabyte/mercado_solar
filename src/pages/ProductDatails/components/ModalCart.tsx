import React, {useEffect} from 'react';
import Select from 'react-select';
import Button from '../../../components/DesignSystem/Button';
import {ModalHeader} from '../../../components/DesignSystem/Modal';
import {Modal} from '../../../components/DesignSystem/Modal/Modal';
import {ModalContent} from '../../../components/DesignSystem/Modal/ModalContent';
import SvgUse from '../../../components/svg/svgUse';
import {useGlobalContext} from '../../../context/GlobalContext';
import { GLOBAL } from '../../../utils/GLOBAL';
import {useProductDetail} from '../context';
import ItemsCart from './itemsCart';

const ModalCart = ({idDinamic}) => {
  const {setmodalOpen, modalOpen} = useGlobalContext();
  console.log(idDinamic)
  useEffect(() => {
    if (modalOpen.open == false || modalOpen.open == null) {
      // eslint-disable-next-line no-undef
      // @ts-ignore
      clearTimeout(window.timeoutpaineis);
    }
  }, [modalOpen]);

  const openModal = id => {
    setmodalOpen({open: true, id, position: 'right'});
  };

  const openCart = () => {
    openModal('cart');
  };

  const {
    cart,
    budgetRequestOptions,
    getBudgetRequests,
    setBudgetRequestSelected,
    budgetRequestSelected,
    handleCreateBudget,
    getCart
  } = useProductDetail();

  useEffect(() => {
    getCart();
    getBudgetRequests();
  }, []) 

  return (
    <Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
      <ModalContent id={idDinamic}>
        <ModalHeader
          text={''}
          close={false}
          classeHeader="!bg-white relative z-[999999] title3 sticky top-0 pb-24 border border-transparent border-b-neutral-30">
          <div className="title3 flex w-full justify-between items-center">
            <div className="flex items-center">
              {/* <h3 className="title3"> */}
              {/* Orçamento <span className="text-primary-pure">2742</span> - */}
              {/* Bruno Siqueira */}
              <Select
                placeholder="Selecione o orçamento desejado"
                options={budgetRequestOptions}
                onChange={e => setBudgetRequestSelected(e?.value)}
              />
              {/* </h3> */}
              <button
                type="button"
                // @ts-ignore
                style={{'--cor-1': '#F69F00'}}
                className="absolute right-24 top-24 !border !border-neutral-60/20 hover:border-primary-pure  rounded-full"
                onClick={() =>
                  setmodalOpen({open: false, id: false, position: 'right'})
                }>
                <SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
              </button>
            </div>
          </div>
        </ModalHeader>

        <section className="flex flex-col gap-48">
          {cart.map((product, i) => (
            <ItemsCart {...product} key={i} />
          ))}
        </section>
        <div className="flex flex-col mt-16">
          <div className="flex justify-between items-center px-24">
            <span className="bold">Subtotal</span>
            <span className="">
              {GLOBAL.currencyBR(cart.reduce(
                (acc, product) =>
                  acc + Number(product.price) * product.quantity,
                0,
              ).toFixed(2))}
            </span>
          </div>
          <div className="flex flex-col w-full py-10 px-24">
            <Button
              style={{'--cor-1': '#000'}}
              classe="btn w-full h-48  justify-center"
              disabled={!budgetRequestSelected || !cart.length}
              onClick={() => handleCreateBudget()}>
              Disponibilizar orçamento
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalCart;
