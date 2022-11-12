import React, { useEffect, useState, useRef, useCallback } from "react";
import { useAuthContext } from "../../context/useAuthContext";
import logo from "../../assets/images/icon_logo.png";
import overflowLogin from "../../assets/images/overflow-login.svg";
import {Card} from "../../components/DesignSystem/Card";
import { Input } from "../../components/DesignSystem/Input";
import SvgUse from "../../components/svg/svgUse";
import Svg from "../../components/svg/svg";
import CheckBox from "../../components/DesignSystem/CheckBox";
import Button from "../../components/DesignSystem/Button";
import gsap from "gsap/dist/gsap";
import { useNavigate } from "react-router-dom";

import { GLOBAL } from "../../utils/GLOBAL";

const Login = () => {
	const { user, signIn } = useAuthContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { validarPorLength, showToastify } = GLOBAL;

	const handleLogin = async () => {
		const btnSubmit = document.querySelector(".btn-submit");
		if (!validarPorLength(password, 6)) {
			showToastify("senha invalida");
			return
		}

		try {
			btnSubmit.classList.add("is-loading");
			const response = await signIn(email, password);
			console.log(response);
		} catch (e) {
			console.log(e);
			e?.response?.status === 401 && showToastify("Usuário e/ou senha inválidos.");
		} finally {
			btnSubmit.classList.remove("is-loading");
		}
	};

	//animacao login
	useEffect(() => {
		gsap.set(".card-animate, .card-animate *:not(svg)", {
			opacity: 0,
			y: 32,
		});
		gsap.to(".card-animate,.card-animate *:not(svg)", {
			opacity: 1,
			y: 0,
			stagger: 0.015,
			duration: 0.4,
		});

		document.body.addEventListener("keydown", (e) => {
			if (e.keyCode === 13) {
				btn_ref.current.click();
			}
		});
	}, []);

	const btn_ref = useRef(null);


	const showPassword = () => {
		if(document.querySelector('.input_password').type == 'text'){
			document.querySelector('.input_password').type = 'password'
		}else{
			document.querySelector('.input_password').type = 'text'
		}
	}
	return (
		<>
			<Svg />
			<div className="grid h-screen grid-cols-2 md2:flex md2:place-items-center md2:w-full md2:justify-center">
				<div className="bg-linear-login grid place-items-center md2:hidden relative">
					<div className=" bg-primary-darkness w-full h-full absolute left-0 top-0 grid place-items-center">
						<svg className="absolute h-full !w-[417px]" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.5" y="0.5" width="416" height="974" fill="url(#paint0_linear_298_16336)" stroke="url(#paint1_linear_298_16336)"/>
							<defs>
							<linearGradient id="paint0_linear_298_16336" x1="208.5" y1="0" x2="208.5" y2="975" gradientUnits="userSpaceOnUse">
							<stop stopColor="#F8B944" stopOpacity="0.1"/>
							<stop offset="0.25" stopColor="#F8B944" stopOpacity="0.0542867"/>
							<stop offset="0.520833" stopColor="#F8B944" stopOpacity="0.0272419"/>
							<stop offset="0.755208" stopColor="#F8B944" stopOpacity="0.0115005"/>
							<stop offset="1" stopColor="#F8B944" stopOpacity="0"/>
							</linearGradient>
							<linearGradient id="paint1_linear_298_16336" x1="208.5" y1="0" x2="208.5" y2="975" gradientUnits="userSpaceOnUse">
							<stop stopColor="#F8B944" stopOpacity="0.1"/>
							<stop offset="1" stopColor="#F8B944" stopOpacity="0.05"/>
							</linearGradient>
							</defs>
						</svg>		
						<img src={overflowLogin} className="absolute top-0 left-0 w-full h-full z-[9999999999999999]" />
						<img src={logo} className="!max-w-[250px]" alt="Logo mercado solar" />
					</div>
				</div>

				<div className="grid place-items-center h-full bg-white ">
					<Card classe="relative p-32  overflow-hidden max-w-[428px] w-full shadow-regular card-animate rounded-lg border-neutral-30">
		
						<div className="flex flex-col ">
							<h1 className="title2 text-primary-pure">
								Fazer Login
							</h1>
							<p className="paragraph1 text-neutral-70 mt-16 mb-48 max-w-[271px]">
								Seja bem-vindo(a)! Insira seu e-mail e senha para entrar em sua
								conta.
							</p>

							<label className="flex flex-col gap-4">
								<p className="paragraph2">E-mail</p>
								<Input
									name="email"
									id="email"
									placeholder="Digite seu email"
									classe="!h-48  !rounded-md"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</label>

							<label className="flex flex-col gap-4 mt-24">
								<p className="paragraph2">Senha</p>
								<Input
									type="password"
									name="password"
									id="password"
									classe="!h-48 !rounded-md input_password"
									containerClass="icon-right"
									placeholder="Digite sua senha"
									onChange={e => setPassword(e.target.value)}
									required
								/>
								<SvgUse onClick={showPassword} id="#icon-eye-ms" classe="hover:cursor-pointer absolute w-20 h-20 bottom-12 right-16" />
							</label>
							<div className="mt-24">
								<CheckBox checked={true} containerClass="md">
									<p className="paragraph2">Permanecer conectado</p>
								</CheckBox>
							</div>

							<Button
								ref={btn_ref}
								onClick={() => handleLogin()}
								classe="w-full btn h-48 justify-center mt-40 btn-submit"
							>
								Entrar na conta
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Login;
