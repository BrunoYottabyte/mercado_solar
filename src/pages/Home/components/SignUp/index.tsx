import React from 'react';

import {Modal} from '../../../../components/DesignSystem/Modal/Modal';
import {ModalHeader} from '../../../../components/DesignSystem/Modal';
import {ModalContent} from '../../../../components/DesignSystem/Modal/ModalContent';
import SvgUse from '../../../../components/svg/svgUse';
import CriarConta from './components/CriarConta';

const Signup = () => {
  return (
    <Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
      <ModalContent id="signup">
        <ModalHeader close={false} classeHeader="bg-white title3" text={''}>
          <div className="title3 flex  w-full justify-between items-center">
            Registre-se para continuar
            <SvgUse id="#icon_help_ms" classe="!w-24 !h-24" />
          </div>
        </ModalHeader>
        <CriarConta />
      </ModalContent>
    </Modal>
  );
};

export default Signup;
