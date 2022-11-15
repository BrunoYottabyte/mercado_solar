import React from 'react';
import Badge from '../../../../../../components/DesignSystem/Badge';
import Button from '../../../../../../components/DesignSystem/Button';
import {Card} from '../../../../../../components/DesignSystem/Card';
import {useHome} from '../../../../context';

import {AutheticationProvider, useAuthenticationAccount} from './context';

const AutenticarUsuarioContent = () => {
	const {email} = useHome();
	const {loginForm, authenticateUser , isLoading} = useAuthenticationAccount();
	const passwordRef = loginForm.register('password', {min: 8});
	return (
		<>
			<Card classe="p-24 max-w-[592px] w-[37rem]  md2:max-w-[90vw]">
				<h1 className="title3 mb-40 md2:text-2xl">
					Sua pré proposta está sendo gerada. Crie uma senha para <br></br>{' '}
					visualizar seus orçamentos
				</h1>
				<Badge
					iconID="#icon-user-profile-ms"
					title={email}
					classe="py-8 pl-10 pr-24 mb-24 text-base bg-neutral-100-05 text-neutral-70 "
				/>
				<form onSubmit={loginForm.handleSubmit(authenticateUser)}>
					<div className="flex flex-col gap-16 mb-24">
						<label className="flex flex-col gap-4">
							<p className="paragraph2">Senha</p>
							<div className={`input-container `}>
								<input
									{...passwordRef}
									name="password"
									type="password"
									placeholder="Digite a senha"
									className="input !h-48 !rounded-md "
									required
								/>
							</div>
						</label>
					</div>

					<div className="flex w-full justify-end items-center gap-16">
						<Button
							disabled={isLoading}
							classe="btn secondary text-sm h-48 justify-center">
							Cancelar
						</Button>
						<Button
							disabled={isLoading}
							classe="btn h-48 text-sm justify-center"
							type="submit">
							Continuar
						</Button>
					</div>
				</form>
			</Card>
		</>
	);
};

const AutenticarConta = () => {
	return (
		<AutheticationProvider email="pedro6@gmail.com">
			<AutenticarUsuarioContent />
		</AutheticationProvider>
	);
};
export default AutenticarConta;
