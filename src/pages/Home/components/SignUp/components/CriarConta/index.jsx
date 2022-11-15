import React from 'react';
import Badge from '../../../../../../components/DesignSystem/Badge';
import Button from '../../../../../../components/DesignSystem/Button';
import {Card} from '../../../../../../components/DesignSystem/Card';
import {useHome} from '../../../../context';

import {CreateAccountProvider, useCreateAccount} from './context';

const CriarContaContent = () => {
	const {email} = useHome();
	const {passwordForm, createUser, isLoading} = useCreateAccount();

	const passwordRef = passwordForm.register('password', {min: 8});
	const confirmPasswordRef = passwordForm.register('confirmPassword', {min: 8});
	return (
		<>
			<Card classe="p-24 max-w-[592px] w-[37rem]  md2:max-w-[90vw]">
				<h1 className="title2 mb-40 md2:text-2xl">
					Sua pré proposta está sendo gerada. Crie uma senha para <br></br>{' '}
					visualizar seus orçamentos
				</h1>
				<Badge
					iconID="#icon-user-profile-ms"
					title={email}
					classe="py-8 pl-10 pr-24 mb-24 text-base bg-neutral-100-05 text-neutral-70 "
				/>
				<form onSubmit={passwordForm.handleSubmit(createUser)}>
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
									// onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</label>
						<label className="flex flex-col gap-4">
							<p className="paragraph2">Confirmar senha</p>
							<div className={`input-container `}>
								<input
									// {...passwordForm.register('confirmPassword', { min: 8 })}
									{...confirmPasswordRef}
									onChange={e => confirmPasswordRef.onChange(e)}
									name="confirmPassword"
									type="password"
									placeholder="Confirme a senha"
									className="input !h-48 !rounded-md"
									// onChange={(e) => setEmail(e.target.value)}
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

const CriarConta = () => {
	return (
		<CreateAccountProvider email="pedro6@gmail.com">
			<CriarContaContent />
		</CreateAccountProvider>
	);
};
export default CriarConta;
