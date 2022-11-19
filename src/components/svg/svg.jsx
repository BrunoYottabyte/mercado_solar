const Svg = () => <>
	<svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} version="1.1">
		<defs >
			{ }
			<symbol id="icon_arrow_left" viewBox="0 0 6 11" fill="none">
				<path d="M1 9.70117L5 5.70117L1 1.70117" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="var(--cor-1, #F4A155)" strokeWidth="1.5" d="M19.842 8.299l-6-4.667a3 3 0 00-3.684 0l-6 4.667A2.998 2.998 0 003 10.667V18a3 3 0 003 3h12a3 3 0 003-3v-7.333c0-.926-.427-1.8-1.158-2.368z" clipRule="evenodd"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17h6"></path>
			</symbol>
			<symbol id="icon_gestao_producao" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/symbol">
				<path d="M8.49805 14.2507H17.5018" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M13.0002 14.2505V8.24805" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M16.0012 14.2507V10.249" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M17.0014 22.0039L16.001 18.0022" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8.99805 22.0039L9.99846 18.0022" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path fillRule="evenodd" clipRule="evenodd" d="M19.9277 18.0022H6.07196C4.92549 18.0022 3.99609 17.0728 3.99609 15.9263V6.0722C3.99609 4.92573 4.92549 3.99634 6.07196 3.99634H19.9267C20.4775 3.99607 21.0057 4.21466 21.3952 4.60399C21.7847 4.99332 22.0036 5.52148 22.0036 6.0722V15.9253C22.0039 16.476 21.7853 17.0043 21.3959 17.3938C21.0066 17.7833 20.4785 18.0022 19.9277 18.0022Z" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M9.99923 14.2505V11.2493" stroke="var(--cor-1, #4B5259)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</symbol>
			<symbol id="icon_administrativo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
				<path stroke="var(--cor-1, #4B5259)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.041 10.96l-2.51 2.51"></path>
				<path fillRule="evenodd" stroke="var(--cor-1, #4B5259)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.001 6.998v4.001h4.002l4.001-4.001-2.668-1.334-1.333-2.668L15 6.998z" clipRule="evenodd"></path>
				<path stroke="var(--cor-1, #4B5259)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.972A8.524 8.524 0 1021.03 14M17.212 14A4.727 4.727 0 1112 8.789"></path>
			</symbol>
			<symbol id="icon_vendas_b2b" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.97 9.174A8.003 8.003 0 0121.003 13M13 10.545V10M13 15.456v.545"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.578 14.871c.21.36.595.583 1.013.586h.9a1.15 1.15 0 00.279-2.264l-1.535-.385a1.148 1.148 0 01.279-2.263h.9c.416.003.8.225 1.01.584M4.997 13a8.003 8.003 0 0015.033 3.827M9.045 9.173H5.51V5.636"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.955 16.827h3.537v3.537"></path>
			</symbol>
			<symbol id="icon_operacional" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
				<path fillRule="evenodd" stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.55 4.119h0a2.02 2.02 0 011.382 1.917v.055c0 1.099.878 1.997 1.977 2.02l.118.003a2.02 2.02 0 011.763 1.117v0a2.02 2.02 0 01-.379 2.332l-.038.039a2.02 2.02 0 00-.031 2.826l.081.086a2.02 2.02 0 01.458 2.036v0a2.02 2.02 0 01-1.917 1.382h-.055a2.02 2.02 0 00-2.02 1.977l-.003.118a2.02 2.02 0 01-1.117 1.763v0a2.02 2.02 0 01-2.332-.378l-.039-.04a2.02 2.02 0 00-2.827-.03l-.085.082a2.02 2.02 0 01-2.036.457v0a2.02 2.02 0 01-1.382-1.917v-.055a2.02 2.02 0 00-1.977-2.02l-.118-.003a2.02 2.02 0 01-1.764-1.116v0a2.02 2.02 0 01.38-2.333l.038-.039a2.02 2.02 0 00.03-2.826l-.08-.086a2.02 2.02 0 01-.458-2.036v0a2.02 2.02 0 011.917-1.382h.055a2.02 2.02 0 002.02-1.977l.003-.118A2.02 2.02 0 019.23 4.21v0a2.02 2.02 0 012.333.379l.038.038a2.02 2.02 0 002.827.031l.085-.082a2.02 2.02 0 012.037-.457z" clipRule="evenodd"></path>
				<circle cx="13" cy="13" r="2.501" stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
			</symbol>
			<symbol id="icon_financeiro" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.503 7.951l-2.366-3.154a2 2 0 00-2.71-.464L8.929 7.998"></path>
				<path fillRule="evenodd" stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.503 12.5h2.501a1 1 0 011 1v3.002a1 1 0 01-1 1h-2.501a2.501 2.501 0 01-2.501-2.501v0a2.501 2.501 0 012.501-2.501v0z" clipRule="evenodd"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22.004 12.5v-2a2.501 2.501 0 00-2.501-2.502H6.497a2.501 2.501 0 00-2.5 2.501v9.004a2.501 2.501 0 002.5 2.5h13.006a2.501 2.501 0 002.5-2.5v-2.001"></path>
			</symbol>
			<symbol id="icon_gestao_pessoas" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<path fill="var(--cor-1, #F4A155)" d="M1.25 19a.75.75 0 001.5 0h-1.5zm12 0a.75.75 0 001.5 0h-1.5zm-10.5 0A3.262 3.262 0 016 15.75v-1.5A4.762 4.762 0 001.25 19h1.5zM6 15.75h4v-1.5H6v1.5zm4 0A3.262 3.262 0 0113.25 19h1.5A4.762 4.762 0 0010 14.25v1.5z"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 6c1.4 1.4 1.4 3.6 0 4.9-1.4 1.3-3.6 1.4-4.9 0C4.3 9.5 4.2 7.4 5.5 6c1.3-1.4 3.6-1.3 5 0"></path>
				<path fill="var(--cor-1, #F4A155)" d="M16 13.25a.75.75 0 000 1.5v-1.5zM21.25 17a.75.75 0 001.5 0h-1.5zM16 14.75h3v-1.5h-3v1.5zm3 0c1.286 0 2.25.964 2.25 2.25h1.5c0-2.114-1.636-3.75-3.75-3.75v1.5z"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.3 6.7c1 1 1 2.6 0 3.5-1 .9-2.6 1-3.5 0-.9-1-1-2.6 0-3.5.9-.9 2.5-.9 3.5 0"></path>
			</symbol>
			<symbol id="icon_franquias" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
				<path stroke="var(--cor-1, #4B5259)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.498 10.75A2.25 2.25 0 016.248 13M13 10.75a2.25 2.25 0 01-4.502 0M17.502 10.75a2.251 2.251 0 01-4.502 0M19.753 13a2.25 2.25 0 01-2.251-2.25M21.003 12.62v9.384M23.004 22.004H2.996M4.996 12.619v9.385"></path>
				<rect width="4.002" height="3.001" x="14.501" y="16.002" stroke="var(--cor-1, #4B5259)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="0.5"></rect>
				<path stroke="var(--cor-1, #4B5259)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.998 22.004v-5.502a.5.5 0 01.5-.5H11a.5.5 0 01.5.5v5.502M8.498 10.75v-.751M13 10.75v-.751M17.502 10.75v-.751M21.914 9.999H4.085M19.753 13v0a2.251 2.251 0 002.25-2.25v-.128c0-.408-.11-.808-.32-1.157l-2.101-3.497a2 2 0 00-1.712-.971H8.13a2 2 0 00-1.716.971l-2.1 3.497c-.21.35-.32.75-.318 1.157v.127A2.251 2.251 0 006.247 13v0"></path>
			</symbol>
			<symbol id="icon_configuracoes" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5.5h3.07M10.323 3.732a2.5 2.5 0 11-3.535 3.536 2.5 2.5 0 013.535-3.536M11.06 5.5H21"></path>
				<path stroke="var(--cor-1, #F4A155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.323 3.732a2.5 2.5 0 11-3.535 3.536 2.5 2.5 0 013.535-3.536M21 12h-3.06M12.94 12H3M17.212 10.232a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M11.06 18.5H21M3 18.5h3.06M10.323 16.732a2.5 2.5 0 11-3.535 3.536 2.5 2.5 0 013.535-3.536"></path>
			</symbol>
			{ }
			<symbol id="\\" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<rect width="24" height="24" fill="var(--cor-1, #fff)" fillOpacity="0.1" rx="8"></rect>
				<path stroke="var(--cor-1, #fff)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" d="M9.499 7.364h9.17M18.67 12h-7.503M12.834 16.636h5.836M5.748 6.947a.417.417 0 100 .833.417.417 0 000-.833M7.415 11.583a.417.417 0 100 .834.417.417 0 000-.834M9.083 16.22a.417.417 0 100 .833.417.417 0 000-.834"></path>
			</symbol>
			<symbol id="icon_adicionar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<rect width="24" height="24" fill="var(--cor-1, #fff)" fillOpacity="0.1" rx="8"></rect>
				<path stroke="var(--cor-1, #fff)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" d="M12 17.833V6.167M17.833 12H6.166"></path>
			</symbol>
			<symbol id="icon_home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<path fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" d="M19.842 8.299l-6-4.667a3 3 0 00-3.684 0l-6 4.667A2.998 2.998 0 003 10.667V18a3 3 0 003 3h12a3 3 0 003-3v-7.333c0-.926-.427-1.8-1.158-2.368z" clipRule="evenodd"></path>
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17h6"></path>
			</symbol>
			{ }
			{ }
			<symbol id="icon_arrow_right_light" width="18" height="12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 18">
				<path fill="#fff" d="M1 9l8-8v16L1 9z"></path>
				<path stroke="#E9ECEF" strokeLinejoin="round" strokeMiterlimit="1.113" d="M9 1L1 9l7.2 7.2.8.8"></path>
			</symbol>
			<symbol id="icon_arrow_left_light" width="18" height="12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 18">
				<path fill="#fff" d="M9 9L1 1v16l8-8z"></path>
				<path stroke="#E9ECEF" strokeLinejoin="round" strokeMiterlimit="1.113" d="M1 1l8 8-7.2 7.2-.8.8"></path>
			</symbol>
			<symbol id="icon_arrow_bottom_light" width="18" height="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 10">
				<path fill="#fff" d="M9 1l8 8H1l8-8z"></path>
				<path stroke="#E9ECEF" strokeLinejoin="round" strokeMiterlimit="1.113" d="M17 9L9 1 1.8 8.2 1 9"></path>
			</symbol>
			<symbol id="icon_arrow_top_light" xmlns="http://www.w3.org/2000/svg" width="18" height="10" fill="none" viewBox="0 0 18 10">
				<path fill="#fff" d="M9 9l8-8H1l8 8z"></path>
				<path stroke="#E9ECEF" strokeLinejoin="round" strokeMiterlimit="1.113" d="M17 1L9 9 1.8 1.8 1 1"></path>
			</symbol>
			{ }
			<symbol id="icon_arrow_bottom_dark" xmlns="http://www.w3.org/2000/svg" width="18" height="10" fill="none" viewBox="0 0 18 10">
				<path fill="#212529" d="M9 1l8 8H1l8-8z"></path>
				<path fill="#343A40" d="M9 1l.354-.354a.5.5 0 00-.708 0L9 1zm8.354 7.646l-8-8-.708.708 8 8 .708-.708zm-8.708-8l-7.2 7.2.708.708 7.2-7.2-.708-.708zm-7.2 7.2l-.8.8.708.708.8-.8-.708-.708z"></path>
			</symbol>
			<symbol id="icon_arrow_top_dark" xmlns="http://www.w3.org/2000/svg" width="18" height="10" fill="none" viewBox="0 0 18 10">
				<path fill="#212529" d="M9 9l8-8H1l8 8z"></path>
				<path fill="#343A40" d="M9 9l.354.354a.5.5 0 01-.708 0L9 9zm8.354-7.646l-8 8-.708-.708 8-8 .708.708zm-8.708 8l-7.2-7.2.708-.708 7.2 7.2-.708.708zm-7.2-7.2l-.8-.8.708-.708.8.8-.708.708z"></path>
			</symbol>
			<symbol id="icon_arrow_left_dark" xmlns="http://www.w3.org/2000/svg" width="18" height="12" fill="none" viewBox="0 0 10 18">
				<path fill="#212529" d="M9 9L1 1v16l8-8z"></path>
				<path fill="#343A40" d="M9 9l.354-.354a.5.5 0 010 .708L9 9zM1.354.646l8 8-.708.708-8-8 .708-.708zm8 8.708l-7.2 7.2-.708-.708 7.2-7.2.708.708zm-7.2 7.2l-.8.8-.708-.708.8-.8.708.708z"></path>
			</symbol>
			<symbol id="icon_arrow_right_dark" xmlns="http://www.w3.org/2000/svg" width="18" height="12" fill="none" viewBox="0 0 10 18">
				<path fill="#212529" d="M1 9l8-8v16L1 9z"></path>
				<path fill="#343A40" d="M1 9l-.354-.354a.5.5 0 000 .708L1 9zM8.646.646l-8 8 .708.708 8-8-.708-.708zm-8 8.708l7.2 7.2.708-.708-7.2-7.2-.708.708zm7.2 7.2l.8.8.708-.708-.8-.8-.708.708z"></path>
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" id="icon_info" fill="none" viewBox="0 0 18 18">
				<path stroke="var(--cor-1, #868E96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6a.188.188 0 10.002.375A.188.188 0 008.998 6"></path>
				<path fillRule="evenodd" stroke="var(--cor-1, #868E96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 15.75v0A6.75 6.75 0 012.25 9v0A6.75 6.75 0 019 2.25v0A6.75 6.75 0 0115.75 9v0A6.75 6.75 0 019 15.75z" clipRule="evenodd"></path>
				<path stroke="var(--cor-1, #868E96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 9v3.75"></path>
			</symbol>
			<symbol id="icon_close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
				<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 1L1 9m0-8l8 8"></path>
			</symbol>
			<symbol id="icon_close2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 1L1 9m0-8l8 8"></path>
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="icon_check" d="M9 1.25l-5.5 5.5L1 4.25"></path>
			</symbol>
			<symbol id="avatar_default" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" id="icon_cevada" fill="none" viewBox="0 0 77 124">
				<path fill="currentColor" d="M40.577 96.402c-2.163 4.066-2.616 9.026-2.543 14.897.042 3.308.25 6.904.415 10.793 12.52-2.714 25.554-7.336 31.315-14.289 4.409-5.321 5.625-18.85 4.865-30.707a142.207 142.207 0 00-11.04 3.898c-11.48 4.62-20.208 10.139-23.012 15.408z"></path>
				<path fill="#F8F9FA" d="M63.588 80.995c11.075-4.902 11.78-22.017 10.889-35.823-2.254.741-4.977 1.645-7.905 2.72-.678.248-1.366.505-2.062.772-11.116 4.261-24.199 10.874-25.91 20.223l-.097 34.052c.38-2.39 1.027-4.568 2.074-6.537 2.737-5.144 11.119-10.525 22.194-15.075.271-.112.544-.222.817-.332z"></path>
				<path fill="#F8F9FA" d="M38.6 38.332v30.555c1.711-9.349 14.794-15.962 25.91-20.223.696-.267 1.384-.524 2.062-.773 8.36-7.448 8.209-26.129 7.753-34.794C55.019 19.026 38.6 29.06 38.6 38.332z"></path>
				<path fill="#F8F9FA" d="M11.238 36.458l.127.043C23.588 40.579 36.552 48.05 37.69 59.614l.912 9.273V34.075C38.6 12.033 18.99 7.93 2.42 2c0 12.01-3.344 26.857 8.817 34.458z"></path>
				<path fill="#F8F9FA" d="M37.689 59.614c-1.137-11.564-14.1-19.035-26.324-23.113a87.063 87.063 0 00-8.792-2.425c-.608 12.465-1.52 25.234 6.081 32.53l1.688 1.689c10.353 3.683 26.293 11.556 27.195 22.938l.966 11.706.098-34.052-.912-9.273z"></path>
				<path fill="#F8F9FA" d="M14.43 102.026c6.081 2.737 12.188 4.928 20.067 7.905l3.537 1.368c-.038-3.028.065-5.814.47-8.36l-.967-11.706c-.902-11.382-16.842-19.255-27.195-22.939C6.73 67.01 3.798 66.234 2.422 66 1.508 80.44 1.356 96.143 14.43 102.026z"></path>
				<path fill="#DEE2E6" d="M74.477 45.172l1.195-.077-.1-1.544-1.47.484.375 1.138zM38.503 102.94l1.183.188-1.183-.188zm-.814-43.325l1.192-.117-1.192.117zM2.573 34.075l.257-1.17-1.384-.304-.069 1.416 1.196.058zm6.081 32.532l.847-.847-.009-.009-.009-.008-.829.864zm29.795 55.485l-1.197.051.06 1.421 1.39-.301-.253-1.171zm2.128-25.69l-1.057-.563 1.057.563zM74.63 77.096l1.195-.077-.097-1.516-1.452.448.353 1.145zm-4.865 30.707l.922.764-.922-.764zm-35.267 2.128l.432-1.117-.009-.003-.423 1.12zm-20.066-7.905l.491-1.092-.491 1.092zM2.42 65.999l.203-1.18-1.314-.226-.084 1.33L2.421 66zm35.116 25.234l-1.194.095v.004l1.194-.099zm36.788-78.136l1.196-.063-.081-1.532-1.467.45.352 1.145zM2.42 2L2.825.872 1.223.3V2h1.198zM64.51 48.664l.429 1.118-.429-1.118zM11.365 36.501l-.379 1.136.38-1.136zm-9.988-2.484c-.302 6.194-.691 12.616-.032 18.398.662 5.797 2.394 11.133 6.48 15.056l1.658-1.728c-3.515-3.375-5.127-8.071-5.758-13.6-.632-5.543-.261-11.738.045-18.01l-2.393-.116zm36.026.058v34.812H39.8V34.075h-2.396zm0 34.808l-.097 34.052 2.395.007.098-34.052-2.396-.007zm-.906-9.152l.456 4.637.456 4.636 2.384-.234-.456-4.637c-.14-1.413-.278-2.826-.456-4.636l-2.384.234zm36.936 17.441c.376 5.868.262 12.132-.485 17.566-.755 5.495-2.13 9.915-4.106 12.301l1.844 1.528c2.432-2.935 3.87-7.94 4.635-13.503.773-5.626.887-12.055.503-18.045l-2.39.153zm-4.591 29.867c-2.701 3.26-7.195 6.062-12.67 8.396-5.452 2.325-11.763 4.14-17.977 5.487l.508 2.341c6.306-1.367 12.773-3.221 18.408-5.624 5.612-2.393 10.516-5.379 13.575-9.072l-1.844-1.528zm-33.922 1.772c-7.905-2.988-13.961-5.16-19.998-7.877l-.983 2.185c6.124 2.756 12.282 4.965 20.134 7.933l.847-2.241zm-19.998-7.877c-6.096-2.743-9.147-7.76-10.573-13.98-1.439-6.275-1.19-13.649-.732-20.88l-2.39-.15c-.456 7.21-.739 14.908.787 21.566 1.538 6.712 4.948 12.489 11.925 15.629l.983-2.185zm21.421-9.602l.967 11.705 2.387-.197-.967-11.705-2.387.197zm3.456-53c0-1.958.868-4.069 2.61-6.28 1.739-2.209 4.288-4.437 7.485-6.6 6.392-4.323 15.205-8.269 24.782-11.21l-.703-2.29c-9.73 2.988-18.777 7.022-25.421 11.516-3.321 2.247-6.083 4.635-8.025 7.102-1.94 2.462-3.124 5.083-3.124 7.762H39.8zm33.33-25.172c.226 4.305.374 11.051-.56 17.622-.943 6.632-2.95 12.79-6.794 16.215l1.593 1.788c4.517-4.023 6.615-10.93 7.572-17.666.967-6.799.81-13.725.58-18.085l-2.391.126zm-33.33 20.915c0-5.696-1.27-10.3-3.488-14.083-2.214-3.777-5.334-6.667-8.935-9.002C20.248 6.367 10.978 3.79 2.825.872l-.807 2.256c8.416 3.01 17.236 5.45 24.055 9.872 3.373 2.187 6.191 4.827 8.172 8.204 1.976 3.371 3.158 7.547 3.158 12.871H39.8zM1.223 2c0 2.972-.206 6.09-.331 9.335-.124 3.213-.166 6.506.187 9.68.708 6.382 3.028 12.398 9.524 16.459l1.27-2.031c-5.665-3.54-7.754-8.749-8.414-14.693-.331-2.99-.297-6.136-.174-9.322.122-3.154.334-6.396.334-9.428H1.223zm.996 65.18c1.28.219 4.14.969 7.721 2.243l.803-2.257C7.1 65.87 4.096 65.07 2.623 64.818L2.22 67.18zm7.721 2.243c5.123 1.822 11.582 4.667 16.847 8.428 5.307 3.79 9.148 8.328 9.556 13.477l2.388-.19c-.494-6.232-5.074-11.324-10.551-15.236-5.518-3.942-12.207-6.875-17.437-8.736l-.803 2.257zm-2.133-1.97l1.688 1.688 1.694-1.694L9.5 65.76l-1.694 1.694zm31.838 54.589c-.165-3.916-.372-7.474-.413-10.758l-2.395.03c.041 3.331.252 6.967.415 10.829l2.393-.101zm-.413-10.758c-.073-5.841.39-10.537 2.403-14.32L39.52 95.84c-2.315 4.351-2.757 9.573-2.683 15.475l2.395-.03zm-5.167-.236l3.537 1.368.864-2.234-3.537-1.368-.864 2.234zM64.073 82.09c6.053-2.679 9.135-8.644 10.617-15.411 1.485-6.785 1.43-14.651.982-21.584l-2.39.155c.443 6.873.48 14.467-.932 20.916-1.416 6.467-4.224 11.51-9.246 13.733l.969 2.19zm10.03-38.055c-2.256.741-4.995 1.65-7.944 2.732l.825 2.249c2.908-1.067 5.615-1.966 7.867-2.706l-.748-2.275zm-34.417 59.092c.365-2.294.978-4.339 1.949-6.163L39.52 95.84c-1.125 2.114-1.804 4.426-2.2 6.911l2.366.377zm1.949-6.163c1.23-2.312 3.816-4.81 7.578-7.327 3.737-2.5 8.525-4.948 14.014-7.203l-.91-2.215c-5.588 2.295-10.529 4.813-14.436 7.427-3.882 2.597-6.855 5.362-8.361 8.193l2.115 1.125zm21.592-14.53c.268-.11.537-.22.808-.328l-.894-2.223c-.276.112-.551.223-.825.336l.91 2.216zm-21.592 14.53c1.26-2.37 3.945-4.933 7.854-7.51 3.88-2.559 8.856-5.059 14.546-7.348l-.894-2.223c-5.789 2.33-10.918 4.899-14.971 7.571-4.026 2.655-7.108 5.487-8.65 8.385l2.115 1.125zm22.4-14.858a141.015 141.015 0 0110.947-3.866l-.707-2.288a143.425 143.425 0 00-11.134 3.931l.894 2.223zm-.931-2.207c-.244.108-.494.21-.75.305l.835 2.245c.3-.112.596-.232.884-.36l-.97-2.19zm-25.7-41.567v30.555h2.395V38.332h-2.396zm2.375 30.77c.768-4.196 4.135-7.95 8.928-11.248 4.759-3.275 10.706-5.953 16.232-8.072l-.858-2.236c-5.59 2.142-11.742 4.9-16.732 8.335-4.955 3.41-8.984 7.638-9.926 12.79l2.356.431zm25.16-19.32c.69-.264 1.373-.52 2.045-.766l-.825-2.25c-.682.251-1.376.51-2.078.78l.858 2.236zm0 0c3.676-1.409 7.14-2.56 9.912-3.472l-.748-2.275c-2.777.913-6.287 2.08-10.022 3.51l.858 2.237zm-28.442 9.95l.912 9.272 2.384-.234-.912-9.273-2.384.234zm3.302-21.4v-4.257h-2.396v4.257H39.8zm-.918 21.165c-.613-6.23-4.405-11.256-9.46-15.192-5.058-3.937-11.494-6.877-17.677-8.94l-.758 2.272c6.04 2.015 12.198 4.85 16.963 8.558 4.765 3.71 8.023 8.201 8.548 13.536l2.384-.234zM11.744 35.364a39.007 39.007 0 00-.129-.043l-.754 2.274.125.042.758-2.273zm-.129-.043a88.256 88.256 0 00-8.785-2.415l-.514 2.34a85.87 85.87 0 018.545 2.349l.754-2.274zm.13.043a88.226 88.226 0 00-8.915-2.458l-.514 2.34a85.845 85.845 0 018.67 2.39l.758-2.272zm27.487 75.92c-.038-2.999.065-5.708.454-8.157l-2.366-.377c-.42 2.643-.522 5.506-.483 8.564l2.395-.03z"></path>
				<circle cx="38.449" cy="110.998" r="3.154" fill="#F8F9FA" stroke="#DEE2E6" strokeWidth="1.597"></circle>
				<circle cx="38.449" cy="74.512" r="3.154" fill="#F8F9FA" stroke="#DEE2E6" strokeWidth="1.597"></circle>
				<circle cx="38.449" cy="41.371" r="3.154" fill="#F8F9FA" stroke="#DEE2E6" strokeWidth="1.597"></circle>
				<circle cx="64.595" cy="48.367" r="3.154" fill="#F8F9FA" stroke="#DEE2E6" strokeWidth="1.597"></circle>
				<circle cx="11.998" cy="69.041" r="3.154" fill="#F8F9FA" stroke="#DEE2E6" strokeWidth="1.597"></circle>
			</symbol>
			{ }
			<symbol xmlns="http://www.w3.org/2000/svg" id="icon_cevada_2" fill="none" viewBox="0 0 77 124">
				<path fill="#1A2E77" d="M40.577 96.402c-2.163 4.066-2.616 9.026-2.543 14.897.042 3.308.25 6.904.415 10.793 12.52-2.714 25.554-7.336 31.315-14.289 4.409-5.321 5.625-18.85 4.865-30.707a142.207 142.207 0 00-11.04 3.898c-11.48 4.62-20.208 10.139-23.012 15.408z"></path>
				<path fill="#1A2E77" d="M63.588 80.995c11.075-4.902 11.78-22.017 10.889-35.823-2.254.741-4.977 1.645-7.905 2.72-.678.248-1.366.505-2.062.772-11.116 4.261-24.199 10.874-25.91 20.223l-.097 34.052c.38-2.39 1.027-4.568 2.074-6.537 2.737-5.144 11.119-10.525 22.194-15.075.271-.112.544-.222.817-.332z"></path>
				<path fill="#1A2E77" d="M38.6 38.332v30.555c1.711-9.349 14.794-15.962 25.91-20.223.696-.267 1.384-.524 2.062-.773 8.36-7.448 8.209-26.129 7.753-34.794C55.019 19.026 38.6 29.06 38.6 38.332z"></path>
				<path fill="#1A2E77" d="M11.238 36.458l.127.043C23.588 40.579 36.552 48.05 37.69 59.614l.912 9.273V34.075C38.6 12.033 18.99 7.93 2.42 2c0 12.01-3.344 26.857 8.817 34.458z"></path>
				<path fill="#1A2E77" d="M37.689 59.614c-1.137-11.564-14.1-19.035-26.324-23.113a87.063 87.063 0 00-8.792-2.425c-.608 12.465-1.52 25.234 6.081 32.53l1.688 1.689c10.353 3.683 26.293 11.556 27.195 22.938l.966 11.706.098-34.052-.912-9.273z"></path>
				<path fill="#1A2E77" d="M14.43 102.026c6.081 2.737 12.188 4.928 20.067 7.905l3.537 1.368c-.038-3.028.065-5.814.47-8.36l-.967-11.706c-.902-11.382-16.842-19.255-27.195-22.939C6.73 67.01 3.798 66.234 2.422 66 1.508 80.44 1.356 96.143 14.43 102.026z"></path>
				<path fill="#04134C" d="M74.477 45.172l1.195-.077-.1-1.544-1.47.484.375 1.138zM38.503 102.94l1.183.188-1.183-.188zm-.814-43.325l1.192-.117-1.192.117zM2.573 34.075l.257-1.17-1.384-.304-.069 1.416 1.196.058zm6.081 32.532l.847-.847-.009-.009-.009-.008-.829.864zm29.795 55.485l-1.197.051.06 1.421 1.39-.301-.253-1.171zm2.128-25.69l-1.057-.563 1.057.563zM74.63 77.096l1.195-.077-.097-1.516-1.452.448.353 1.145zm-4.865 30.707l.922.764-.922-.764zm-35.267 2.128l.432-1.117-.009-.003-.423 1.12zm-20.066-7.905l.491-1.092-.491 1.092zM2.42 65.999l.203-1.18-1.314-.226-.084 1.33L2.421 66zm35.116 25.234l-1.194.095v.004l1.194-.099zm36.788-78.136l1.196-.063-.081-1.532-1.467.45.352 1.145zM2.42 2L2.825.872 1.223.3V2h1.198zM64.51 48.664l.429 1.118-.429-1.118zM11.365 36.501l-.379 1.136.38-1.136zm-9.988-2.484c-.302 6.194-.691 12.616-.032 18.398.662 5.797 2.394 11.133 6.48 15.056l1.658-1.728c-3.515-3.375-5.127-8.071-5.758-13.6-.632-5.543-.261-11.738.045-18.01l-2.393-.116zm36.026.058v34.812H39.8V34.075h-2.396zm0 34.808l-.097 34.052 2.395.007.098-34.052-2.396-.007zm-.906-9.152l.456 4.637.456 4.636 2.384-.234-.456-4.637c-.14-1.413-.278-2.826-.456-4.636l-2.384.234zm36.936 17.441c.376 5.868.262 12.132-.485 17.566-.755 5.495-2.13 9.915-4.106 12.301l1.844 1.528c2.432-2.935 3.87-7.94 4.635-13.503.773-5.626.887-12.055.503-18.045l-2.39.153zm-4.591 29.867c-2.701 3.26-7.195 6.062-12.67 8.396-5.452 2.325-11.763 4.14-17.977 5.487l.508 2.341c6.306-1.367 12.773-3.221 18.408-5.624 5.612-2.393 10.516-5.379 13.575-9.072l-1.844-1.528zm-33.922 1.772c-7.905-2.988-13.961-5.16-19.998-7.877l-.983 2.185c6.124 2.756 12.282 4.965 20.134 7.933l.847-2.241zm-19.998-7.877c-6.096-2.743-9.147-7.76-10.573-13.98-1.439-6.275-1.19-13.649-.732-20.88l-2.39-.15c-.456 7.21-.739 14.908.787 21.566 1.538 6.712 4.948 12.489 11.925 15.629l.983-2.185zm21.421-9.602l.967 11.705 2.387-.197-.967-11.705-2.387.197zm3.456-53c0-1.958.868-4.069 2.61-6.28 1.739-2.209 4.288-4.437 7.485-6.6 6.392-4.323 15.205-8.269 24.782-11.21l-.703-2.29c-9.73 2.988-18.777 7.022-25.421 11.516-3.321 2.247-6.083 4.635-8.025 7.102-1.94 2.462-3.124 5.083-3.124 7.762H39.8zm33.33-25.172c.226 4.305.374 11.051-.56 17.622-.943 6.632-2.95 12.79-6.794 16.215l1.593 1.788c4.517-4.023 6.615-10.93 7.572-17.666.967-6.799.81-13.725.58-18.085l-2.391.126zm-33.33 20.915c0-5.696-1.27-10.3-3.488-14.083-2.214-3.777-5.334-6.667-8.935-9.002C20.248 6.367 10.978 3.79 2.825.872l-.807 2.256c8.416 3.01 17.236 5.45 24.055 9.872 3.373 2.187 6.191 4.827 8.172 8.204 1.976 3.371 3.158 7.547 3.158 12.871H39.8zM1.223 2c0 2.972-.206 6.09-.331 9.335-.124 3.213-.166 6.506.187 9.68.708 6.382 3.028 12.398 9.524 16.459l1.27-2.031c-5.665-3.54-7.754-8.749-8.414-14.693-.331-2.99-.297-6.136-.174-9.322.122-3.154.334-6.396.334-9.428H1.223zm.996 65.18c1.28.219 4.14.969 7.721 2.243l.803-2.257C7.1 65.87 4.096 65.07 2.623 64.818L2.22 67.18zm7.721 2.243c5.123 1.822 11.582 4.667 16.847 8.428 5.307 3.79 9.148 8.328 9.556 13.477l2.388-.19c-.494-6.232-5.074-11.324-10.551-15.236-5.518-3.942-12.207-6.875-17.437-8.736l-.803 2.257zm-2.133-1.97l1.688 1.688 1.694-1.694L9.5 65.76l-1.694 1.694zm31.838 54.589c-.165-3.916-.372-7.474-.413-10.758l-2.395.03c.041 3.331.252 6.967.415 10.829l2.393-.101zm-.413-10.758c-.073-5.841.39-10.537 2.403-14.32L39.52 95.84c-2.315 4.351-2.757 9.573-2.683 15.475l2.395-.03zm-5.167-.236l3.537 1.368.864-2.234-3.537-1.368-.864 2.234zM64.073 82.09c6.053-2.679 9.135-8.644 10.617-15.411 1.485-6.785 1.43-14.651.982-21.584l-2.39.155c.443 6.873.48 14.467-.932 20.916-1.416 6.467-4.224 11.51-9.246 13.733l.969 2.19zm10.03-38.055c-2.256.741-4.995 1.65-7.944 2.732l.825 2.249c2.908-1.067 5.615-1.966 7.867-2.706l-.748-2.275zm-34.417 59.092c.365-2.294.978-4.339 1.949-6.163L39.52 95.84c-1.125 2.114-1.804 4.426-2.2 6.911l2.366.377zm1.949-6.163c1.23-2.312 3.816-4.81 7.578-7.327 3.737-2.5 8.525-4.948 14.014-7.203l-.91-2.215c-5.588 2.295-10.529 4.813-14.436 7.427-3.882 2.597-6.855 5.362-8.361 8.193l2.115 1.125zm21.592-14.53c.268-.11.537-.22.808-.328l-.894-2.223c-.276.112-.551.223-.825.336l.91 2.216zm-21.592 14.53c1.26-2.37 3.945-4.933 7.854-7.51 3.88-2.559 8.856-5.059 14.546-7.348l-.894-2.223c-5.789 2.33-10.918 4.899-14.971 7.571-4.026 2.655-7.108 5.487-8.65 8.385l2.115 1.125zm22.4-14.858a141.015 141.015 0 0110.947-3.866l-.707-2.288a143.425 143.425 0 00-11.134 3.931l.894 2.223zm-.931-2.207c-.244.108-.494.21-.75.305l.835 2.245c.3-.112.596-.232.884-.36l-.97-2.19zm-25.7-41.567v30.555h2.395V38.332h-2.396zm2.375 30.77c.768-4.196 4.135-7.95 8.928-11.248 4.759-3.275 10.706-5.953 16.232-8.072l-.858-2.236c-5.59 2.142-11.742 4.9-16.732 8.335-4.955 3.41-8.984 7.638-9.926 12.79l2.356.431zm25.16-19.32c.69-.264 1.373-.52 2.045-.766l-.825-2.25c-.682.251-1.376.51-2.078.78l.858 2.236zm0 0c3.676-1.409 7.14-2.56 9.912-3.472l-.748-2.275c-2.777.913-6.287 2.08-10.022 3.51l.858 2.237zm-28.442 9.95l.912 9.272 2.384-.234-.912-9.273-2.384.234zm3.302-21.4v-4.257h-2.396v4.257H39.8zm-.918 21.165c-.613-6.23-4.405-11.256-9.46-15.192-5.058-3.937-11.494-6.877-17.677-8.94l-.758 2.272c6.04 2.015 12.198 4.85 16.963 8.558 4.765 3.71 8.023 8.201 8.548 13.536l2.384-.234zM11.744 35.364a39.007 39.007 0 00-.129-.043l-.754 2.274.125.042.758-2.273zm-.129-.043a88.256 88.256 0 00-8.785-2.415l-.514 2.34a85.87 85.87 0 018.545 2.349l.754-2.274zm.13.043a88.226 88.226 0 00-8.915-2.458l-.514 2.34a85.845 85.845 0 018.67 2.39l.758-2.272zm27.487 75.92c-.038-2.999.065-5.708.454-8.157l-2.366-.377c-.42 2.643-.522 5.506-.483 8.564l2.395-.03z"></path>
				<circle cx="38.449" cy="110.998" r="3.154" fill="#1A2E77" stroke="#04134C" strokeWidth="1.597"></circle>
				<circle cx="38.449" cy="74.512" r="3.154" fill="#1A2E77" stroke="#04134C" strokeWidth="1.597"></circle>
				<circle cx="38.449" cy="41.371" r="3.154" fill="#1A2E77" stroke="#04134C" strokeWidth="1.597"></circle>
				<circle cx="64.595" cy="48.367" r="3.154" fill="#1A2E77" stroke="#04134C" strokeWidth="1.597"></circle>
				<circle cx="11.998" cy="69.041" r="3.154" fill="#1A2E77" stroke="#04134C" strokeWidth="1.597"></circle>
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" id="icon_lista_cardapio" fill="none" viewBox="0 0 24 24">
				<path stroke="#1A2E77" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a3 3 0 003-3V8.372a3 3 0 00-.879-2.122L16.75 3.88A3 3 0 0014.628 3H7a3 3 0 00-3 3v12a3 3 0 003 3z" clipRule="evenodd"></path>
				<path stroke="#1A2E77" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 17H8M16 13.5H8M11 10H8M20 8.5h-3.5a2 2 0 01-2-2V3"></path>
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" id="icon_pencil" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.293 15.619L15.619 5.293a1 1 0 011.413 0l1.676 1.676a1 1 0 010 1.413L8.381 18.707a.995.995 0 01-.706.293H5v-2.675c0-.265.105-.519.293-.706z" clipRule="evenodd"></path>
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 7.16l3.09 3.09"></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon_add"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					fill="#314385"
					d="M10 17.5A7.5 7.5 0 012.5 10 7.5 7.5 0 0110 2.5a7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-7.5 7.5z"
				></path>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10 6.667v6.666M13.332 10H6.666"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon_cardapio_direcionado"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414v0z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M19 8h-4a1 1 0 01-1-1V3"
				></path>
			</symbol>

			<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon_save">
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				>
					<path d="M19 21H5.1v-.001c-1.1 0-2-.89-2-1.99l-.11-14-.01-.01a2 2 0 011.98-2.02c0-.01 0-.01.01-.01h11.17v-.001c.53-.01 1.03.21 1.41.58l2.82 2.82-.01-.01c.37.37.58.88.58 1.41v11.17h0c0 1.1-.9 1.99-2 1.99-.01 0-.01-.01-.01-.01z"></path>
					<path d="M15.993 3v4-.01c-.01.55-.45.99-1 1h-6l-.01-.001c-.56-.01-1-.45-1-1v-4M12 12a2.5 2.5 0 100 5 2.5 2.5 0 100-5z"></path>
				</g>
				<path fill="none" d="M0 0h24v24H0z"></path>
			</symbol>

			<symbol xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id="icon_design">
				<g fill='none'>
					<path d='M0 0h24v24H0V0z'></path>
					<path
						stroke='#f4a155'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M12 9.5v3.25a1.75 1.75 0 01-1.75 1.75v0a1.75 1.75 0 01-1.75-1.75V9.5'
					></path>
					<path
						stroke='#f4a155'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M15 9.5L15 14.5'
					></path>
					<path
						stroke='#f4a155'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M16 21H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5z'
					></path>
				</g>
			</symbol>

			<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="icon_arrow_left">
				<path
					stroke="#003863"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.25"
					d="M3.342 9.983h12.491M8.344 4.99L3.335 10l5.01 5.01"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 20"
				id="icon_date"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13.333 1.667V5M6.667 1.667V5M2.5 7.5h15"
				></path>
				<path
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.833 3.333H4.167C3.246 3.333 2.5 4.08 2.5 5v10.833c0 .921.746 1.667 1.667 1.667h11.666c.921 0 1.667-.746 1.667-1.667V5c0-.92-.746-1.667-1.667-1.667z"
					clipRule="evenodd"
				></path>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M5.844 10.607a.208.208 0 10.002.416.208.208 0 00-.002-.416M10.011 10.607a.208.208 0 10.002.416.208.208 0 00-.002-.416M14.178 10.607a.208.208 0 10.002.417.208.208 0 00-.002-.417M5.844 13.94a.208.208 0 10.002.416.208.208 0 00-.002-.415M10.011 13.94a.208.208 0 10.002.416.208.208 0 00-.002-.415"
				></path>
			</symbol>

			{/* HEADER MOBILE */}
			<symbol
				id="arrow_left_mobile_header"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 16 12"
			>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M1 6h14M6 1L1 6M6 11L1 6"
				></path>
			</symbol>
			{/* END HEADER MOBILE */}

			{/*
			Search INPUT MOBILE
		*/}
			<symbol
				xmlns="http://www.w3.org/2000/svg"

				id="search_icon"

				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="var(--cor-1, #868E96)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13.095 5.699a5.23 5.23 0 11-7.397 7.396 5.23 5.23 0 017.397-7.396M15.833 15.833l-2.741-2.741"
				></path>
			</symbol>
			{/* END SEARCH INPUT MOBILE */}

			{/* ICON DE CONFIG  */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				id="config_icon"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18 5h3M3 5h11M10 12h11M3 12h3M18 19h3M3 19h11M17.414 3.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M9.414 10.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M17.414 17.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828"
				></path>
			</symbol>
			{/* END ICON DE CONFIG */}

			{/* ICON FAVORITE */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				height="15"
				id="favorite-icon"
				fill="none"
				viewBox="0 0 17 15"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.219"
					d="M11.316 1c2.58 0 4.309 2.421 4.309 4.676 0 4.577-7.182 8.324-7.313 8.324C8.182 14 1 10.253 1 5.676 1 3.42 2.73 1 5.31 1c1.474 0 2.443.735 3.003 1.39C8.873 1.735 9.84 1 11.314 1z"
					clipRule="evenodd"
				></path>
			</symbol>

			{/* END ICON FAVORITE */}

			{/* ICON FAVORITE WITH FILL */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				height="15"
				id="favorite-icon-fill"
				fill="#1A2E77"
				viewBox="0 0 17 15"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.219"
					d="M11.316 1c2.58 0 4.309 2.421 4.309 4.676 0 4.577-7.182 8.324-7.313 8.324C8.182 14 1 10.253 1 5.676 1 3.42 2.73 1 5.31 1c1.474 0 2.443.735 3.003 1.39C8.873 1.735 9.84 1 11.314 1z"
					clipRule="evenodd"
				></path>
			</symbol>

			{/* ICON FAVORITE WITH FILL END */}

			{/* FAVORITE BIG */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				id="favorite-big-icon"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.696 4C18.871 4 21 6.98 21 9.755 21 15.388 12.161 20 12 20c-.161 0-9-4.612-9-10.245C3 6.98 5.129 4 8.304 4c1.815 0 3.007.905 3.696 1.711C12.689 4.905 13.881 4 15.696 4z"
					clipRule="evenodd"
				></path>
			</symbol>
			{/* END FAVORITE BIG */}

			{/* FAVORITE BIG WITH FILL */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				id="favorite-big-icon-fill"
				height="24"
				fill="#1A2E77"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.696 4C18.871 4 21 6.98 21 9.755 21 15.388 12.161 20 12 20c-.161 0-9-4.612-9-10.245C3 6.98 5.129 4 8.304 4c1.815 0 3.007.905 3.696 1.711C12.689 4.905 13.881 4 15.696 4z"
					clipRule="evenodd"
				></path>
			</symbol>
			{/* FAVORITE BIG WITH FILL END */}

			{/* ICON ADD */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				id="icon-add"
				height="16"
				fill="none"
				viewBox="0 0 17 16"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M11 8H5.667m2.666-2.667v5.334m0 3.333a6 6 0 110-12 6 6 0 010 12z"
				></path>
			</symbol>

			{/* ICON ADD END */}

			{/* ICON REMOVE AMOUNT */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				id="icon-remove"
				height="16"
				fill="none"
				viewBox="0 0 16 16"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.667 8H5.333M8 14A6 6 0 118 2a6 6 0 010 12z"
				></path>
			</symbol>
			{/* ICON REMOVE AMOUNT END */}

			{/* ICON CLOSE  */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-close-pedidos"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18 6L6 18M6 6l12 12"
				></path>
			</symbol>
			{/* ICON CLOSE END */}

			{/* CHECK SEND */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-check-mobile"
				fill="none"
				viewBox="0 0 42 41"
			>
				<path
					stroke="#1CC066"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2.516"
					d="M19.71 24.066l-3.74-3.806M26.053 17.832l-6.344 6.234"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1CC066"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2.516"
					d="M20.867 35.4c-8.337-.073-15.036-6.89-14.963-15.227v0c.072-8.337 6.89-15.037 15.227-14.964v0c8.337.073 15.036 6.89 14.963 15.227v0c-.072 8.337-6.89 15.037-15.227 14.964v0z"
					clipRule="evenodd"
				></path>
			</symbol>
			{/* END CHECK SEND */}
			{/* CONTROLE DE ROTATIVIDADE */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-func-controle-rotatividade"

				fill="none"
				viewBox="0 0 40 40"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M33.333 33.333v-1.25A7.083 7.083 0 0026.25 25h-12.5a7.083 7.083 0 00-7.083 7.083v1.25"
				></path>
				<ellipse
					cx="20"
					cy="11.667"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					rx="6.667"
					ry="6.667"
				></ellipse>
			</symbol>
			{ }
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-porcentage-controle-rotatividade"
				fill="none"
				viewBox="0 0 40 40"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4.993 9.162v5.002h5.002M5.09 21.667a14.987 14.987 0 101.08-7.503M16.663 23.335l6.67-6.67"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M23.751 23.543a.208.208 0 11-.417 0 .208.208 0 01.417 0M16.248 16.457a.208.208 0 11.417 0 .208.208 0 01-.417 0"
				></path>
			</symbol>
			{ }

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-time-controle-rotatividade"
				fill="none"
				viewBox="0 0 40 40"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M22.388 5.112c7.53 1.269 12.902 7.994 12.477 15.617a14.992 14.992 0 01-14.134 14.135A14.992 14.992 0 015.113 22.387M5.112 17.388c.156-.928.4-1.84.728-2.723M10.328 8.33a14.896 14.896 0 00-1.998 1.998M17.388 5.112c-.929.156-1.84.4-2.723.73"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13.333 20.833h7.5v-9.166"
				></path>
			</symbol>7
			{ }
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-wallet-controle-rotatividade"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M17.002 6.998v-1a2 2 0 00-2-2.001H5.498a2.501 2.501 0 00-2.501 2.5v12.006a2.501 2.501 0 002.5 2.5h13.006a2.501 2.501 0 002.501-2.5V8.999a2 2 0 00-2-2.001H2.996M17.002 14.001h-2"
				></path>
			</symbol>

			{/* END CONTROLE DE ROTATIVIDADE */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-checklist-analise-desempenho"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="var(--cor-1, #000)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M5.5 3h13A1.5 1.5 0 0120 4.5v15a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 19.5v-15A1.5 1.5 0 015.5 3M12.632 16.5h4"
				></path>
				<path
					stroke="var(--cor-1, #000)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7.5 16.256l.664.596 1.336-1.2M12.632 12.5h4M9 7h6M7.5 12.255l.664.597 1.336-1.2"
				></path>
			</symbol>
			{/* ESCALA - OPERACIONAL */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-tasks-escala-operacional"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9 18h3M3 18l1 1 2-2M9 11.5h3M3 11.5l1 1 2-2M9 5h3M3 5l1 1 2-2"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16 17.167a3.5 3.5 0 00.7 2.1l1 1.333a1 1 0 001.6 0l1.033-1.378a3.333 3.333 0 00.667-2V5.5A2.5 2.5 0 0018.5 3v0A2.5 2.5 0 0016 5.5v11.667z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16 8h5"
				></path>
			</symbol>

			{/* GESTAO DE PRODUÇÃO  */}

			{/* ESTOQUE */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				// width="18"
				// height="18"
				id="icon-eggs"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9.99 15.753a3.835 3.835 0 01-3.991-3.658 3.835 3.835 0 013.99-3.658c3.184 0 5.764 1.638 5.764 3.658s-2.58 3.658-5.764 3.658z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M6.066 12.744a4.134 4.134 0 01-3.82-4.292c0-3.429 1.764-6.205 3.94-6.205s3.939 2.769 3.939 6.198"
				></path>
			</symbol>

			<symbol
				id="icon-milk"
				xmlns="http://www.w3.org/2000/svg"
				// width="18"
				// height="18"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7.874 1.497h2.251c.622 0 1.126.504 1.126 1.125v.375a.75.75 0 01-.75.75H7.499a.75.75 0 01-.75-.75v-.375c0-.621.504-1.125 1.125-1.125z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12.751 9.375c-1.2.5-2.55.5-3.751 0-1.2-.5-2.552-.5-3.752 0"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7.476 3.743a2.243 2.243 0 01-.608 1.328l-.778.806a3.001 3.001 0 00-.842 2.084v6.291a1.5 1.5 0 001.5 1.5h4.503a1.5 1.5 0 001.5-1.5v-6.29c0-.778-.302-1.526-.842-2.085l-.777-.806a2.243 2.243 0 01-.609-1.328"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-download"
				// width="32"
				// height="32"
				fill="none"
				viewBox="0 0 32 32"
			>
				<rect width="32" height="32" fill="#E8EAF1" rx="4"></rect>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M19.557 15.11L16 18.669l-3.558-3.557M16 7.997v10.671"
				></path>
				<path
					fill="#1A2E77"
					d="M24.754 20.446a.75.75 0 00-1.5 0h1.5zm-16.007 0a.75.75 0 00-1.5 0h1.5zm14.507 0a2.807 2.807 0 01-2.808 2.807v1.5a4.307 4.307 0 004.308-4.307h-1.5zm-2.808 2.807h-8.891v1.5h8.891v-1.5zm-8.891 0a2.808 2.808 0 01-2.808-2.807h-1.5a4.308 4.308 0 004.308 4.307v-1.5z"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-edit"
				// width="32"
				// height="32"
				fill="none"
				viewBox="0 0 32 32"
			>
				<rect width="32" height="32" fill="#E8EAF1" rx="4"></rect>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9.293 19.619L19.619 9.293a1 1 0 011.413 0l1.676 1.676a1 1 0 010 1.413L12.381 22.707a.995.995 0 01-.706.293H9v-2.675c0-.265.105-.519.293-.706z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M17.75 11.16l3.09 3.09"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-search-estoque"
				// width="32"
				// height="32"
				fill="none"
				viewBox="0 0 32 32"
			>
				<rect width="32" height="32" fill="#E8EAF1" rx="4"></rect>
				<circle
					cx="15.059"
					cy="15.059"
					r="7.062"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M24.003 24.003l-3.951-3.951"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-estoque"
				// width="24"
				// height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21.004 8.087v10.916a2 2 0 01-2.001 2H4.997a2 2 0 01-2-2V8.087c-.001-.271.054-.54.16-.789l1.32-3.09a2 2 0 011.84-1.212h11.365a2 2 0 011.84 1.215l1.32 3.087c.107.25.162.518.162.79z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M2.996 7.998h17.998M14.001 2.996l1 5.002v3.227a.821.821 0 01-.86.775H9.86a.821.821 0 01-.86-.775V7.998l1-5.002M5.998 18.003h2"
				></path>
			</symbol>

			<symbol id="icon-checklist-previsao-estoque" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M8 4L9.3 2.375C9.49 2.138 9.777 2 10.081 2H13.92C14.224 2 14.511 2.138 14.701 2.375L16 4V4V5C16 5.552 15.552 6 15 6H9C8.448 6 8 5.552 8 5V4V4H8Z" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 17H10" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 9H16" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 13H12" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M15.355 21H6C4.895 21 4 20.105 4 19V6C4 4.895 4.895 4 6 4H8" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M16 4H18C19.105 4 20 4.895 20 6V14.537" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M19.7787 17.111L17.5567 19.333L16.2227 18" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M18 22C15.791 22 14 20.209 14 18C14 15.791 15.791 14 18 14C20.21 14 22 15.791 22 18C22 20.209 20.21 22 18 22" stroke="#1A2E77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</symbol>

			{/* FIM ESTOQUE */}

			{/* MATERIA PRIMA */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-cerva-title"
				// width="25"
				// height="26"
				fill="none"
				viewBox="0 0 25 26"
			>
				<circle
					cx="12.005"
					cy="13"
					r="9.004"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12.005 13.167a3.501 3.501 0 013.501-3.501M12.005 17.436a3.501 3.501 0 013.501-3.501M12.005 17.436a3.501 3.501 0 00-3.501-3.501M12.005 13.167a3.501 3.501 0 00-3.501-3.501M12.005 22.004V7.998"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.507 8.498v7.003a3.501 3.501 0 01-3.502 3.502v0A3.501 3.501 0 018.504 15.5V8.498"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-kitchen"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10 2.497v0a2.251 2.251 0 012.25 2.25v0H7.75v0A2.25 2.25 0 0110 2.498z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16.002 6.999v8.253a1.5 1.5 0 01-1.5 1.5H5.497a1.5 1.5 0 01-1.5-1.5V7M3.997 7.75h12.005M16.002 6.999v0a2.251 2.251 0 00-2.25-2.251H6.247a2.25 2.25 0 00-2.25 2.25v0"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16.002 7.75h1.125c.622 0 1.126.503 1.126 1.125v0c0 .621-.504 1.125-1.126 1.125h-1.125V7.75zM2.872 7.75h1.125V10H2.872a1.125 1.125 0 01-1.126-1.125v0c0-.622.504-1.126 1.126-1.126z"
					clipRule="evenodd"
				></path>
				<circle
					cx="10"
					cy="12.251"
					r="2.251"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10 10v2.25"
				></path>
			</symbol>
			{''}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-pen-edit"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4.411 13.016l8.605-8.605a.833.833 0 011.178 0l1.396 1.396a.833.833 0 010 1.178l-8.606 8.604a.83.83 0 01-.588.244H4.167v-2.229a.83.83 0 01.244-.588z"
					clipRule="evenodd"
				></path>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M11.458 5.967l2.575 2.575"
				></path>
			</symbol>

			{/*  */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-folder-delete"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="#EC3539"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12.501 15.836h3.335c.92 0 1.667-.747 1.667-1.668V6.615c0-.92-.746-1.667-1.667-1.667h-5.395a.834.834 0 01-.69-.367l-1.168-1.72a.834.834 0 00-.691-.364H4.164c-.92 0-1.667.746-1.667 1.667v4.169M7.047 12.954L5.45 14.549M5.451 12.954l1.596 1.595"
				></path>
				<path
					stroke="#EC3539"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10 13.752a3.752 3.752 0 11-7.503 0 3.752 3.752 0 017.503 0"
				></path>
			</symbol>
			{''}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-embalagem"
				fill="none"
				viewBox="0 0 25 26"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M19.008 10.499H5.01M13.006 23.004V10.666c0-.433.14-.854.4-1.2l2.601-3.469"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16.006 5.997l2.602 3.468a2 2 0 01.4 1.2v10.338a2 2 0 01-2.001 2.001H7.003a2 2 0 01-2.001-2V10.665a2 2 0 01.4-1.2l2.601-3.469v-2a1 1 0 011-1.001h6.003a1 1 0 011 1v2.001z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16.006 5.997H8.003"
				></path>
			</symbol>
			{''}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-subtract"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="#868E96"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.833 10H4.166"
				></path>
			</symbol>
			{''}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-add-qtd"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="#868E96"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10 15.833V4.167M15.833 10H4.166"
				></path>
			</symbol>

			{''}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-calendar"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16 2v4M8 2v4M3 9h18"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M19 4H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7.013 12.729a.25.25 0 10.002.5.25.25 0 00-.002-.5M12.013 12.729a.25.25 0 10.002.5.25.25 0 00-.002-.5M17.013 12.729a.25.25 0 10.002.5.25.25 0 00-.002-.5M7.013 16.729a.25.25 0 10.002.5.25.25 0 00-.002-.5M12.013 16.729a.25.25 0 10.002.5.25.25 0 00-.002-.5"
				></path>
			</symbol>

			{/* LIST E ADD SIDEMENU */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-list-sidemenu"
				fill="none"
				viewBox="0 0 22 22"
			>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeOpacity="0.5"
					strokeWidth="1.5"
					d="M8.499 6.364h9.17M17.67 11h-7.503M11.834 15.636h5.836M4.748 5.947a.417.417 0 100 .833.417.417 0 000-.833M6.415 10.583a.417.417 0 100 .834.417.417 0 000-.834M8.083 15.219a.417.417 0 100 .834.417.417 0 000-.834"
				></path>
			</symbol>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="icon-add-sidemenu"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeOpacity="0.5"
					strokeWidth="1.5"
					d="M10 15.833V4.167M15.833 10H4.166"
				></path>
			</svg>
			{/* END LIST E ADD SIDEMENU */}

			{/* COLABORADORES - GESTAO PESSOAS */}

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-title-func"
				fill="none"
				viewBox="0 0 25 26"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4.5 22.004h15.007a1.5 1.5 0 001.5-1.5v-3.002a1.5 1.5 0 00-1.5-1.5H4.5A1.5 1.5 0 003 17.502v3.001a1.5 1.5 0 001.5 1.501z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M19.04 7.054l-1.913 1.914-1.15-1.147M11.003 4.997H4.501A1.5 1.5 0 003 6.497V9.5a1.5 1.5 0 001.5 1.5h6.503"
				></path>
				<circle
					cx="17.506"
					cy="7.998"
					r="4.502"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-camera"
				fill="none"
				viewBox="0 0 25 24"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.086 4.586l1.121 1.121a1 1 0 00.707.293H19.5a2 2 0 012 2v9a2 2 0 01-2 2h-14a2 2 0 01-2-2V8a2 2 0 012-2h2.586a1 1 0 00.707-.293l1.121-1.121A2 2 0 0111.328 4h2.344a2 2 0 011.414.586z"
					clipRule="evenodd"
				></path>
				<circle
					cx="12.5"
					cy="12"
					r="4"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18.55 9a.05.05 0 11-.1 0 .05.05 0 01.1 0M11 12a1.5 1.5 0 011.5-1.5"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-cerva-mobile"
				fill="none"
				viewBox="0 0 37 59"
			>
				<path
					fill="#D1D5E4"
					d="M19.308 45.8c-1.027 1.93-1.242 4.284-1.207 7.07.02 1.57.119 3.277.197 5.123 5.942-1.289 12.127-3.482 14.861-6.782 2.092-2.525 2.67-8.945 2.308-14.573a67.503 67.503 0 00-5.239 1.85c-5.448 2.193-9.59 4.812-10.92 7.313z"
				></path>
				<path
					fill="#D1D5E4"
					d="M30.228 38.489c5.256-2.326 5.59-10.449 5.167-17-1.069.351-2.361.78-3.751 1.29-.321.118-.648.24-.978.366-5.276 2.023-11.485 5.16-12.296 9.598l-.047 16.16c.18-1.134.488-2.168.985-3.102 1.298-2.442 5.276-4.995 10.532-7.155l.388-.157z"
				></path>
				<path
					fill="#D1D5E4"
					d="M18.37 18.242v14.5c.811-4.436 7.02-7.574 12.296-9.596.33-.127.657-.25.978-.367 3.968-3.535 3.896-12.4 3.68-16.513C26.16 9.08 18.37 13.841 18.37 18.242zM5.384 17.353l.06.02c5.801 1.936 11.953 5.48 12.493 10.969l.433 4.4v-16.52C18.37 5.762 9.063 3.814 1.2 1c0 5.7-1.587 12.746 4.184 16.353z"
				></path>
				<path
					fill="#D1D5E4"
					d="M17.937 28.342c-.54-5.488-6.692-9.033-12.493-10.969l-.06-.02a41.301 41.301 0 00-4.112-1.13C.983 22.137.551 28.197 4.158 31.66l.8.8c4.914 1.748 12.479 5.485 12.907 10.887l.458 5.555.047-16.16-.433-4.401z"
				></path>
				<path
					fill="#D1D5E4"
					d="M6.9 48.47c2.885 1.298 5.783 2.338 9.522 3.751l1.679.65c-.018-1.438.03-2.76.222-3.968l-.458-5.555c-.428-5.402-7.993-9.139-12.906-10.886-1.714-.61-3.106-.978-3.759-1.09C.767 38.225.695 45.678 6.9 48.47z"
				></path>
				<path
					stroke="#E8EAF1"
					strokeWidth="1.137"
					d="M35.395 21.488c.423 6.552.089 14.675-5.167 17m5.167-17c-1.069.352-2.361.78-3.751 1.29m3.751-1.29c-1.316.433-2.971.983-4.73 1.657m-.825 15.501c-5.256 2.16-9.234 4.713-10.532 7.154m10.532-7.154l.388-.157m-.388.157c.133-.049.262-.102.388-.157M18.37 16.222v16.52m0-16.52C18.37 5.762 9.063 3.814 1.2 1c0 5.7-1.587 12.746 4.184 16.353m12.986-1.13v2.02m-.047 30.66l.047-16.16m-.047 16.16l-.458-5.555c-.428-5.402-7.993-9.139-12.906-10.886m13.364 16.44c.18-1.133.488-2.167.985-3.102m-.985 3.103c-.192 1.208-.24 2.53-.222 3.967m-.164-24.528l.433 4.4m-.433-4.4l.433 4.4m-.433-4.4c-.54-5.488-6.692-9.033-12.493-10.969m-4.172-1.15C.983 22.137.551 28.197 4.158 31.66l.8.8M1.273 16.223c1.29.284 2.69.659 4.112 1.13m-4.112-1.13c1.308.287 2.73.67 4.172 1.151m12.926 15.37v-14.5m0 14.5c.811-4.437 7.02-7.575 12.296-9.598M19.308 45.8c-1.027 1.93-1.242 4.284-1.207 7.07m1.207-7.07c1.33-2.5 5.472-5.12 10.92-7.311M18.37 18.242c0-4.4 7.791-9.162 16.953-11.976.217 4.113.289 12.978-3.68 16.513m0 0c-.32.118-.647.24-.977.366M5.384 17.353l.06.02m-.06-.02v0zM4.96 32.46c-1.714-.61-3.106-.977-3.759-1.089C.767 38.225.695 45.678 6.9 48.47c2.885 1.298 5.783 2.338 9.522 3.751l1.679.65m0 0c.02 1.569.119 3.276.197 5.122 5.942-1.289 12.127-3.482 14.861-6.782 2.092-2.525 2.67-8.945 2.308-14.573a67.503 67.503 0 00-5.239 1.85"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-shopping"
				fill="none"
				viewBox="0 0 121 120"
			>
				<path
					stroke="#D1D5E4"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
					d="M50.5 65l10 10m0 0l10 10m-10-10l-10 10m10-10l10-10m19.2 40H31.3c-5.825 0-10.415-4.96-9.97-10.765l3.815-49.615c.2-2.61 2.37-4.62 4.985-4.62h60.74a4.997 4.997 0 014.985 4.615L99.67 94.23c.45 5.81-4.145 10.77-9.97 10.77z"
				></path>
				<path
					stroke="#D1D5E4"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
					d="M40.5 40v-5 0c0-11.045 8.955-20 20-20v0c11.045 0 20 8.955 20 20v5"
				></path>
			</symbol>

			{/* Administrativo */}
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 34 34"
				id="icon-despesa-title"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18.31 19.668h10.03a2 2 0 002-2.001V9.663a2 2 0 00-2-2H15a2 2 0 00-2 2v8.67M20.254 12.25a2 2 0 012.83 2.83M13 11.664H9.941c-.62 0-1.234.145-1.79.422l-.78.39c-.68.341-1.25.868-1.642 1.521l-2.068 3.447"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4.996 29.005l7.686-2.777a5.336 5.336 0 002.626-2.058l3.992-5.987c.58-.87.466-2.03-.274-2.77v0a2.195 2.195 0 00-3.105 0L13 18.333h-2.667"
				></path>
			</symbol>
			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-check-table"
				fill="none"
				viewBox="0 0 32 32"
			>
				<rect width="32" height="32" fill="#E8EAF1" rx="4"></rect>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M24 10.5l-11 11-5-5"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-title-contasApagar"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#2E4C7A"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M22.004 17.002v-3c0-.83-1.68-1.502-3.751-1.502-2.071 0-3.75.673-3.752 1.501v6.003c.001.828 1.68 1.5 3.752 1.5s3.75-.672 3.751-1.5V14M7.628 13.867l3.658-2.23V6.984M19.773 8.999A9.001 9.001 0 1011 20.003"
				></path>
				<path
					stroke="#2E4C7A"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.502 14.001c0 .829 1.68 1.5 3.752 1.5s3.75-.671 3.75-1.5M14.502 17.002c0 .829 1.68 1.501 3.752 1.501s3.751-.672 3.751-1.5"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-title-a-receber"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M5.998 21.004H3.997a1 1 0 01-1-1V14a1 1 0 011-1h2a1 1 0 011.001 1v6.002a1 1 0 01-1 1v0z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13 17.002h1.961c.433 0 .855-.14 1.2-.4l2.418-1.813a1.516 1.516 0 011.98.141v0a1.514 1.514 0 010 2.143l-2.073 2.074c-.559.559-1.27.94-2.045 1.094l-2.931.587a4 4 0 01-1.756-.042l-2.651-.663a3.96 3.96 0 00-.97-.12H6.999"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13 17.002h1.486a1.515 1.515 0 001.516-1.515v-.304c0-.695-.473-1.3-1.148-1.47l-2.293-.572a4.707 4.707 0 00-1.14-.14v0c-.927 0-1.834.274-2.605.789L6.998 15M19.271 6.73a2.501 2.501 0 11-3.537 3.537A2.501 2.501 0 0119.27 6.73"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M6.932 6.045a1.481 1.481 0 010-2.095l1.52-1.52a1.481 1.481 0 012.095 0l1.52 1.52a1.481 1.481 0 010 2.095l-1.52 1.52a1.481 1.481 0 01-2.095 0l-1.52-1.52z"
					clipRule="evenodd"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-line-horizontal-chart"
				fill="none"
				viewBox="0 0 25 24"
			>
				<path
					fill="#1A2E77"
					d="M4.752 10a2 2 0 100 4v-4zm15.496 4a2 2 0 100-4v4zM4.752 14h5.5v-4h-5.5v4zm5.5 0h5.167v-4h-5.167v4zm5.167 0h4.829v-4h-4.83v4z"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-line-chart"
				fill="none"
				viewBox="0 0 19 8"
			>
				<path
					stroke="#F28545"
					strokeLinecap="round"
					strokeWidth="2"
					d="M1.5 7l4.586-5.16a1 1 0 011.495 0l3.838 4.32a1 1 0 001.495 0L17.5 1"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-principais-produtos"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21.004 12A9.004 9.004 0 1112 2.996"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeWidth="1.5"
					d="M18.342 2.388a.752.752 0 011.321 0l.583 1.065a.748.748 0 00.3.3l1.066.583a.752.752 0 010 1.321l-1.066.583a.748.748 0 00-.3.3l-.583 1.065a.752.752 0 01-1.32 0l-.584-1.066a.747.747 0 00-.3-.3l-1.065-.582a.752.752 0 010-1.321l1.065-.583a.747.747 0 00.3-.3l.583-1.065z"
					clipRule="evenodd"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M11.503 16.29l-3-1.715a1 1 0 01-.505-.869v-3.412a1 1 0 01.504-.869l3.001-1.715a1 1 0 01.993 0l3.001 1.715a1 1 0 01.504.869v3.412a1 1 0 01-.504.869l-3 1.715a1 1 0 01-.994 0z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M8.135 9.791L12 12M15.865 9.791L12 12M12 12v4.42"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-eye"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="#868E96"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M11.767 8.234c.976.976.976 2.56 0 3.538a2.503 2.503 0 01-3.537 0 2.5 2.5 0 113.537-3.537"
				></path>
				<path
					stroke="#868E96"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M2.5 10c0-.549.127-1.092.372-1.593v0c1.262-2.58 4.052-4.24 7.128-4.24 3.076 0 5.866 1.66 7.128 4.24v0c.245.5.372 1.044.372 1.593 0 .55-.127 1.093-.372 1.594v0c-1.262 2.58-4.052 4.24-7.128 4.24-3.076 0-5.866-1.66-7.128-4.24v0A3.622 3.622 0 012.5 10z"
					clipRule="evenodd"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-check"
				fill="none"
				viewBox="0 0 12 12"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M10 3.25l-5.5 5.5L2 6.25"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-close"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="#EC3539"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M6 6l6 6M12 6l-6 6"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-check-2"

				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 6.25l-5.5 5.5L5 9.25"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-two-milk"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10 6H5V4a1 1 0 011-1h4M5 6L3.336 8.496A2 2 0 003 9.606V19a2 2 0 002 2h4"
				></path>
				<rect
					width="7"
					height="3"
					x="20"
					y="6"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					rx="1.5"
					transform="rotate(180 20 6)"
				></rect>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.25 6L12.8 7.933a4 4 0 00-.8 2.4V19a2 2 0 002 2h5a2 2 0 002-2v-8.667a4 4 0 00-.8-2.4L18.75 6"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21 13a5.31 5.31 0 01-4.5 0 5.31 5.31 0 00-4.5 0"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-etapas"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7 15H5a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v2"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13 19H9a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v4M19 17v4M17 19h4"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-trash"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					fill="#EC3539"
					d="M5.749 7.5a.75.75 0 10-1.5 0h1.5zm10.004 0a.75.75 0 00-1.5 0h1.5zm-3.335.833a.75.75 0 00-1.5 0h1.5zm-1.5 5.836a.75.75 0 001.5 0h-1.5zM9.083 8.333a.75.75 0 10-1.5 0h1.5zm-1.5 5.836a.75.75 0 001.5 0h-1.5zm-3.835-9.92a.75.75 0 100 1.5v-1.5zm12.505 1.5a.75.75 0 000-1.5v1.5zM5.954 4.76a.75.75 0 101.423.474l-1.423-.474zM7.12 3.638l.712.237-.712-.237zm1.583-1.14v.75-.75zm2.598 0v.75-.75zm1.583 1.14l.712-.237-.712.237zm-.26 1.596a.75.75 0 001.424-.472l-1.423.473zM4.25 7.5v8.337h1.5V7.499h-1.5zm0 8.337a2.417 2.417 0 002.417 2.417v-1.5a.917.917 0 01-.917-.917h-1.5zm2.417 2.417h6.67v-1.5h-6.67v1.5zm6.67 0a2.417 2.417 0 002.417-2.417h-1.5c0 .507-.411.917-.918.917v1.5zm2.417-2.417V7.499h-1.5v8.337h1.5zm-4.835-7.503v5.836h1.5V8.333h-1.5zm-3.335 0v5.836h1.5V8.333h-1.5zM3.748 5.748h12.505v-1.5H3.748v1.5zm3.63-.513l.453-1.36L6.408 3.4l-.454 1.36 1.423.475zm.453-1.36a.917.917 0 01.87-.628l.001-1.5c-1.041 0-1.965.666-2.294 1.654l1.423.474zm.87-.628H11.3v-1.5H8.703v1.5zm2.6 0c.395 0 .746.252.87.628l1.424-.474A2.417 2.417 0 0011.3 1.747l.002 1.5zm.87.627l.453 1.36 1.423-.472-.452-1.36-1.423.472z"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-etiqueta"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13 21H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5v5a8 8 0 01-8 8z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21 10v1a2 2 0 01-2 2h-2a4 4 0 00-4 4v2a2 2 0 01-2 2h-1M11 8l-2.5 2.5L7 9"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				id="icon-logo"
				fill="none"
				viewBox="0 0 143 32"
			>
				<path fill="url(#pattern0)" d="M0 0H142.5V32H0z"></path>
				<defs>
					<pattern
						id="pattern0"
						width="1"
						height="1"
						patternContentUnits="objectBoundingBox"
					>
						<use
							transform="scale(.0035 .01563)"
							xlinkHref="#image0_1353_46096"
						></use>
					</pattern>
					<image
						id="image0_1353_46096"
						width="285"
						height="64"
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAABACAYAAAAnDaPmAAAAAXNSR0IArs4c6QAAGVxJREFUeJztnVtwFNeZx//f6ZnRHRocjGMS05CUjS8JrQFnncuGwUllXUYyQy4bLCnRULsPm8QpiZetZC8lqVLJ5k1y2Y5fnJWcGNkVb4IwkHWlktWwm1ScsvG0Y3zLBQY7dmxDYABJSDPd59uH7p5rj2YQIETq/KqwR32bc/ryn+92ThM8Jo+ldIjmfhJiO9tTW0VoWS9DxonZ2nLDjbuhUCgUl4BQ4aMOkN3HzLoItfYxOwYDMa7jIMbooN4qwr2SYRI4A4L1Uu+/PXohDfnc/kfixLSFAB3EVs7O7ZvY8ZV0vfvnnjRiIoSNLGECAAEZtnEo9MX0xIW0Q6FQXF7ItXBaJiHtIYTCvWCOA8gQMMFAAkBy6w03bq12gJtHv9MvwAMM6GWr0jlgx+93/as1XwN27h01pMaTDDYqGscY+tH2fxicb//ck0aMCAMAx4J7iLSUdH/kC+mR+Y6jUCgWBwGtZS8IJrTQqIBIest1rvYQF3HL6LcTBB4OEBwAMMLA5IbRwQox8ZlPcACACQOff+r7/dX2z/7YSBDxZFXBAQCGIYiHnR8bw/P1RaFQLA4CjrML4DQAXbIzCFDGXUVVxaIADdTYQBcIVd3G0eRANcHJfwMwEN87WiFqvNcwBPNo7TZ62zP3Z580qgqYQqFYHMTWdTen4dAOT2x0gIOslgpuGf22iRqC4ULxqtYOkVnHV+kh2BXbOQ7qFhwfQTzAo0Zd/VMoFJcHAQBb191oweGtBSsHCHEW153/PT4w9YxhP/fPcU7166U7ynofXl0gPLlh9FuVLhDXI1oAh2ltyd97DWNel2qetsg29C5gP4VCcYkQ/gdfeEKcxS1nfoGPndyDG6d+iTXnXzGItL1SNp12Dv9LPqhrI1SRWWoMhXFtcyvWtC4vX2UIiMlbRr/Nt45+e7Sa5bNh5WpsWLkabZGGeRstge0X1Msi6olVKRSKy4co/mPruhutj5z6r/R7sq9X2ZwHfOF5ddc30wRKFq9dFmnAqqZWtEUaoBEFHwFICIQn/+7JB4dRFoC+84YbcecNN1aIlpAiUbJAcvXYTKgFaH4fsGwDsOymoC2Ue6VQXEFCxX84h7/ZDzlXw+Xhgdyz30iGb/9uUgqeIIm85fCX8zNY1dQKjQRWNrbgxPmpwCMsizQYrZHGCwjqcuzv931/OCvF0I8wZLBT5JZFVoCW3QQ0rABCrYAIF3aTWfDZ18oPlilfoFAoFo8SS4eIasY76G0HodfsQPfGYYmZXBYAcE1Ts/v/xhasamrNb3Ntcyve37YCooolVA0m9IeFTJ2VLX2lPYgAbeuByIpKwclNly5ze6CKBRWKK0iJpcPMwdmkLIP+6IDecIB3JADEAewmSf1Aac3yu+enYIRXQiOBFQ1NuLa5FYIILeEI3po+UyJAANCghRDRNJzLzlV87bJII85mZwsLCEaOtVJXK3saPP0nwJ4C7Gkge9r9J3OBXcnlcKjKuVAoFItAqPRPypSnzOlXWdAbEsgVxIUjZHx5dGjwuaKUuUYC1zQ2YzqXxZxtoyEUwvVebMZhxptTZ3Btc6ngAMDt162FsXwlfnvirfyytkgj4h/8MK5pasFjLz+LOccGANwi01iFM6UHkFng3f+tt7/JpnvTdQ+tUCgUl54S0SFii7kQo8EUg446+T95tQBvDAMrCXidBjBd2LcxFMKq5lasCviSd2fOIScdRIRWsnxN63LctPJaNGghfGLN+vzy269bW/T5BvzyzaMAgE/KFxbUyaIejl3kARQKxUVSGkh2eEgIKohOK0F+LAxkAXxQA8KFOMxrsyXhIISFhqzjIKKVCsvZ7CxOzc64x+dSV+zNqTN48rUUPr5mPdYtv6Zk3Zxj41dv/hGvnno3v+wWeXFGinKtFIorT0U0Vz7/zckSa6d8h7cd4A0Hn6HleCuiVawXRGgKhXFNYwvaIg1wWOL3p0/AYca1za0VMR2fDStX484bbgQAHD3zF0y+/ru8WwW4gvPv9g+CGyXCbuYqsgIU0cGz7wIzfyrfKhn6/PGqA1cVCsXiECpfYNu0W9M4Vb6cXrGLA8n41PVZ/HBVU8UBJTOmc1k4kr16nUL6/C/nZ7CysSWwhufVU+/kRSd95mSJ4ACVrhUtvwloXO1mrUItlT2rEB3lWikUSwFRviDyke9YAJc8oPSGDXoulxccjhB61uTQplWfbWfWyeXT58sa3Arja5qaK02rOil3rTi8wi0CLBYcmQXPnXYzWWUo10qhWBpUWDoAIASGpKS4n8nilRqwwgYi5AaSVwtcD+CRmdnMF//QnKk28NNPnzdqYaxqqu5a1SIwazX7jpusz54upMrt6aDdAWBCZa0UiqVBhaUDANT+3TQgC5NetRC4oxH8mQZgtbdLlnHryTn9K5jZRWVVvhFNw3XNbSVuVFC6HHAzWB9fsx4NWqhiuZ/RCsxaTR0DTj4DnH3NdaWqCw5UQaBCsXQItHQAQIjG+6XM9lfU7XiBZPqjW7tzH9kbHzabRiCRHwzaqIVxTVMLrkFArKWIZZFG3HnDTWiLNJRkrzZftxbLIo0AgLPZOdz+5qsL7J6Ldg77LuoAf8Uk4qaezYYNKVhvnLKtsaT1VzFMJBE3jVk7ZAhpZ8Z/as07e6VicakqOtQ+mHEOf2MEoLyY0LNZ0KtO6YbLKcZAsjhWI4gwa9toDFU9PAA3LX7szEl8eNWavMgAyH8+eX4a66YPoxmV1cr1w2O06/iCHqSuzk3zztlD4AwRpUPC2Tc2YS0p962rM5ogpl4GHxo/8HzglK/dndF+28EACUfXAMy1UQzAoUTcNLK2NkzEmbAmh5Za3+oha4teDXKQNTEGYNeVbo+iQFVV4L2GLt86kMH19xSqlCOutMjr/wCscoAPbARaKEZHkP8luV17C5v4z9hz9jac4wa0hCP59PkqzuAu5zd4WvsbnCAdc46NX755FL898RY+a6yH+fZ/4viaL+Fs6D347Yk38ezbr+Of7N+4BxYRN3A8dfSCOkjLb86c/3WX0fTR717wg0PMiVrbMDNyUox0d0bHltIDSkx9AJsExLo+2z46/pPU8eL1XZ3RBBjDbiqAMwAsya6bnHNEH4HjYCCXExkA6m0gf8WkRg0ds+7sC+1fqR77TD1sGLW2qYf5TBGd586N4MT/ZWiFCYRawbfOQbb8GtBOuFucOg5q+JTe2dBgJmclvtJwGD3hIwCAePg1PDy3Cfty7vQSu8Sv8TnpDlfYIl/Aj7VP4r+1OwAAHz+fxN8eGUIz5rD65M+wP3wnnqVPoIVnscWP54gwaNUdQOO14MyLbgwn1AK0rgMy7nfSqjvAp711Igxa9VGg+X39jYQJAAs+UcwYI8hkxXISBoFjAMXASOQcEUvEzPal4aLIDEBg5nTkFJ8pX+uJEpgxNn4wVWoJSHkc5If7pHJNriJeedgwHImSKYI1QvLmr6arvp0lNAWTiCYB4JXvGbGbv5ouyfT+9ntGXEgagOO+aeXlR9YZt/zjseNBx6qH+f0fAJh6XefZvxSsDK1oIKU9DX7jKeyUa8xvtJxAG2Xzq64XU/hW0yFszv0ZN2knsUGeyq9rwSy+7PwMn5QvYAaNuIVL29+Z+x/cgcN4WQQkxdrWg5pWA9NvAG0fAM+dAnDE600r6P3b3cBy4+qAEeYLg0DJPQetahdtaOddpqGFRQoMI9cmBrAELIM9B1Jbv9TZvuXcFL8wXiaCibip52x3cC8Lrqhf2nPQGunqNI8xKPP4AUuVGlxFsMR2MJVY6A4jDuCCXgnl88rDhuE4tPeSNM4jMHtVgT3tZomqjNz+UORNo1hwitke/h02iFOB6wx+p0JwfFbhTMHKKSfUAizfUF1Umt93yQSnHp542koTw832MRKJmLkkJgr74f7UoYkAq2u2aCIzCgdbgOP7rX2P708pwbnKYJA/T1UaQP7tLi8+YCxoxkwpRcFqEpwQjbgoKweoV3QUNQmF5P3eR326GXXN/axQXEpeesgwmd17TxCP5HK8A145C9HCpvjl/DzmnLztq+lHL1ZwgHrcK0VdjE1Yme6OKAAgDKwFCsH1no7NMSa5HRJxEq6VwUwWBMbCZ519QTGg7o5NkwDAEZmISD5j26KfGb3l++956nCg2dx9z6ZeSCRAbO3Z//xuwHertL3IQQe5IWTKirHujk1V+7XnwOGq49V6OjbHJHEvSY6VtIvYCmvy/vmC6om4qbt9ou0k3BubJaUh2KoVkM/vC9pC5LmJde5b3n73ulDsQtrQc8+mPpaI++e/+DwAlNlz8HD75WhvbUSfP7/VXBb72nenMy89ZEwwUwKgRGrYGGrfnb6geCMBRj1v+b0QlOhcIhJx08h5w8VYK7xVo6cjOsiQA2AABBQG2nMMErFcm0gn4ubWyhvPnUBeZHldjsQoACNo/+7OqOmLSsnekg0CYkU7YBbQNXCsdCzKhU9U7z1EgwzZR0H9YsRytkjcuy069PjB5yverNrVGU3YDtyXNBIX9iU2wTBztoh33W1uDaqvScRNM+eIvQAMLxBevm+i+x4zwXL+PvR0REcYss+9LlWO0xkdCTy37mR3MZZI+tfXPw/lk9rV2949T1WNGV4A/rXkZPtuN8MkJR4lQgKA3hTGFqC+mrVXHjYM24ZR9CLNvIsWCiF9c1kGKzVq6JFziJOG5QBgSxx3WpFs31Upcsq9ukTYdmHyeD8W0t0Z7We4mQRmjDHJOEfY4JBsB8kREDJgGDmbqtYDMcQkmHWGHOQIGxxhQxDHmDHmbdB/77ZoXfNNNwIZQRxjkvHCF8iEII4V/ytZH9RXR4wy4E0by8nifrGUu5jdlzcKwnB52xJx0yDGKDN0gJNgmQjal4SYLI+NJeKmkXPEXnguBEMOSuJY8Tll5jSkGKN5xNQVnEL7y9sAsOWf2+5t0arXhggJ9/pyRjJGwDIBlvn7oLi9zJwmyP6AvgJSjCTi5kW55C8+YMR81wpAPjnwoa+nk/BcLLsQ76mJlOj1MlreNSCTiCaJaNJxsMXfLjVq6C8+sH4kPE2nWdCoZBqRTCOCaG9khlJHHqx8waWydC4B93ZuijNzXlyKVvUB7sMxftAaKlp+HIDV02HuY4hJgGJdn21fW15L48OSy3/1jwM41NUZ1YkRF4QBADXf1T42YWUAHNoZNw3Nt8oaKPnDsu8tXl9OV2c0wW42xO3Xgcp+ARjr6TAHGGJQEAYSMXPMdyFztjYKMBiYGD+Q2lG+7867zKQWphQYerZV6wXgx8qQc8RAXnCkbA84J9bOu8z7hYZJIgoUHa/9hetSo/0gJLrv2ZQMdGM9MZEOb33i6VSFi+S3l5nTM9PcXhTUPw7ASsTNiWwOKSIysrboBTBUfox6EUL0smdGVQ5u5jG4ghNLDRv6hbpY8xGepr0gT+AZGZAnpCAvvkTDLz5gWJ74AVCiUxdMHO/qiFb8EhFBB5MJdk+6d3Pl4yfZrByCJraP77cCb6bHDljJ7m3RNAgGZtmEezOWfjcwUbWM35FDECIOQP/C3ab55CKU+1OR5VYmpCU8dsAaundbVIfgieKYFUvnUWgiI3MysKzgiaetdHdndAJAgopexui5rwnAE4sqfX3iaSvd02HuYrh1JxXtZ+oFGGC2arW/u6PdrcGS6EeVlDMLJJ44GByTYcgJsAALjAVlEccmrEx3Z3QCjH4A9bzttirMHAcAIp7wXavCOuwjQj8ANERQIuTVuPVr6SEAQy89uO4Yu65h8rb70iXxvZceMhKFubd4JGcjHzNKDRtGOEwpADoRDaCQSVOiUw/kTkRf6XJw/j8Ay5GZaQz5N5dnVYwBqGseHyKtSpqdKooSfcZ/alndndEMGHqEtI0oCl5fDrripgnbszQC6nvKefxgZTxk/KdW3eeERSG1n3VEzA9FSXv+mpMSMS/Cq0/KPyS1vp/AQwyKAWwGWaLMbD1+oHpZwfh+ax9qxFCYkSH3uxZcZuE9/F4gHxWDmz/09XTyyIPrMgB0yRRHHaJTD1IiTURjgDRvuy9dcq3bd6fTRx40fAurRFCV6NSBBCeJqPTXQyJDhAyxTE9PY1/QL5mPG3gNmRC8kZkNBunEMMBslD8Y5TDVqAiWyIAW5wWCwtEM9kS24Rxf7ITV6Lr7dhNwTAisBZEBhk7MJgF6ecaEgI2A+6A/8XQd2R6BJBglRXK2HTIBN8KcZdRsfygEy08OBFqiZffEfFTtK0Hni0wPMedfHZW57b7gymMiHmGmQQCxlx9Zt/ZSpL49l6nqjyIE/NNdcn8q0akDwWJsz4Hg1PR8+KlS20EfQ+reBQD51tFCZzS7QkiHdX90xMUM9ejujPYTMMDsFG5GLpyTKg+hDgBE9b0skRnp+U5vuJFO1zpGcRlEoCVaR1u6OqMJAgbATuHHpXZf68atGM67OFWncMkC+8JwZ4LgOU7gIuJH5bz4gBHTBDZKwAST/6NhoEoGUYnOZSIRN/WcI1IADM8NSzIoSSzTQlDaCSM9/pPU8e5t0WO1rJ2lSCJm6gsRnp6O6Agz+ryBpknJZAlIiwUyCJM1c4rPtLSJ4XIrBV4GhpnqOldE/nlfOK475n5mdhbS10FmfxyU21eNZFoS0tBwfCaDdHOr6CMgcBaAepCyeD5zShx5cF3wIOWic+HW7Vwa0XnxgfUjRNwni49fYx8lOpeJnCMSfuYCzDuqBoOvJsGJSAu2a+rMtsLEfKZ1AD0dm2MM6WeO+scPWIGxhe6OTUb5rUtEaWYGEfS6BI+p4hh2yE5rXvurBe5Lti9yx3I1ti3HC3y7QffKLFme7s6ofjHiyEx9tbeqwHjxASNWnFFaCL7geC1JCsYEE9LUSNbcOT4TiaDPc+lKUKJzuWDa7t70lBz/aSpQcLyHcJEbtnAiQDrn1hbpAmILaohOT8fm2GMHnstvIyG3ENy4zPjBYMFxLUQ2Kx5E6bzglZXptQTPfeAr63SemLDSfuCdNBFHrSAvyV430cXpC80MZrMi5rmimWqC4zFvTdR8eK6VCQDENCE0WTM47kg3MeENi1iw6KSGDd0XHCKeuPVr6R3l27z00HozyO5RxYGXDzcGgep+P4MHqq1bioxNWBl/YCsBg113m1XTvF2d0QRDTnZ3Ro/5RX6UD3hT1cC3bYt+cGVg/LEDVtIv2tNIjM5XTJeztaqjoosH5u7sMKsWEHrzDSW8nS7qTSLVBgB3d0b7wQu3dB0HBStHyKGbv5o+VOsf8kJDNeeKmo/GxsI1Yq4cNPzKw4bhp/HLUaJzuSB2Ly4h0dW5uWSwXSJuGj2d0b2ANOsJRi4lQiF5v19JS0JM3rst2p+IFx6qnfE7jJ6O6Agx3EpeKfN1Opo3JxERjK6OaInZnYibulcpPOBNKlYBwa2BAsPIOWJyZ8fmEtHo6dgcc8essZmv9g1of168ICa7OqKDxQLmtWPQbz8zp2tYKoEIkX99ie5Nd1LSV09whqu1sx6IyH+o07d+LV2XJSYoH2xe8MhzAJidRQb5waQUf+khwwT8CmUjJmVwnRSg3KvLhpOT9wuN4kRkEMuJ7m2bLHfYAxs5v9YF3E8sEgBfVGHYYjI2YWV23mVu9ap+DUEYztliuHtbNE0COtvZQrqb5dieg1a+fuMH+6193R3tFkAmAQM9ndE+ZrLA0G2H3XE+LEcgBLyCuRIeO2AlezrMQYYYBMPQICd7OqMZlsiQgM4s3VoVyEGhaRmWlbU4Xvt3+O0nYCBni4HubdE0APjXBnDdQOlwhdtQD26tUPujIOoFo7+nM5oo7isYOjNbYLofhHmnxQ2ieNiDoNo1Rz5zWTwaDmMQgC6E6MMCXaz23enMCw+uH9LAw17lcerIg+uAabhZOYmMayFWWlTK0rlMPPG0lZYOb80PiyA24Q62NMBsSUfu8AKpV5WlA7h9i4S5nSAH87/UBIPzbhEnJXFsz0GrYm7icMg/J5zxxl/FQGwyMxhycM9Bazdz9XPy2AFriKVsB1xLkhl6/rsL53VI2pWzJRa3f/xgal3JOCtCUc0UJxmyf/xgqr2umqAq7DmYSvjnKKivM9O84DfOCiH82hzMZet/8YBXMWwBADPHUsPGgmu8Nt53dISIB1ExKycnyeatJIPfNVe1lIH3Gobj8LGFNuiSE2pxZwUsg8+/A7z9CwAAvffTQOO1FdsIQoyi/3HFJqSKx0y9WfduaEGnq42xulqJx0y9rY02OmGkZ07xmfkKJYvpipum5tByv3xgId97Kc5rvv0an5nJIF1v+y+Ers+2r9VyMBba16XOy4+sWwsAc+f4TK2xXUp0FArFoqLcK4VCsago0VEoFIuKEh2FQrGoKNFRKBSLihIdhUKxqCjRUSgUi4oSHYVCsago0VEoFIuKEh2FQrGoKNFRKBSLihIdhUKxqCjRUSgUi8rVLzoyG/xZoVAsSa5u0cmeAk4+k/+TTzwDZGu+WUShUFxBrl7RyZ4C//kXgMwBIuz+k1l3mRIehWLJcnWKTpng0Hs/7c6lUyw8s+9e6VYqFIoArjrR4amjBcEJtbhiE1kBRFaA1twNhFo84fk5MHX0SjdXoVCUcVWJDk8dBU48Uyk4Pv6yUIu7/YlnlPAoFEuMq0d0ZM4VHKBCXEoIEp63f76IDVUoFPNxFYmOlw6fT3B8yreZPXH526dQKOri/wHU+TmP/5W1ugAAAABJRU5ErkJggg=="
					></image>
				</defs>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-title-card"
				fill="none"
				viewBox="0 0 21 21"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18.007 16.002h-3.466a1 1 0 00-.833.445l-.406.61a1 1 0 01-.832.445H7.538a1 1 0 01-.833-.445l-.406-.61a1.002 1.002 0 00-.833-.445H2a1 1 0 00-1 1v1.001a2 2 0 002 2h14.007a2 2 0 002-2v-1a1 1 0 00-1-1z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18.008 16.002V11M2 16.002V5.998a2 2 0 012-2h4.002"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M11.004 2.797v3.601a1.8 1.8 0 001.8 1.8h5.403a1.8 1.8 0 001.8-1.8V2.797a1.8 1.8 0 00-1.8-1.801h-5.402a1.8 1.8 0 00-1.801 1.8z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M20.008 3.997h-9.004"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-logo-full"
				fill="none"
				viewBox="0 0 131 18"
			>
				<path
					fill="#fff"
					d="M19.343 2.215c.307.53.65 1.18 1.026 1.948.377.768.761 1.577 1.152 2.429.391.838.775 1.696 1.152 2.576.39.865.747 1.668 1.068 2.408l1.047-2.408a89.1 89.1 0 011.152-2.576c.39-.852.775-1.661 1.152-2.43.377-.767.719-1.416 1.026-1.947h2.387c.126 1.061.245 2.192.356 3.393.112 1.186.21 2.408.293 3.664.098 1.243.182 2.5.252 3.77.084 1.257.153 2.485.21 3.686h-2.598c-.056-1.69-.125-3.428-.209-5.215a99.408 99.408 0 00-.335-5.193c-.154.32-.335.705-.545 1.151-.209.447-.432.936-.67 1.466-.237.517-.481 1.054-.733 1.613a94.595 94.595 0 01-.712 1.633c-.223.517-.433 1.006-.628 1.466l-.503 1.152h-1.968c-.14-.321-.307-.712-.503-1.173a54.15 54.15 0 00-.649-1.466 73.34 73.34 0 00-.712-1.633 61.186 61.186 0 00-.712-1.613c-.237-.516-.46-.998-.67-1.445-.21-.46-.391-.844-.545-1.151a116.736 116.736 0 00-.355 5.193 859.44 859.44 0 00-.189 5.215h-2.597c.056-1.2.119-2.444.189-3.728.083-1.284.167-2.555.251-3.811.098-1.27.202-2.5.314-3.686.112-1.187.23-2.283.356-3.288h2.45zM38.27 2.069c2.094 0 3.693.383 4.796 1.151 1.117.768 1.675 1.94 1.675 3.519 0 1.968-.97 3.301-2.91 4 .265.32.565.711.9 1.172.335.46.677.963 1.026 1.508.349.53.684 1.082 1.005 1.654.321.559.608 1.11.859 1.655h-2.953a27.633 27.633 0 00-.859-1.508 30.229 30.229 0 00-.942-1.487 22.976 22.976 0 00-.921-1.361 27.51 27.51 0 00-.86-1.152c-.194.014-.362.021-.502.021H36.91v5.487H34.27V2.425c.642-.14 1.327-.23 2.053-.273a25.669 25.669 0 011.947-.083zm.189 2.282c-.559 0-1.075.021-1.55.063v4.69h1.152c.642 0 1.207-.034 1.696-.104.489-.07.894-.195 1.215-.377.335-.181.586-.426.754-.733.167-.307.25-.698.25-1.172 0-.447-.083-.824-.25-1.131a1.85 1.85 0 00-.733-.733 3.152 3.152 0 00-1.11-.377 7.507 7.507 0 00-1.424-.126zM54.334 14.906c.67 0 1.158-.077 1.465-.23.308-.168.461-.447.461-.838 0-.363-.167-.663-.502-.9-.322-.238-.86-.496-1.613-.776-.46-.167-.887-.342-1.277-.523a4.686 4.686 0 01-.985-.67 2.866 2.866 0 01-.67-.9c-.153-.364-.23-.804-.23-1.32 0-1.005.37-1.794 1.11-2.366.74-.587 1.745-.88 3.015-.88.643 0 1.257.063 1.843.188.587.112 1.026.224 1.32.336l-.461 2.052a5.715 5.715 0 00-1.068-.335 6.068 6.068 0 00-1.508-.168c-.517 0-.935.09-1.257.272a.838.838 0 00-.481.796c0 .182.028.342.084.482.07.14.181.272.335.398.153.111.356.23.607.356.251.111.558.23.921.356.6.223 1.11.447 1.53.67.418.21.76.454 1.025.733.28.265.482.572.608.921.125.35.188.768.188 1.257 0 1.047-.39 1.843-1.173 2.387-.768.53-1.87.796-3.308.796-.964 0-1.739-.084-2.325-.251-.586-.154-.998-.28-1.236-.377l.44-2.115c.377.153.824.3 1.34.44.531.139 1.131.209 1.802.209zM63.297 16.728h-2.534V5.775h2.534v10.953zM63.57 2.57c0 .475-.154.852-.461 1.131-.307.28-.67.419-1.09.419-.432 0-.802-.14-1.11-.419-.306-.28-.46-.656-.46-1.13 0-.49.154-.873.46-1.153.308-.279.678-.419 1.11-.419.42 0 .783.14 1.09.42.307.279.46.662.46 1.151zM68.855 14.906c.67 0 1.158-.077 1.465-.23.308-.168.461-.447.461-.838 0-.363-.167-.663-.503-.9-.32-.238-.858-.496-1.612-.776-.46-.167-.887-.342-1.278-.523a4.688 4.688 0 01-.984-.67 2.868 2.868 0 01-.67-.9c-.153-.364-.23-.804-.23-1.32 0-1.005.37-1.794 1.11-2.366.74-.587 1.745-.88 3.015-.88.642 0 1.257.063 1.843.188.587.112 1.026.224 1.32.336l-.461 2.052a5.717 5.717 0 00-1.068-.335 6.068 6.068 0 00-1.508-.168c-.517 0-.935.09-1.257.272a.838.838 0 00-.481.796c0 .182.028.342.084.482.07.14.181.272.335.398.153.111.356.23.607.356.251.111.558.23.921.356.6.223 1.11.447 1.53.67.418.21.76.454 1.025.733.28.265.482.572.608.921.125.35.188.768.188 1.257 0 1.047-.39 1.843-1.173 2.387-.768.53-1.87.796-3.308.796-.964 0-1.739-.084-2.325-.251-.586-.154-.998-.28-1.236-.377l.44-2.115c.377.153.824.3 1.34.44.531.139 1.131.209 1.802.209zM75.138 2.885l2.534-.419v3.31h3.895V7.89h-3.895v4.46c0 .88.14 1.509.418 1.886.28.377.754.565 1.424.565.461 0 .866-.049 1.215-.146.363-.098.65-.189.859-.273l.419 2.01a8.585 8.585 0 01-1.152.378c-.475.14-1.033.209-1.676.209-.781 0-1.438-.105-1.968-.314-.517-.21-.929-.51-1.236-.9a3.702 3.702 0 01-.649-1.446 9.128 9.128 0 01-.188-1.947V2.885zM82.806 11.304c0-.963.14-1.808.419-2.534.293-.726.677-1.326 1.152-1.801a4.537 4.537 0 011.633-1.09 4.935 4.935 0 011.885-.376c1.508 0 2.68.468 3.518 1.403.852.935 1.278 2.332 1.278 4.188 0 .14-.007.3-.021.482 0 .168-.007.321-.021.46h-7.225c.07.88.377 1.564.921 2.053.559.475 1.361.712 2.409.712.614 0 1.172-.056 1.675-.167.516-.112.921-.23 1.215-.357l.334 2.074c-.14.07-.334.146-.586.23-.237.07-.516.133-.837.189a9.673 9.673 0 01-2.115.23c-.964 0-1.802-.14-2.514-.419-.712-.293-1.298-.69-1.759-1.194a5.008 5.008 0 01-1.026-1.8 7.457 7.457 0 01-.335-2.283zm7.35-1.131c0-.35-.048-.677-.146-.984a2.19 2.19 0 00-.44-.817 1.769 1.769 0 00-.69-.545c-.266-.14-.587-.209-.964-.209a2.18 2.18 0 00-1.026.23c-.293.14-.545.329-.754.566-.196.237-.35.51-.46.817a4.424 4.424 0 00-.231.942h4.712zM101.199 10.969c0-1.145-.147-1.969-.44-2.471-.279-.517-.81-.775-1.591-.775-.28 0-.587.02-.922.063-.335.041-.586.076-.754.104v8.838h-2.534V6.13a16.98 16.98 0 011.906-.398 16.108 16.108 0 012.513-.188c.754 0 1.368.098 1.843.293.489.195.893.454 1.215.775a5.197 5.197 0 011.382-.691 6.4 6.4 0 01.921-.272c.335-.07.67-.105 1.005-.105.852 0 1.55.125 2.094.377.559.237.992.58 1.299 1.026.321.433.537.963.649 1.592.126.614.189 1.29.189 2.03v6.158h-2.534v-5.76c0-1.144-.14-1.968-.419-2.47-.279-.517-.817-.775-1.613-.775-.405 0-.789.07-1.152.21-.363.125-.635.25-.816.376.111.35.188.72.23 1.11.042.391.063.81.063 1.257v6.052h-2.534v-5.76zM116.512 14.948c.782 0 1.375-.042 1.78-.126v-2.806a5.655 5.655 0 00-1.487-.188c-.279 0-.565.02-.858.062a2.78 2.78 0 00-.775.23 1.39 1.39 0 00-.544.482c-.14.196-.21.447-.21.754 0 .6.189 1.02.566 1.257.376.223.886.335 1.528.335zm-.209-9.445c.838 0 1.543.105 2.115.314.572.21 1.026.503 1.361.88.349.377.594.837.733 1.382.154.53.231 1.117.231 1.759v6.638c-.391.084-.985.182-1.781.294-.781.125-1.668.188-2.659.188a8.01 8.01 0 01-1.801-.188 3.886 3.886 0 01-1.403-.608 3.005 3.005 0 01-.901-1.089c-.209-.446-.314-.998-.314-1.654 0-.628.119-1.159.356-1.592a3.013 3.013 0 011.005-1.047c.419-.279.901-.474 1.445-.586a7.905 7.905 0 011.739-.189c.279 0 .572.021.879.063.307.028.635.084.984.168v-.419c0-.293-.035-.572-.104-.838a1.603 1.603 0 00-.377-.69 1.585 1.585 0 00-.691-.482c-.28-.112-.636-.168-1.068-.168-.587 0-1.124.042-1.613.126a7.107 7.107 0 00-1.194.293l-.314-2.052c.321-.112.789-.224 1.403-.336a11.015 11.015 0 011.969-.167zM126.17 14.906c.67 0 1.159-.077 1.466-.23.307-.168.461-.447.461-.838 0-.363-.168-.663-.503-.9-.321-.238-.858-.496-1.612-.776a16.09 16.09 0 01-1.278-.523 4.679 4.679 0 01-.984-.67 2.862 2.862 0 01-.67-.9c-.154-.364-.231-.804-.231-1.32 0-1.005.37-1.794 1.11-2.366.74-.587 1.746-.88 3.016-.88.642 0 1.257.063 1.843.188.586.112 1.026.224 1.319.336l-.461 2.052a5.705 5.705 0 00-1.068-.335 6.06 6.06 0 00-1.507-.168c-.517 0-.936.09-1.257.272a.837.837 0 00-.481.796c0 .182.027.342.083.482.07.14.182.272.335.398.154.111.356.23.608.356.251.111.558.23.921.356.6.223 1.11.447 1.529.67.419.21.761.454 1.026.733.279.265.482.572.607.921.126.35.189.768.189 1.257 0 1.047-.391 1.843-1.173 2.387-.768.53-1.871.796-3.309.796-.963 0-1.738-.084-2.324-.251-.587-.154-.999-.28-1.236-.377l.44-2.115c.377.153.824.3 1.34.44.531.139 1.131.209 1.801.209z"
				></path>
				<path
					fill="#F4A155"
					d="M6.14 13.577c-.289.541-.35 1.202-.34 1.985.006.44.034.92.056 1.438 1.668-.362 3.404-.978 4.172-1.904.587-.71.75-2.512.648-4.091-.516.16-1.01.334-1.47.52-1.53.614-2.693 1.35-3.066 2.052z"
				></path>
				<path
					fill="#F4A155"
					d="M9.205 11.524c1.476-.653 1.57-2.933 1.45-4.772a32.267 32.267 0 00-1.327.465c-1.481.568-3.224 1.449-3.452 2.694l-.013 4.537c.05-.319.137-.609.276-.871.365-.685 1.482-1.402 2.957-2.009l.11-.044z"
				></path>
				<path
					fill="#F4A155"
					d="M5.876 5.84v4.071c.228-1.245 1.971-2.126 3.452-2.694.093-.036.184-.07.275-.103 1.114-.992 1.093-3.481 1.033-4.636-2.573.79-4.76 2.127-4.76 3.362zM2.23 5.59l.018.006c1.628.544 3.355 1.539 3.507 3.08l.121 1.235V5.273c0-2.936-2.612-3.483-4.82-4.273 0 1.6-.445 3.578 1.175 4.59z"
				></path>
				<path
					fill="#F4A155"
					d="M5.755 8.676c-.152-1.541-1.879-2.536-3.507-3.08l-.017-.005a11.6 11.6 0 00-1.155-.318c-.08 1.661-.202 3.362.81 4.334l.225.225c1.38.49 3.503 1.54 3.623 3.056l.13 1.56.012-4.537-.121-1.235z"
				></path>
				<path
					fill="#F4A155"
					d="M2.656 14.326c.81.365 1.624.657 2.673 1.053l.472.183a6.64 6.64 0 01.062-1.114l-.129-1.56c-.12-1.516-2.243-2.565-3.623-3.056a7.467 7.467 0 00-1.055-.306c-.121 1.924-.142 4.016 1.6 4.8z"
				></path>
				<path
					fill="#04134C"
					d="M10.656 6.752l.121-.008-.01-.157-.15.05.039.115zm-4.793 7.696l.12.019-.12-.02zm-.108-5.772l.12-.012-.12.012zM1.076 5.273l.026-.118-.14-.031-.007.143.121.006zm.81 4.334l.086-.086-.001-.001-.085.087zM5.856 17l-.121.005.006.144.14-.03-.025-.12zm.284-3.423l-.108-.057.107.057zm4.536-2.572l.121-.008-.01-.154-.147.046.036.116zm-.648 4.09l.093.078-.093-.077zm-4.699.284l.044-.113-.044.113zm-2.673-1.053l.05-.11-.05.11zm-1.6-4.8l.02-.12-.133-.022-.008.135.121.007zm4.678 3.362l-.12.01.12-.01zm4.902-10.41l.12-.006-.007-.155-.15.045.037.116zM1.056 1l.041-.114L.935.827V1h.121zm8.272 6.217l.043.113-.043-.113zm-7.08-1.62l-.039.115.039-.116zm-1.293-.33c-.04.827-.092 1.679-.004 2.445.087.768.316 1.47.851 1.983l.169-.175c-.478-.459-.694-1.094-.779-1.835-.085-.743-.035-1.572.006-2.406l-.243-.012zm4.8.006v4.638h.243V5.273h-.243zm0 4.638l-.013 4.536.243.001.013-4.537h-.243zm-.121-1.223a231085.638 231085.638 0 00.121 1.235l.242-.024-.06-.617c-.02-.189-.038-.377-.061-.618l-.242.024zm4.92 2.324c.051.784.036 1.621-.064 2.348-.101.734-.285 1.332-.556 1.658l.188.155c.316-.382.507-1.04.609-1.78.102-.746.117-1.6.066-2.396l-.242.015zm-.62 4.006c-.365.441-.97.818-1.702 1.13-.73.31-1.572.553-2.402.733l.052.237c.838-.182 1.698-.428 2.445-.747.746-.318 1.393-.713 1.794-1.198l-.187-.155zm-4.562.248c-1.052-.398-1.86-.688-2.666-1.05l-.1.221c.815.367 1.634.66 2.68 1.056l.086-.227zm-2.666-1.05c-.826-.372-1.238-1.053-1.43-1.89-.193-.841-.16-1.829-.099-2.792l-.242-.015c-.06.96-.098 1.981.104 2.862.203.886.652 1.644 1.567 2.056l.1-.222zm2.907-1.318l.13 1.56.241-.02-.128-1.56-.243.02zm.385-7.058c0-.272.12-.561.356-.86.235-.298.578-.598 1.005-.887.856-.579 2.034-1.106 3.312-1.498l-.071-.233c-1.294.398-2.496.934-3.377 1.53-.44.298-.805.613-1.06.938-.256.324-.408.665-.408 1.01h.243zm4.516-3.355c.03.574.05 1.476-.075 2.355-.126.885-.394 1.717-.917 2.183l.161.182c.591-.527.87-1.435.997-2.331.128-.902.107-1.822.077-2.402l-.243.013zM5.998 5.273c0-.753-.168-1.36-.46-1.857-.291-.497-.702-.878-1.178-1.186-.945-.613-2.172-.954-3.263-1.344l-.082.228c1.117.4 2.3.727 3.213 1.32.453.293.833.649 1.1 1.105.268.456.427 1.019.427 1.734h.243zM.935 1c0 .397-.028.814-.045 1.245-.016.428-.022.864.025 1.284.094.843.399 1.632 1.251 2.165l.13-.206c-.769-.48-1.05-1.187-1.14-1.986a8.467 8.467 0 01-.023-1.247c.016-.422.045-.852.045-1.255H.935zm.1 8.646c.174.03.558.13 1.036.3l.081-.228a7.568 7.568 0 00-1.075-.311l-.041.24zm1.036.3c.684.244 1.548.624 2.253 1.128.71.507 1.234 1.12 1.29 1.824l.242-.02c-.065-.813-.663-1.482-1.39-2.001-.731-.523-1.619-.912-2.314-1.16l-.081.23zm-.27-.253l.224.225.172-.172-.225-.225-.171.172zm4.176 7.301c-.022-.52-.05-.996-.055-1.434l-.243.003c.006.443.034.926.056 1.442l.242-.01zm-.055-1.434c-.01-.78.052-1.413.325-1.926l-.215-.114c-.303.57-.363 1.258-.353 2.043l.243-.003zm-.636-.067l.47.182.089-.227-.472-.182-.087.227zm3.968-3.858c.79-.35 1.197-1.13 1.393-2.026.197-.899.19-1.942.13-2.865l-.242.016c.059.916.064 1.932-.125 2.797-.19.866-.569 1.553-1.254 1.856l.098.222zm1.364-4.999c-.3.099-.665.22-1.057.364l.084.228c.388-.142.749-.262 1.049-.36l-.076-.232zm-4.635 7.83c.05-.308.132-.584.264-.832l-.215-.114c-.147.277-.237.58-.289.909l.24.038zm.264-.832c.168-.316.519-.653 1.022-.99.5-.335 1.14-.662 1.874-.963l-.093-.225c-.743.305-1.398.64-1.916.986-.516.345-.905.709-1.102 1.078l.215.114zm2.896-1.953l.108-.044-.091-.226-.11.045.093.225zm-2.896 1.953c.172-.324.536-.67 1.059-1.015.52-.342 1.185-.676 1.945-.982l-.091-.226c-.77.31-1.45.651-1.988 1.005-.535.353-.939.726-1.14 1.104l.215.114zm3.004-1.997a18.84 18.84 0 011.46-.516l-.07-.232c-.52.16-1.017.336-1.481.522l.09.226zm-.095-.224a1.784 1.784 0 01-.102.041l.085.228c.04-.014.078-.03.115-.047l-.098-.222zM5.755 5.84v4.071h.243v-4.07h-.243zm.24 4.093c.106-.574.565-1.082 1.206-1.523.638-.439 1.433-.797 2.17-1.08l-.087-.227c-.743.286-1.56.652-2.22 1.107-.658.452-1.185 1.008-1.307 1.68l.239.043zM9.372 7.33c.093-.035.184-.07.274-.102L9.56 7l-.277.103.087.227zm0 0c.491-.188.953-.341 1.323-.463l-.076-.23c-.37.12-.837.276-1.334.466l.087.227zM5.634 8.688l.121 1.235.242-.024-.121-1.235-.242.024zm.364-2.848v-.567h-.243v.567h.243zm-.122 2.824c-.08-.816-.577-1.477-1.246-1.998-.67-.52-1.522-.91-2.344-1.185l-.077.23c.807.27 1.632.65 2.271 1.147.64.498 1.082 1.105 1.154 1.83l.242-.024zM2.286 5.48l-.017-.006-.077.231.017.006.077-.23zm-.017-.006c-.404-.134-.8-.24-1.167-.32l-.052.237c.358.079.747.183 1.142.314l.077-.23zm.017.006c-.41-.137-.812-.245-1.184-.326l-.052.237c.364.08.758.186 1.16.32l.076-.23zM5.922 15.56c-.005-.4.009-.764.061-1.093l-.24-.038c-.055.349-.069.728-.064 1.134l.243-.003z"
				></path>
				<circle
					cx="5.855"
					cy="15.521"
					r="0.446"
					fill="#F4A155"
					stroke="#04134C"
					strokeWidth="0.162"
				></circle>
				<circle
					cx="5.855"
					cy="10.661"
					r="0.446"
					fill="#F4A155"
					stroke="#04134C"
					strokeWidth="0.162"
				></circle>
				<circle
					cx="5.855"
					cy="6.245"
					r="0.446"
					fill="#F4A155"
					stroke="#04134C"
					strokeWidth="0.162"
				></circle>
				<circle
					cx="9.339"
					cy="7.177"
					r="0.446"
					fill="#F4A155"
					stroke="#04134C"
					strokeWidth="0.162"
				></circle>
				<circle
					cx="2.333"
					cy="9.932"
					r="0.446"
					fill="#F4A155"
					stroke="#04134C"
					strokeWidth="0.162"
				></circle>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-bank-note"
				fill="none"
				viewBox="0 0 24 25"
			>
				<circle
					cx="16"
					cy="16.51"
					r="1.5"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7 21.01H3a1 1 0 01-1-1V4.508a1 1 0 01.551-.894l.99-.498a1 1 0 01.892-.002l1.573.777 1.54-.774a1 1 0 01.895-.001L10 3.892l1.559-.776a1 1 0 01.894.001l1.541.774 1.573-.777a1 1 0 01.892.002l.99.498a1 1 0 01.551.894V9.01M6 9.01h8.004M7 15.01H6M6.004 12.01H7"
				></path>
				<rect
					width="12"
					height="9"
					x="22"
					y="21.01"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					rx="2"
					transform="rotate(-180 22 21.01)"
				></rect>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-lock"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fillRule="evenodd"
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M17 21H7a2 2 0 01-2-2v-7a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M8 10V7v0a4 4 0 014-4v0a4 4 0 014 4v3"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-wallet-2"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M3.039 7.915H19a2 2 0 012 2V19c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V8.291A2 2 0 014.294 6.42l10.353-3.909A1 1 0 0116 3.446v4.468"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.999 14.125a.376.376 0 00.001.75.375.375 0 10-.001-.75"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-wallet-3"
				fill="none"
				viewBox="0 0 24 25"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.499"
					d="M21.004 11.51v-2a2.5 2.5 0 00-2.5-2.5h-13a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5v-2M18.5 6.963L16.135 3.81a2 2 0 00-2.71-.464L7.93 7.01"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.499"
					d="M18.5 11.51H21a1 1 0 011 1v3a1 1 0 01-1 1h-2.5a2.5 2.5 0 01-2.5-2.5v0a2.5 2.5 0 012.5-2.5v0z"
					clipRule="evenodd"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-maps"
				fill="none"
				viewBox="0 0 24 25"
			>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12 13.01v0a3 3 0 01-3-3v0a3 3 0 013-3v0a3 3 0 013 3v0a3 3 0 01-3 3z"
					clipRule="evenodd"
				></path>
				<path
					fillRule="evenodd"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12 21.01s-7-5.75-7-11a7 7 0 1114 0c0 5.25-7 11-7 11z"
					clipRule="evenodd"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-interrogacao"
				fill="none"
				viewBox="0 0 21 21"
			>
				<path
					stroke="#868E96"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10.334 17.51v0a7.5 7.5 0 01-7.5-7.5v0a7.5 7.5 0 017.5-7.5v0a7.5 7.5 0 017.5 7.5v0a7.5 7.5 0 01-7.5 7.5z"
					clipRule="evenodd"
				></path>
				<path
					stroke="#868E96"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M10.335 11.052v-.209c0-.68.42-1.05.842-1.333.412-.277.824-.64.824-1.306a1.666 1.666 0 10-3.333 0M10.334 13.343a.208.208 0 10.002.417.208.208 0 00-.002-.417"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon_config_filter"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M3.385 4V1.5M3.385 16.5V7.333M9.218 10.667V1.5M9.218 16.5V14M15.052 4V1.5M15.052 16.5V7.333M4.564 4.488a1.667 1.667 0 11-2.357 2.357 1.667 1.667 0 012.357-2.357M10.397 11.155a1.667 1.667 0 11-2.357 2.357 1.667 1.667 0 012.357-2.357M16.23 4.488a1.667 1.667 0 11-2.356 2.357 1.667 1.667 0 012.357-2.357"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-green-legend"
				fill="none"
				viewBox="0 0 25 7"
			>
				<path
					stroke="#1CC066"
					strokeLinecap="round"
					strokeWidth="2"
					d="M1.992 3.492L23.991 3.319"
				></path>
				<circle cx="13" cy="3.5" r="2.5" fill="#1CC066" stroke="#1CC066"></circle>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-red-legend"
				fill="none"
				viewBox="0 0 25 7"
			>
				<path
					stroke="#EC3539"
					strokeLinecap="round"
					strokeWidth="2"
					d="M1.991 3.492L23.99 3.319"
				></path>
				<circle
					cx="12.999"
					cy="3.5"
					r="2.5"
					fill="#EC3539"
					stroke="#EC3539"
				></circle>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-title-caixa-geral"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M22.004 17.002v-3.001c0-.83-1.68-1.5-3.752-1.5-2.07 0-3.75.671-3.751 1.5v6.002c.001.829 1.68 1.501 3.752 1.501s3.75-.672 3.751-1.5V14M7.628 13.867l3.658-2.23V6.984M19.773 8.999A9.001 9.001 0 1011 20.003"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.502 14.001c0 .829 1.68 1.5 3.751 1.5 2.072 0 3.751-.671 3.751-1.5M14.502 17.002c0 .829 1.68 1.5 3.751 1.5 2.072 0 3.752-.671 3.752-1.5"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-user-search-title"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M11 15H7a4 4 0 00-4 4v1"
				></path>
				<circle
					cx="11"
					cy="7"
					r="4"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<circle
					cx="17.444"
					cy="16.556"
					r="3.556"
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></circle>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.93 19.07L13 21"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-check-with-circle"
				fill="none"
				viewBox="0 0 25 24"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.25"
					d="M12.883 21v0a9 9 0 01-9-9v0a9 9 0 019-9v0a9 9 0 019 9v0a9 9 0 01-9 9z"
					clipRule="evenodd"
				></path>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.25"
					d="M16.883 10l-5 5-3-3"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-products-cash"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4 9V5a2 2 0 012-2h12a2 2 0 012 2v13a2 2 0 01-2 2h-6"
				></path>
				<path
					stroke="#1A2E77"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16 9V7h-2M13 10l-2.5-2M10.5 8L9 9.5M13.002 10L16 7M12 13h4M12 16h4M6.5 12v.808M4.5 14.424a1.839 1.839 0 012-1.616M6.5 20v-.808M8.5 17.576a1.839 1.839 0 01-2 1.616M8.45 14.071a1.95 1.95 0 00-1.95-1.263M4.55 17.929a1.95 1.95 0 001.95 1.263M4.5 14.424v0c0 .684.483 1.273 1.154 1.407l1.692.338c.671.134 1.154.723 1.154 1.407v0"
				></path>
			</symbol>

			<symbol
				xmlns="http://www.w3.org/2000/svg"
				id="icon-accumulated"
				fill="none"
				viewBox="0 0 28 17"
			>
				<path
					fill="#1CC066"
					d="M.97 15.22a.75.75 0 101.06 1.06L.97 15.22zm9.53-8.47l.53-.53-.53-.53-.53.53.53.53zm5.5 5.5l-.53.53.53.53.53-.53-.53-.53zm11.75-11A.75.75 0 0027 .5h-6.75a.75.75 0 000 1.5h6v6a.75.75 0 001.5 0V1.25zM2.03 16.28l9-9-1.06-1.06-9 9 1.06 1.06zm7.94-9l5.5 5.5 1.06-1.06-5.5-5.5-1.06 1.06zm6.56 5.5l11-11L26.47.72l-11 11 1.06 1.06z"
				></path>
			</symbol>

		</defs>

		{/* MERCADO SOLAR */}

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="overflow-absolute-login"
      fill="none"
      viewBox="0 0 960 975"
    >
      <mask
        id="mask0_298_16338"
        style={{ maskType: 'alpha' }}
        width="960"
        height="975"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="url(#paint0_linear_298_16338)"
          fillOpacity="0.2"
          d="M0 0H960V975H0z"
        ></path>
      </mask>
      <g
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        mask="url(#mask0_298_16338)"
      >
        <path d="M3.823 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.01-8.682C-3.26-.368-2.012.02-2.012.989v5.723h5.025a.987.987 0 01.81 1.549zM49.823 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.01-8.682c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.01-8.682c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 8.26l-6.011 8.684c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.55l6.011-8.682c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.55zM49.823 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.55zM95.822 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.55zM141.822 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM187.821 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM233.821 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM279.821 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM325.82 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM371.82 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM417.82 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM463.819 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM509.819 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM555.819 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM601.818 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM647.818 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM693.817 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM739.817 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM785.817 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM831.816 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM877.816 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM923.815 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM969.815 57.631l-6.011 8.683c-.551.795-1.798.406-1.798-.562V60.03h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55zM3.823 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 107.002l-6.011 8.683c-.551.795-1.798.406-1.798-.562V109.4h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 156.373l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 205.743l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 255.114l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 304.485l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 353.856l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 403.226l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 452.597l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 501.967l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 551.338l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 600.709l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 650.079l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 699.45l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 748.821l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 798.191l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 847.562l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 896.933l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM3.823 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM49.823 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM95.822 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.01-8.683c.552-.795 1.799-.406 1.799.562v5.723h5.025a.987.987 0 01.81 1.549zM141.822 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM187.821 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM233.821 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM279.821 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM325.82 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM371.82 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM417.82 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM463.819 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM509.819 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM555.819 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM601.818 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM647.818 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM693.817 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM739.817 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM785.817 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM831.816 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM877.816 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM923.815 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549zM969.815 946.303l-6.011 8.683c-.551.795-1.798.406-1.798-.562v-5.723h-5.025a.987.987 0 01-.811-1.549l6.011-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.549z"></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_298_16338"
          x1="480"
          x2="480"
          y1="0"
          y2="975"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="0.544" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon-eye-ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="var(--cor-1,#09121C)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.768 8.233c.976.976.976 2.56 0 3.538a2.503 2.503 0 01-3.537 0 2.5 2.5 0 113.537-3.537"
      ></path>
      <path
        stroke="var(--cor-1,#09121C)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.5 10c0-.55.127-1.093.372-1.594v0c1.262-2.58 4.052-4.24 7.128-4.24 3.076 0 5.866 1.66 7.128 4.24v0c.245.501.372 1.045.372 1.594 0 .549-.127 1.092-.372 1.593v0c-1.262 2.581-4.052 4.24-7.128 4.24-3.076 0-5.866-1.659-7.128-4.24v0A3.622 3.622 0 012.5 10z"
        clipRule="evenodd"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon-user-profile-ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="9.004"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.999a2.223 2.223 0 110 4.445A2.223 2.223 0 0112 8"
      ></path>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.002 16.475a5.66 5.66 0 01-8.003 0 2.111 2.111 0 011.964-1.334h4.076c.532 0 1.045.202 1.435.565.231.213.412.476.528.769z"
        clipRule="evenodd"
      ></path>
    </symbol>

		<symbol id="icon_settings_ms" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M3.90007 15.6468L5.29807 15.8608C6.33007 16.0188 7.06707 16.9428 6.99107 17.9838L6.88807 19.3948C6.85807 19.8058 7.08207 20.1928 7.45307 20.3718L8.48707 20.8698C8.85807 21.0488 9.30107 20.9818 9.60407 20.7028L10.6431 19.7428C11.4091 19.0348 12.5911 19.0348 13.3581 19.7428L14.3971 20.7028C14.7001 20.9828 15.1421 21.0488 15.5141 20.8698L16.5501 20.3708C16.9201 20.1928 17.1431 19.8068 17.1131 19.3968L17.0101 17.9838C16.9341 16.9428 17.6711 16.0188 18.7031 15.8608L20.1011 15.6468C20.5081 15.5848 20.8361 15.2798 20.9281 14.8778L21.1831 13.7598C21.2751 13.3578 21.1121 12.9408 20.7721 12.7088L19.6051 11.9098C18.7441 11.3198 18.4811 10.1678 19.0011 9.26278L19.7061 8.03678C19.9111 7.67978 19.8771 7.23278 19.6201 6.91078L18.9051 6.01378C18.6481 5.69178 18.2201 5.55878 17.8261 5.67978L16.4741 6.09378C15.4751 6.39978 14.4101 5.88678 14.0261 4.91578L13.5081 3.60278C13.3561 3.21878 12.9851 2.96678 12.5721 2.96778L11.4261 2.97078C11.0131 2.97178 10.6431 3.22578 10.4931 3.61078L9.98807 4.90878C9.60807 5.88578 8.53807 6.40278 7.53607 6.09478L6.12807 5.66278C5.73307 5.54078 5.30307 5.67478 5.04607 5.99878L4.33607 6.89678C4.07907 7.22178 4.04807 7.66978 4.25707 8.02678L4.97807 9.25578C5.50907 10.1618 5.24907 11.3248 4.38307 11.9178L3.23007 12.7078C2.89007 12.9408 2.72707 13.3578 2.81907 13.7588L3.07407 14.8768C3.16507 15.2798 3.49307 15.5848 3.90007 15.6468V15.6468Z" stroke="#09121C" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M13.916 10.0835C14.974 11.1415 14.974 12.8575 13.916 13.9155C12.858 14.9735 11.142 14.9735 10.084 13.9155C9.02603 12.8575 9.02603 11.1415 10.084 10.0835C11.142 9.02554 12.858 9.02554 13.916 10.0835" stroke="#09121C" strokeLinecap="round" strokeLinejoin="round"/>
		</symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_dollar_ms"
      fill="none"
      viewBox="0 0 26 26"
    >
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.001 9.999v-1M13.001 16.002v1M11.266 15.287c.256.44.726.713 1.236.718h1.096a1.405 1.405 0 00.34-2.768l-1.874-.471a1.405 1.405 0 01.34-2.768h1.097c.509.003.978.275 1.235.714"
      ></path>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 3.997a9.004 9.004 0 110 18.007 9.004 9.004 0 010-18.007"
      ></path>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 3.997a9.004 9.004 0 110 18.007 9.004 9.004 0 010-18.007"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_excel_ms"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.832 6.832V5.164c0-.92.746-1.667 1.667-1.667h8.337c.92 0 1.667.746 1.667 1.667v11.672c0 .92-.746 1.667-1.667 1.667H8.499c-.921 0-1.667-.746-1.667-1.667v-1.668"
      ></path>
      <rect
        width="8.337"
        height="8.337"
        x="4.331"
        y="6.832"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="2"
      ></rect>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.503 8.566h-5.835M18.503 13.501h-5.835M12.667 3.497v15.006M9.805 12.459l-2.5-2.918M7.304 12.459L9.805 9.54"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_happy"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fillRule="evenodd"
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.496 22.101L8.39 27.154a2.642 2.642 0 01-3.05-.495v0a2.642 2.642 0 01-.494-3.05l5.053-10.105a1.334 1.334 0 012.135-.347l6.809 6.809a1.334 1.334 0 01-.347 2.135z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.667 4v.667M6.667 9.333v-.666M9.334 6.667h-.667M4 6.667h.667M16 4a2.632 2.632 0 011.013 3.814L16 9.334M22.666 16l1.52-1.013A2.632 2.632 0 0128 16M25.333 22.667v.666M25.333 28v-.667M28 25.333h-.667M22.667 25.333h.666M25.333 4v.667M25.333 9.333v-.666M28 6.667h-.667M22.667 6.667h.666M18.666 13.333L20 12"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_rocket"
      fill="none"
      viewBox="0 0 34 34"
    >
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.797 17.165L16.6 22.924a1.334 1.334 0 01-1.777-.099l-3.647-3.647a1.334 1.334 0 01-.099-1.776l5.76-7.199A13.877 13.877 0 0127.67 4.995v0c.737 0 1.334.597 1.334 1.334v0c0 4.215-1.916 8.202-5.208 10.836z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.336 18.334v5.845c0 .505-.286.967-.738 1.193l-3.222 1.611a1.334 1.334 0 01-1.862-.77l-.848-2.544M10.33 18.334l-2.542-.848a1.334 1.334 0 01-.771-1.862l1.611-3.222a1.334 1.334 0 011.193-.737h5.845"
      ></path>
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.663 28.454l-3.668.551.551-3.668a2.74 2.74 0 012.303-2.303v0a2.74 2.74 0 013.117 3.117v0a2.74 2.74 0 01-2.303 2.303v0z"
        clipRule="evenodd"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_file_charts"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.003 10V7.826a2 2 0 00-.587-1.415l-2.829-2.83a2 2 0 00-1.415-.585H5.998a2 2 0 00-2.001 2v14.006a2 2 0 002 2.001H10"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.002 7.999h-4.001a1 1 0 01-1-1V2.996"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 17.252H16.001V21.003999999999998H13z"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.002 13.001H19.003V21.003999999999998H16.002z"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.003 15.252H22.004V21.004H19.003z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_task_list"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.998 2.997l1.3-1.626c.191-.237.478-.375.782-.375h3.84c.305 0 .592.138.782.375l1.3 1.626v1a1 1 0 01-1 1H5.998a1 1 0 01-1-1v-1 0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.003 11V4.998a2 2 0 00-2-2h-2.001M4.998 2.997h-2a2 2 0 00-2.001 2v13.006a2 2 0 002 2.001H9"
      ></path>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.768 17.694a1.262 1.262 0 010-1.38C12.617 15.03 13.95 14 15.283 14c1.333 0 2.665 1.029 3.514 2.311.275.417.275.966 0 1.381-.85 1.282-2.182 2.311-3.514 2.311-1.334.001-2.666-1.027-3.515-2.31z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.382 16.904a.141.141 0 010 .2.141.141 0 01-.201 0 .141.141 0 010-.2.141.141 0 01.2 0M4.998 10h8.004M4.998 15.002H7"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_download"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.964 10.259L11 13.223 8.035 10.26M11 4.33v8.893M17.67 14.705a2.965 2.965 0 01-2.965 2.964h-7.41a2.965 2.965 0 01-2.964-2.964"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_send_email"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 7.5H2.5M3.75 12.5H2.5M3.333 10H1.667M4.697 4.697a7.5 7.5 0 110 10.606"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.917 8.75V7.085a.833.833 0 011.28-.703l4.584 2.916a.833.833 0 010 1.406l-4.584 2.915a.833.833 0 01-1.28-.704V11.25"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.917 11.25L6.667 10l1.25-1.25"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_check_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.667 5.417L7.5 14.583l-4.167-4.166"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_close_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="var(--cor-1,#140D00)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.667 6.667l6.666 6.666M13.333 6.667l-6.666 6.666"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_chart_ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="18"
        height="18"
        x="21"
        y="21"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="5"
        transform="rotate(180 21 21)"
      ></rect>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16v-3M12 16V8M16 16v-5"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_clock_ms"
      fill="none"
      viewBox="0 0 26 25"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.936 13.608a8.999 8.999 0 11-10.37-10.37M21.5 8.973a8.92 8.92 0 01.437 1.634M20.005 6.37a8.95 8.95 0 00-1.2-1.2M16.202 3.676a8.901 8.901 0 00-1.635-.438"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.002 12.566H12.61V7.173"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_file_cursor_ms"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.388 17.569l-1.734.728a.988.988 0 00-.528.528l-.731 1.737a1 1 0 01-1.881-.105l-1.472-4.999a1 1 0 011.242-1.241l4.998 1.47a1 1 0 01.106 1.882z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 8.675h-3.5a2 2 0 01-2-2v-3.5"
      ></path>
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 12.175v-3.49a3 3 0 00-.879-2.122l-2.509-2.51a3 3 0 00-2.121-.878H7a3 3 0 00-3 3v12a3 3 0 003 3h5"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_gallery_photos"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.47 11.98l.001-.001a.192.192 0 100 0M3 13.475c.322-.05.647-.076.972-.078v0a6.805 6.805 0 016.806 6.806c-.003.325-.03.65-.078.972"
      ></path>
      <rect
        width="14"
        height="14"
        x="3"
        y="7.175"
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="3"
      ></rect>
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7.175v-1a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-1"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_dollar_ms2"
      fill="none"
      viewBox="0 0 26 25"
    >
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.001 9.174v-1M13.001 15.176v1M11.265 14.462c.257.44.726.713 1.236.718h1.097a1.405 1.405 0 00.34-2.768l-1.875-.471a1.405 1.405 0 01.341-2.768h1.097c.508.003.978.275 1.234.714"
      ></path>
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 3.171a9.004 9.004 0 110 18.008A9.004 9.004 0 0113 3.17"
      ></path>
      <path
        stroke="var(--cor-1, #4B5259)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 3.171a9.004 9.004 0 110 18.008A9.004 9.004 0 0113 3.17"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_edit_ms"
      fill="none"
      viewBox="0 0 16 17"
    >
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.529 10.588l6.884-6.884c.26-.26.682-.26.942 0l1.117 1.117c.26.26.26.682 0 .942l-6.884 6.883a.663.663 0 01-.471.195H3.333v-1.783c0-.176.07-.346.196-.47z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#140D00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.166 4.948l2.06 2.06"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_upload_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 12.917h-5"
      ></path>
      <circle
        cx="10"
        cy="10"
        r="7.5"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 10.417V6.25M8.334 7.917l1.667-1.667 1.666 1.667"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_help_ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.684 9.685a2.181 2.181 0 012.215-1.687A2.137 2.137 0 0114.149 10C14.15 11.504 12 12 12 13.001M12.125 15.752a.125.125 0 11-.25 0 .125.125 0 01.25 0"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.627 17.16a9.018 9.018 0 112.21 2.212l-2.842.631.632-2.843z"
        clipRule="evenodd"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_add_ms"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 12.841V3.508m4.667 4.667H3.834"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_sun_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#F69F00"
        d="M9.336.98a.654.654 0 011.132 0l1.047 1.814a.654.654 0 01-.566.98H8.855a.654.654 0 01-.566-.98L9.336.98zM15.813 3.315c.486-.13.93.314.8.8l-.542 2.023a.654.654 0 01-1.093.293L13.497 4.95a.654.654 0 01.293-1.093l2.023-.542zM18.889 9.466a.654.654 0 010 1.132l-1.814 1.047a.654.654 0 01-.98-.566V8.985c0-.503.544-.818.98-.566l1.814 1.047zM16.613 15.88a.654.654 0 01-.8.8l-2.023-.542a.654.654 0 01-.293-1.094l1.48-1.48a.654.654 0 011.094.292l.542 2.023zM10.468 19.02a.654.654 0 01-1.132 0l-1.048-1.814a.654.654 0 01.566-.98h2.095c.503 0 .817.544.566.98l-1.047 1.814zM3.984 16.68a.654.654 0 01-.8-.8l.542-2.024a.654.654 0 011.093-.293L6.3 15.044a.654.654 0 01-.293 1.094l-2.023.542zM.98 10.599a.654.654 0 010-1.132L2.794 8.42a.654.654 0 01.98.566v2.094a.654.654 0 01-.98.566L.98 10.599zM3.184 4.115a.654.654 0 01.8-.8l2.023.542c.486.13.649.737.293 1.093L4.82 6.43a.654.654 0 01-1.094-.292l-.542-2.023z"
      ></path>
      <circle cx="10" cy="10" r="5.229" fill="#F69F00"></circle>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_sun_vazio_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#09121C"
        fillOpacity="0.1"
        d="M9.336.98a.654.654 0 011.132 0l1.047 1.814a.654.654 0 01-.566.98H8.855a.654.654 0 01-.566-.98L9.336.98zM15.813 3.315c.486-.13.93.314.8.8l-.542 2.023a.654.654 0 01-1.093.293L13.497 4.95a.654.654 0 01.293-1.093l2.023-.542zM18.889 9.466a.654.654 0 010 1.132l-1.814 1.047a.654.654 0 01-.98-.566V8.985c0-.503.544-.818.98-.566l1.814 1.047zM16.613 15.88a.654.654 0 01-.8.8l-2.023-.542a.654.654 0 01-.293-1.094l1.48-1.48a.654.654 0 011.094.292l.542 2.023zM10.468 19.02a.654.654 0 01-1.132 0l-1.048-1.814a.654.654 0 01.566-.98h2.095c.503 0 .817.544.566.98l-1.047 1.814zM3.984 16.68a.654.654 0 01-.8-.8l.542-2.024a.654.654 0 011.093-.293L6.3 15.044a.654.654 0 01-.293 1.094l-2.023.542zM.98 10.599a.654.654 0 010-1.132L2.794 8.42a.654.654 0 01.98.566v2.094a.654.654 0 01-.98.566L.98 10.599zM3.184 4.115a.654.654 0 01.8-.8l2.023.542c.486.13.649.737.293 1.093L4.82 6.43a.654.654 0 01-1.094-.292l-.542-2.023z"
      ></path>
      <circle
        cx="10"
        cy="10"
        r="5.229"
        fill="#09121C"
        fillOpacity="0.1"
      ></circle>
    </symbol>

		<symbol id="icon_close_ms" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
				<path stroke="var(--cor-1,#fff)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 1L1 9m0-8l8 8"></path>
			</symbol>

			<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_raio_ms"
      fill="none"
      viewBox="0 0 66 71"
    >
      <g filter="url(#filter0_d_274_18282)">
        <path
          fill="url(#paint0_radial_274_18282)"
          d="M39.823 35.575l-6.01 8.683c-.552.795-1.799.406-1.799-.562v-5.723H26.99a.987.987 0 01-.81-1.549l6.01-8.683c.551-.795 1.798-.406 1.798.562v5.723h5.025a.987.987 0 01.811 1.55z"
        ></path>
        <path
          fill="url(#paint1_radial_274_18282)"
          d="M32.19 27.741c.55-.795 1.797-.406 1.797.562L34 25l-1.81 2.741z"
        ></path>
        <path
          stroke="url(#paint2_radial_274_18282)"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M39.823 35.575l-6.01 8.683m6.01-8.683a.987.987 0 00-.81-1.549m.81 1.55L41 34l-1.988.026m-5.2 10.232c-.55.795-1.798.406-1.798-.562m1.798.562L32 46.5l.014-2.804m0 0v-5.723H26.99m0 0a.987.987 0 01-.81-1.549m.81 1.55H25l1.178-1.55m0 0l6.011-8.683m0 0c.551-.795 1.798-.406 1.798.562m-1.798-.562L34 25l-.013 3.303m0 0v5.723h5.025"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_274_18282"
          width="65"
          height="70.5"
          x="0.5"
          y="0.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.964706 0 0 0 0 0.623529 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_274_18282"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_274_18282"
            result="shape"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_274_18282"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(11.00002 13 -8.66664 7.33332 25 27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEED0"></stop>
          <stop offset="1" stopColor="#F69F00"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_274_18282"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(11.00002 13 -8.66664 7.33332 25 27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEED0"></stop>
          <stop offset="1" stopColor="#F69F00"></stop>
        </radialGradient>
        <radialGradient
          id="paint2_radial_274_18282"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(11.00002 13 -8.66664 7.33332 25 27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEED0"></stop>
          <stop offset="1" stopColor="#F69F00"></stop>
        </radialGradient>
      </defs>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_raio_circle_ms"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#140D00" rx="16"></rect>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.285 15.609l-5.537 7.998c-.508.732-1.656.374-1.656-.518v-5.271h-4.629a.909.909 0 01-.747-1.427l5.537-7.998c.508-.732 1.656-.374 1.656.518v5.271h4.629a.91.91 0 01.747 1.427z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_arrow_to_bottom_ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19V5M17.001 13.999L12 19l-5.001-5.001"
      ></path>
    </symbol>

		{/* HOME BENEFICIOS */}

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_paper_ms"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 8.5h3.333a4.167 4.167 0 014.167 4.167v5.774a4.167 4.167 0 01-1.22 2.946l-.893.893a4.167 4.167 0 01-2.946 1.22h-5.774A4.167 4.167 0 018.5 19.333V16"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.5 18.5H21a2.5 2.5 0 00-2.5 2.5v2.5M16 12.667h3.333M12.667 16h6.667M12.667 19.333h1.667M11 8.5v4.167M8.917 10.583L11 12.667M11 12.667l2.083-2.084"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_ambiente_ms"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.929 18.5H11c.92 0 1.666-.746 1.666-1.667v-1.666c0-.92.746-1.667 1.667-1.667H16c.921 0 1.667-.746 1.667-1.667V8.687M20.375 22.25c2.177 0 2.711-2.709 3.958-3.429a4.843 4.843 0 00-3.958-1.987M20.375 22.25a2.708 2.708 0 010-5.417M20.575 19.347a5.5 5.5 0 00-3.742 2.486M23.308 14.333a7.497 7.497 0 10-8.974 8.975"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_settings_ms2"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 17.417l-5.666 5.666c-.75.75-1.917.75-2.667 0a1.862 1.862 0 010-2.666l5.667-5.667c-.667-1.667-.25-3.583 1.083-4.917 1.417-1.416 3.5-1.666 5.167-1 .083 0 .083.084 0 .167l-3 3L20 14.167l3.084-3h.166c.834 1.666.417 3.75-1 5.166-1.416 1.334-3.333 1.667-5 1.084z"
        clipRule="evenodd"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_house_certificate_ms"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.501 23.503h2.263c.92 0 1.667-.746 1.667-1.667V9.33a.834.834 0 00-.834-.834H20.05a.834.834 0 00-.834.834v1.922"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.497 14.928l6.418-5.5a1.667 1.667 0 012.17 0l6.418 5.5M13.963 19.52l-1.622 1.622-.973-.973"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.727 20.847l.553.724.12.902c.067.5.46.893.96.96l.903.12.724.554c.4.306.956.306 1.357 0l.724-.553h0l.901-.12c.5-.067.894-.46.96-.96l.121-.904.554-.723c.306-.4.306-.956 0-1.357l-.554-.724-.12-.901c-.066-.5-.459-.894-.96-.96l-.903-.122-.723-.553a1.117 1.117 0 00-1.357 0l-.724.553h0l-.902.12c-.5.067-.893.46-.96.96l-.12.904-.554.724c-.306.4-.306.955 0 1.356z"
        clipRule="evenodd"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		{/*  */}

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_ambiente2_sm"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.684 12.973a3.027 3.027 0 000 6.054c2.466 0 3.072-3.028 4.485-3.835a5.512 5.512 0 00-4.485-2.219v0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.049 15.67a6.029 6.029 0 00-4.102 2.726"
      ></path>
      <circle
        cx="16"
        cy="16"
        r="7.503"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_cicle_life_sm"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.167 13.5v-3.333c0-.92.746-1.667 1.667-1.667h10c.92 0 1.666.746 1.666 1.667V21c0 .92-.746 1.667-1.666 1.667H18.5"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.167 13.5v-1.667H18.5M17.666 14.333l-2.083-1.666M15.583 12.667l-1.25 1.25M17.668 14.333l2.499-2.5M18.5 16.833h1.667M18.5 19.333h1.667"
      ></path>
      <circle
        cx="12.25"
        cy="19.75"
        r="3.75"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.999 18.344v1.688h1.407"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_torre_sm"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.167 24.333l-7.677-4.149 6.493-3.35M23.5 13.5h-1.667M8.5 13.5h1.667"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.833 24.333l2.5-15.833h3.333l2.5 15.833M23.5 24.333h-15M18.982 16.833l-5.495-2.97M23.5 11.417h-15"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_energia_solar_sm"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.03 10.462l-1.57-1.165a7.155 7.155 0 019.495 4.945M11.69 19.616l-.225 1.942A7.153 7.153 0 0111 10.863M21.288 17.933l1.794-.778a7.153 7.153 0 01-9.03 5.75M14.667 15.833l1 1 1.667-1.666"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="arrow_line_ms"
      fill="none"
      viewBox="0 0 245 130"
    >
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M244.42 3.733a.5.5 0 00-.149-.691L240.491.6a.5.5 0 00-.543.84l3.361 2.17-2.17 3.36a.5.5 0 10.84.542l2.441-3.78zM.584 128.762a.5.5 0 10.832.554l-.832-.554zm.832.554c.182-.272.365-.545.55-.817l-.828-.561c-.186.274-.37.549-.554.824l.832.554zm3.417-4.886c.388-.53.78-1.06 1.179-1.588l-.8-.602c-.4.532-.796 1.066-1.186 1.6l.807.59zm4.242-5.518c.413-.511.83-1.021 1.25-1.53l-.77-.638c-.424.513-.843 1.026-1.258 1.541l.778.627zm4.487-5.319c.434-.493.873-.986 1.317-1.477l-.743-.67c-.446.494-.887.99-1.325 1.486l.75.661zm4.706-5.13c.455-.476.913-.951 1.376-1.425l-.715-.699c-.466.477-.927.955-1.384 1.434l.723.69zm4.903-4.946c.472-.459.948-.918 1.428-1.375l-.69-.724c-.482.46-.96.92-1.435 1.382l.697.717zm5.079-4.77c.487-.443.979-.885 1.474-1.326l-.666-.747c-.497.443-.99.887-1.48 1.332l.672.74zm5.235-4.601c.502-.427 1.006-.853 1.515-1.278l-.642-.767c-.51.427-1.017.854-1.521 1.283l.648.762zm5.377-4.44c.513-.411 1.03-.822 1.55-1.231l-.62-.786c-.521.412-1.04.824-1.555 1.237l.625.78zm5.504-4.285c.524-.396 1.051-.792 1.581-1.186l-.597-.802c-.532.396-1.061.793-1.587 1.191l.603.797zm5.613-4.132c.536-.384 1.075-.767 1.616-1.149l-.577-.817c-.543.384-1.084.768-1.621 1.153l.582.813zm5.711-3.987c.549-.374 1.1-.746 1.655-1.118l-.557-.83c-.556.373-1.11.746-1.66 1.121l.562.827zm5.805-3.853c.56-.363 1.123-.725 1.689-1.086l-.539-.843c-.567.363-1.131.726-1.693 1.09l.543.839zm5.892-3.725c.566-.35 1.135-.698 1.706-1.046l-.52-.854c-.573.349-1.143.699-1.711 1.05l.525.85zm5.972-3.603c.571-.336 1.145-.672 1.721-1.008l-.503-.864a363.4 363.4 0 00-1.726 1.011l.508.861zm6.047-3.486c.575-.324 1.153-.648 1.734-.971l-.487-.874c-.582.324-1.161.649-1.739.974l.492.871zm6.116-3.374c.58-.313 1.162-.626 1.745-.937l-.47-.883c-.586.313-1.169.626-1.75.94l.475.88zM91.687 56l1.772-.912-.455-.89c-.594.304-1.187.609-1.777.914l.46.888zm6.213-3.15c.597-.297 1.196-.593 1.797-.888l-.44-.898c-.603.296-1.204.593-1.802.89l.445.895zm6.27-3.054c.6-.286 1.201-.571 1.804-.856l-.427-.904c-.604.285-1.207.57-1.807.857l.43.903zm6.325-2.96c.601-.276 1.204-.55 1.809-.825l-.413-.91c-.606.275-1.21.55-1.813.826l.417.91zm6.376-2.868c.603-.266 1.208-.532 1.814-.797l-.4-.916c-.608.265-1.214.531-1.818.798l.404.915zm6.389-2.767l1.848-.78-.387-.922c-.619.26-1.236.52-1.852.782l.391.92zm6.437-2.682c.615-.252 1.232-.503 1.85-.753l-.376-.927c-.619.25-1.236.502-1.852.754l.378.925zm6.483-2.603c.615-.242 1.232-.484 1.85-.725l-.363-.932c-.62.242-1.238.484-1.854.727l.367.93zm6.516-2.52c.619-.235 1.239-.47 1.861-.703l-.352-.936c-.623.234-1.244.469-1.864.704l.355.935zm6.527-2.433c.625-.229 1.252-.457 1.88-.685l-.34-.94-1.884.686.344.94zm6.568-2.36l1.88-.66-.33-.944c-.629.22-1.257.44-1.883.661l.333.943zm6.608-2.29l1.878-.635-.319-.947c-.628.211-1.255.423-1.881.636l.322.947zm6.608-2.206a618.49 618.49 0 011.906-.622l-.309-.951c-.637.207-1.274.414-1.908.622l.311.95zm6.64-2.139c.633-.2 1.267-.4 1.903-.599l-.299-.954-1.905.6.301.953zm6.677-2.073c.632-.193 1.266-.385 1.9-.577l-.289-.957-1.902.577.291.957zm6.68-2c.64-.188 1.281-.376 1.924-.562l-.28-.96c-.643.186-1.285.374-1.926.563l.282.959zm6.702-1.934l1.92-.541-.27-.963c-.642.18-1.283.36-1.923.542l.273.962zm6.736-1.873c.638-.175 1.277-.348 1.916-.52l-.26-.966-1.919.52.263.966zm6.734-1.805c.645-.17 1.291-.338 1.938-.506l-.252-.968c-.648.168-1.294.337-1.94.507l.254.967zm6.756-1.743a940.77 940.77 0 011.933-.487l-.242-.97-1.936.487.245.97zm6.789-1.687l1.929-.467-.234-.972c-.645.155-1.289.311-1.932.468l.237.971zm6.775-1.62l1.949-.454-.226-.974-1.951.455.228.974zm6.805-1.564c.647-.146 1.295-.29 1.943-.435l-.217-.976c-.65.144-1.298.29-1.946.436l.22.975zm6.824-1.508l.98-.212-.21-.977-.982.212.212.977z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="arrow_line_ms2"
      fill="none"
      viewBox="0 0 202 9"
    >
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M201.32 5.926a.5.5 0 00.065-.704l-2.877-3.46a.5.5 0 10-.769.638l2.557 3.077-3.077 2.556a.5.5 0 00.64.77l3.461-2.877zM.953 5.402a.5.5 0 10.094.995l-.094-.995zm.094.995l1.015-.094-.092-.996-1.017.095.094.995zm6.103-.554c.678-.06 1.356-.12 2.035-.178l-.087-.997-2.035.178.087.997zm7.124-.608l2.038-.166-.08-.997-2.04.166.082.997zm7.129-.565c.678-.052 1.357-.103 2.037-.153l-.074-.998-2.04.154.077.997zm7.132-.521c.679-.048 1.358-.095 2.038-.141l-.068-.998-2.04.141.07.998zm7.134-.478l2.04-.128-.062-.998-2.041.128.063.998zm7.138-.433c.68-.04 1.36-.078 2.04-.116l-.056-.998-2.042.115.058.999zm7.14-.388l2.04-.102-.049-1-2.042.103.051.999zm7.142-.342l2.041-.089-.042-.999-2.043.09.044.998zm7.145-.294c.68-.026 1.36-.05 2.041-.075l-.035-1-2.044.076.038 1zm7.146-.246c.68-.02 1.361-.041 2.042-.06l-.03-1-2.043.06.03 1zm7.147-.195c.681-.017 1.362-.032 2.043-.047l-.022-1c-.681.015-1.363.03-2.044.047l.023 1zm7.149-.145c.681-.011 1.362-.022 2.043-.031l-.015-1-2.045.031.017 1zm7.15-.091a923.42 923.42 0 012.042-.016l-.007-1c-.681.004-1.363.01-2.044.016l.009 1zm7.15-.036l1.02-.001v-1h-1.022l.001 1zm1.02-.001h1.022l.001-1h-1.023v1zm6.129.017c.681.003 1.362.008 2.043.013l.007-1c-.681-.005-1.363-.01-2.045-.013l-.005 1zm7.149.061l2.043.026.014-1-2.045-.026-.012 1zm7.15.108c.681.012 1.361.025 2.042.039l.02-1c-.681-.014-1.362-.027-2.044-.039l-.018 1zm7.148.153l2.042.052.026-1-2.043-.052-.025 1zm7.147.2c.681.02 1.361.042 2.042.065l.033-1-2.044-.065-.031 1zm7.145.245l2.041.079.04-1-2.043-.078-.038.999zm7.144.292c.681.03 1.361.06 2.041.092l.045-.999-2.042-.092-.044 1zm7.142.339l2.04.105.053-.998-2.043-.106-.05.999zm7.139.386l2.039.119.06-.998-2.042-.12-.057.999zm7.137.433l2.038.133.065-.998c-.679-.045-1.359-.09-2.039-.133l-.064.998zm7.133.48l2.038.147.072-.997c-.679-.05-1.359-.098-2.039-.147l-.071.998zm7.13.53c.679.052 1.358.106 2.037.16l.079-.997c-.679-.054-1.359-.108-2.039-.16l-.077.997zm7.127.577l2.034.173.086-.996c-.678-.059-1.357-.116-2.036-.174l-.084.997zm7.122.625l1.016.094.092-.996-1.017-.094-.091.996z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="arrow_line_ms3"
      fill="none"
      viewBox="0 0 246 128"
    >
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M243.868 127.49a.5.5 0 00.588-.392l.88-4.413a.5.5 0 00-.981-.196l-.782 3.923-3.922-.782a.5.5 0 10-.196.981l4.413.879zM1.105.975a.5.5 0 00-.21.977l.21-.977zm-.21.977l.98.212.211-.978-.98-.211-.211.977zm5.86 1.284l1.942.436.22-.976-1.945-.436-.217.976zm6.798 1.546c.65.15 1.3.302 1.948.454l.228-.974c-.65-.152-1.3-.304-1.95-.454l-.226.974zm6.793 1.606c.644.155 1.287.31 1.928.467l.237-.971c-.642-.157-1.286-.313-1.93-.468l-.235.972zm6.783 1.667c.645.161 1.29.324 1.933.486l.245-.969c-.644-.163-1.289-.326-1.935-.487l-.243.97zm6.75 1.723c.647.168 1.293.337 1.938.507l.254-.968c-.645-.17-1.292-.338-1.94-.507l-.252.968zm6.755 1.79l1.915.52.264-.964c-.639-.175-1.278-.348-1.919-.521l-.26.965zm6.731 1.853l1.92.54.272-.962-1.922-.541-.27.963zm6.697 1.912l1.923.562.282-.96c-.64-.188-1.283-.375-1.926-.562l-.28.96zm6.702 1.985l1.9.576.291-.956a689.06 689.06 0 00-1.902-.577l-.29.957zm6.673 2.05l1.902.6.302-.954-1.905-.6-.3.955zm6.636 2.116c.636.206 1.271.413 1.905.621l.312-.95c-.635-.208-1.271-.416-1.908-.622l-.309.95zm6.634 2.192l1.878.636.322-.947c-.626-.212-1.253-.425-1.881-.636l-.32.948zm6.605 2.265l1.88.66.333-.943c-.627-.221-1.254-.442-1.883-.661l-.33.944zm6.566 2.335c.629.227 1.255.455 1.88.684l.345-.939c-.627-.23-1.255-.458-1.884-.686l-.34.94zm6.545 2.414c.622.233 1.243.467 1.862.702l.355-.934a657.02 657.02 0 00-1.865-.704l-.352.936zm6.526 2.497c.618.24 1.235.483 1.85.725l.367-.93c-.617-.243-1.234-.485-1.854-.727l-.363.932zm6.483 2.574c.617.25 1.234.501 1.848.753l.379-.926a548.97 548.97 0 00-1.852-.754l-.375.927zm6.437 2.654l1.847.78.391-.92c-.615-.26-1.232-.521-1.851-.781l-.387.922zm6.422 2.75c.606.265 1.211.53 1.813.796l.404-.915c-.604-.266-1.21-.532-1.817-.797l-.4.916zm6.38 2.84c.604.273 1.207.548 1.808.824l.417-.909c-.602-.276-1.206-.552-1.812-.826l-.413.91zM139 46.931c.603.285 1.204.57 1.803.856l.43-.903c-.6-.286-1.202-.572-1.806-.857l-.427.904zm6.275 3.021c.601.295 1.2.59 1.797.887l.445-.895c-.598-.297-1.199-.594-1.801-.89l-.441.898zm6.237 3.125c.593.304 1.184.608 1.772.912l.46-.888c-.59-.305-1.182-.61-1.777-.914l-.455.89zm6.191 3.234c.584.312 1.165.624 1.745.937l.475-.88c-.581-.314-1.164-.627-1.75-.94l-.47.883zm6.127 3.339c.58.323 1.158.647 1.734.971l.491-.87c-.578-.326-1.157-.65-1.739-.975l-.486.874zm6.058 3.448c.576.336 1.15.672 1.721 1.008l.508-.861c-.573-.338-1.148-.675-1.726-1.01l-.503.864zm5.987 3.564c.571.348 1.139.696 1.705 1.046l.525-.851c-.567-.35-1.138-.7-1.71-1.049l-.52.854zm5.908 3.684c.565.361 1.128.723 1.688 1.085l.544-.84c-.562-.363-1.127-.726-1.694-1.088l-.538.843zm5.838 3.82c.554.371 1.106.744 1.654 1.117l.563-.827c-.551-.374-1.104-.748-1.66-1.121l-.557.83zm5.749 3.954c.542.382 1.08.765 1.616 1.149l.582-.813c-.537-.385-1.078-.77-1.621-1.153l-.577.817zm5.647 4.093c.53.395 1.057.79 1.581 1.187l.603-.798a260.33 260.33 0 00-1.587-1.19l-.597.801zm5.535 4.239c.52.41 1.037.82 1.55 1.23l.625-.78a231.54 231.54 0 00-1.556-1.236l-.619.786zm5.412 4.391c.508.425 1.013.85 1.515 1.277l.648-.761c-.504-.429-1.011-.856-1.521-1.283l-.642.767zm5.276 4.551c.495.441.986.883 1.474 1.326l.672-.74c-.49-.446-.984-.89-1.481-1.332l-.665.746zm5.124 4.719c.48.458.956.916 1.428 1.375l.697-.717a181.75 181.75 0 00-1.435-1.382l-.69.724zm4.955 4.894c.463.474.922.95 1.376 1.425l.723-.69c-.457-.479-.918-.956-1.383-1.433l-.716.698zm4.766 5.076c.443.492.882.984 1.317 1.477l.75-.661c-.437-.496-.879-.991-1.325-1.486l-.742.67zm4.553 5.264c.422.509.839 1.019 1.251 1.53l.778-.628c-.415-.514-.834-1.027-1.258-1.539l-.771.637zm4.315 5.458c.398.528.791 1.057 1.18 1.587l.806-.59a131.87 131.87 0 00-1.187-1.599l-.799.602zM243 126.46c.185.272.368.545.55.818l.832-.556c-.184-.274-.368-.549-.554-.823l-.828.561z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="arrow_line_ms4"
      fill="none"
      viewBox="0 0 119 40"
    >
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M1.681.651a.5.5 0 10-.382.924l.382-.924zm116.59 36.308a.5.5 0 00.149-.692l-2.441-3.78a.5.5 0 10-.84.542l2.17 3.36-3.361 2.17a.5.5 0 00.543.84l3.78-2.44zM1.299 1.575l.946.39.38-.924-.944-.39-.382.924zm5.698 2.32l1.905.759.368-.93c-.635-.252-1.269-.504-1.901-.758l-.372.929zm6.682 2.625c.637.245 1.275.49 1.915.734l.356-.934c-.638-.244-1.276-.488-1.911-.733l-.36.933zm6.715 2.54c.64.237 1.281.474 1.924.71l.345-.94c-.642-.235-1.282-.471-1.92-.708l-.349.937zm6.746 2.456c.642.23 1.286.459 1.932.687l.333-.943c-.644-.228-1.287-.456-1.929-.686l-.336.942zm6.774 2.376c.645.222 1.292.444 1.94.664l.322-.946c-.647-.22-1.293-.442-1.937-.664l-.325.946zm6.8 2.297c.648.215 1.298.43 1.949.643l.311-.95c-.65-.213-1.298-.427-1.945-.642l-.315.95zm6.826 2.222c.65.207 1.303.415 1.956.621l.301-.953a701.36 701.36 0 01-1.953-.62l-.304.952zm6.85 2.147c.653.2 1.307.401 1.963.6l.291-.956-1.96-.6-.294.956zm6.872 2.075c.654.194 1.31.387 1.968.58l.281-.96c-.656-.192-1.311-.386-1.965-.58l-.284.96zm6.893 2.004l1.972.56.272-.963a744.03 744.03 0 01-1.97-.559l-.274.962zm6.913 1.935l1.976.54.262-.965c-.659-.18-1.316-.359-1.973-.54l-.265.965zm6.93 1.867c.66.175 1.32.348 1.982.521l.253-.967-1.98-.52-.255.966zm6.947 1.801c.662.169 1.324.336 1.988.503l.244-.97a747.34 747.34 0 01-1.986-.502l-.246.97zm6.964 1.737l1.994.485.235-.972c-.665-.161-1.329-.322-1.992-.485l-.237.972zm6.98 1.673l1.997.467.226-.975c-.666-.154-1.331-.31-1.994-.466l-.229.974zm6.996 1.611l1.998.449.218-.976-1.996-.448-.22.975zm7.006 1.55l1.004.216.21-.977-1.002-.217-.212.977z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="arrow_line_ms5"
      fill="none"
      viewBox="0 0 202 9"
    >
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M1.046 2.961a.5.5 0 10-.092.996l.092-.996zm200.339.817a.5.5 0 00-.065-.704L197.859.198a.501.501 0 00-.64.769l3.077 2.556-2.557 3.077a.5.5 0 00.769.639l2.877-3.461zM.955 3.957l1.016.093.091-.996c-.339-.03-.677-.062-1.016-.093l-.092.996zm6.108.545c.679.059 1.357.117 2.037.174l.084-.996c-.679-.057-1.357-.115-2.035-.174l-.086.996zm7.131.592l2.039.16.077-.997-2.037-.16-.079.997zm7.135.543l2.04.146.07-.998c-.68-.048-1.359-.096-2.037-.146l-.073.998zm7.14.495c.679.044 1.359.089 2.04.132l.063-.998c-.68-.043-1.359-.088-2.038-.132l-.065.998zm7.14.447l2.042.119.058-.999c-.68-.039-1.36-.078-2.04-.119l-.06.999zm7.145.4l2.042.105.051-.999-2.04-.105-.053.998zm7.148.352l2.042.092.044-1-2.04-.091-.046.999zm7.149.306c.68.026 1.361.053 2.043.078l.038-.999-2.042-.079-.04 1zm7.15.259l2.045.065.03-1c-.68-.02-1.361-.042-2.041-.065l-.033 1zm7.153.212l2.044.053.025-1-2.042-.052-.027 1zm7.155.167l2.043.039.018-1c-.68-.012-1.361-.025-2.041-.039l-.02 1zm7.154.12c.681.01 1.362.018 2.044.026l.012-1c-.681-.008-1.362-.016-2.042-.026l-.014 1zm7.155.075c.681.005 1.363.01 2.045.013l.005-1c-.681-.003-1.362-.008-2.043-.013l-.007 1zm7.156.03h1.022v-1h-1.021l-.001 1zm1.022 0h1.023l-.001-1h-1.022v1zm6.134-.017c.682-.003 1.364-.008 2.045-.013l-.007-1c-.681.005-1.362.01-2.043.013l.005 1zm7.156-.062c.682-.008 1.364-.016 2.045-.026l-.014-1c-.68.01-1.361.018-2.042.027l.011 1zm7.156-.107c.682-.012 1.363-.026 2.044-.04l-.02-.999-2.042.04.018.999zm7.155-.153l2.044-.053-.027-1c-.68.019-1.361.036-2.042.053l.025 1zm7.153-.2l2.044-.065-.033-1-2.042.066.031.999zm7.152-.246c.681-.025 1.362-.052 2.043-.079l-.039-.999-2.042.079.038 1zm7.15-.292l2.043-.092-.046-1c-.68.032-1.36.063-2.041.093l.044.999zm7.149-.34c.681-.034 1.361-.07 2.042-.105l-.053-.999-2.04.106.051.999zm7.145-.386c.681-.039 1.362-.078 2.042-.119l-.06-.998-2.039.119.057.998zm7.144-.433l2.039-.133-.065-.998c-.679.045-1.359.09-2.038.133l.064.998zm7.14-.481c.68-.049 1.36-.097 2.039-.147l-.072-.997c-.679.05-1.358.098-2.038.146l.071.998zm7.136-.53c.68-.052 1.36-.106 2.039-.16l-.079-.997c-.679.054-1.358.108-2.037.16l.077.997zm7.134-.577l2.036-.174-.086-.996-2.034.173.084.997zm7.129-.626l1.017-.094-.092-.996-1.016.094.091.996z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_comofunfa_ms"
      fill="none"
      viewBox="0 0 42 42"
    >
      <ellipse
        cx="32.671"
        cy="31.838"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="4.168"
        ry="4.168"
      ></ellipse>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.14 10.162h9.363a4.168 4.168 0 014.169 4.168v13.34M22.475 13.497l-3.334-3.335M22.475 6.827l-3.334 3.335"
      ></path>
      <circle
        cx="9.328"
        cy="10.162"
        r="4.168"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.859 31.838h-9.363a4.168 4.168 0 01-4.168-4.169V14.332M19.524 28.503l3.335 3.335M19.524 35.173l3.335-3.335"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_help_chat_ms"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26 23.333h-4.667c-.4 0-.8.267-1.067.534l-.533.8c-.267.4-.667.666-1.067.666H12c-.4 0-.8-.266-1.067-.533L10.4 24c-.267-.4-.667-.533-1.067-.533H4.666c-.8 0-1.333.533-1.333 1.333v1.333C3.333 27.6 4.533 28.8 6 28.8h18.666c1.467 0 2.667-1.2 2.667-2.667V24.8c0-.933-.533-1.467-1.333-1.467v0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.8 7.333H7.065c-1.333 0-2.4.934-2.4 2.134v13.866M26 23.333v-7.066M18 10.667c-.134 0-.134.133-.134.133 0 .133.134.133.134.133l.133-.133s0-.133-.133-.133M21.333 10.667c-.134 0-.134.133-.134.133 0 .133.134.133.134.133.133 0 .133-.133.133-.133s0-.133-.133-.133M24.667 10.667c-.134 0-.134.133-.134.133l.134.133.133-.133s0-.133-.133-.133"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.333 18c-1.2 0-2.4-.267-3.333-.8l-3.867.8.8-3.867c-.534-1.066-.8-2.133-.8-3.466 0-4 3.333-7.334 7.333-7.334s7.2 3.334 7.2 7.334c0 4-3.333 7.333-7.333 7.333z"
        clipRule="evenodd"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_house_certificate_ms"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.501 23.503h2.263c.92 0 1.667-.746 1.667-1.667V9.33a.834.834 0 00-.834-.834H20.05a.834.834 0 00-.834.834v1.922"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.497 14.928l6.418-5.5a1.667 1.667 0 012.17 0l6.418 5.5M13.963 19.52l-1.622 1.622-.973-.973"
      ></path>
      <path
        fillRule="evenodd"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.727 20.847l.553.725.12.9c.067.501.46.894.96.961l.903.121.724.554c.4.306.956.306 1.357 0l.724-.554h0l.901-.12c.5-.067.894-.46.96-.96l.121-.903.554-.724c.306-.4.306-.956 0-1.356l-.554-.725-.12-.9c-.066-.501-.459-.895-.96-.961l-.903-.121-.723-.554a1.117 1.117 0 00-1.357 0l-.724.554h0l-.902.12c-.5.067-.893.46-.96.96l-.12.903-.554.724c-.306.4-.306.955 0 1.356z"
        clipRule="evenodd"
      ></path>
      <rect
        width="31"
        height="31"
        x="0.5"
        y="0.5"
        stroke="#F69F00"
        strokeOpacity="0.5"
        rx="15.5"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_line_effect_ms"
      fill="none"

      viewBox="0 0 207 58"
    >
      <path
        stroke="url(#paint0_linear_274_16005)"
        strokeWidth="17"
        d="M-7 7c50.241 50.241 136.005 48.078 216 31"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_274_16005"
          x1="-1.5"
          x2="542"
          y1="10"
          y2="109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F69F00"></stop>
          <stop offset="1" stopColor="#D2AF00"></stop>
        </linearGradient>
      </defs>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_line2_effect_ms"
      fill="none"
      viewBox="0 0 256 131"
    >
      <mask
        id="mask0_860_10695"
        style={{ maskType: 'alpha' }}
        width="256"
        height="136"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#D9D9D9"
          d="M29.706 21.507c.138.178.318.332.465.511.39.477.771.98 1.29 1.34.207.142.41.284.63.418.256.157.51.367.786.486.27.116.563.34.813.506.278.186.597.313.873.489 1.09.693 2.178 1.333 3.144 2.215.644.588.951 1.288 1.37 2.036.412.735.849 1.445 1.226 2.2.321.643.508 1.363.728 2.046.189.589.147 1.246.257 1.851.1.552.195 1.138.195 1.712 0 .527.139 1.05.139 1.573 0 .805.166 1.971-.417 2.627-.237.267-.278.654-.509.925-.172.203-.265.665-.509.787l-.48 92.27H256V21.021C146.532-4.884-80.5-7 29.361 21.02l.134.274c.07.072.152.136.21.212z"
        ></path>
      </mask>
      <g mask="url(#mask0_860_10695)">
        <path
          stroke="url(#paint0_linear_860_10695)"
          strokeWidth="17"
          d="M206.5 140.5C179.407 46.993 103.713 20.366 27.5 28"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_860_10695"
          x1="-336.5"
          x2="207"
          y1="33.5"
          y2="132.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F69F00"></stop>
          <stop offset="1" stopColor="#D2AF00"></stop>
        </linearGradient>
      </defs>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_circle_outside_img"
      fill="none"
      viewBox="0 0 104 104"
    >
      <g filter="url(#filter0_b_274_16006)">
        <circle
          cx="48"
          cy="48"
          r="44"
          fill="url(#paint0_linear_274_16006)"
          fillOpacity="0.5"
        ></circle>
      </g>
      <g filter="url(#filter1_d_274_16006)">
        <circle cx="48" cy="48" r="32" fill="#fff"></circle>
      </g>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M44.25 53l.5-14M57.627 46H38.34M52 57h-8M50 54c0 1.657.672 3 1.5 3M46 54c0 1.657-.672 3-1.5 3M50 54v-1M46 54v-1"
      ></path>
      <path
        fillRule="evenodd"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M40.714 39h14.572a2 2 0 011.994 1.858l.715 10A2 2 0 0156 53H40a2 2 0 01-1.995-2.142l.714-10A2 2 0 0140.714 39z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M51.75 53l-.5-14"
      ></path>
      <defs>
        <filter
          id="filter0_b_274_16006"
          width="112"
          height="112"
          x="-8"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="6"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_274_16006"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_274_16006"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_274_16006"
          width="104"
          height="104"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="4" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.3375 0 0 0 0 0.218638 0 0 0 0 0.00140625 0 0 0 0.06 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_274_16006"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_274_16006"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_274_16006"
          x1="4"
          x2="92"
          y1="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F69F00"></stop>
          <stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_phone_ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.048 13.869A12.633 12.633 0 017.41 10.06a.749.749 0 01.166-.827l.819-.819c.67-.671.67-1.62.085-2.206L7.306 5.035a2 2 0 00-2.828 0l-.652.651c-.741.741-1.05 1.81-.85 2.87.494 2.613 2.012 5.474 4.46 7.923 2.45 2.449 5.31 3.967 7.924 4.461 1.06.2 2.129-.109 2.87-.85l.65-.651a2 2 0 000-2.828l-1.172-1.173a1.5 1.5 0 00-2.121 0l-.903.904a.749.749 0 01-.827.166 12.674 12.674 0 01-3.81-2.639z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.92 5.17V2.83M17.09 6.82l1.65-1.64M18.75 11h2.33"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_maps_ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.116 14.187C5.562 14.655 3 15.96 3 17.5c0 1.933 4.029 3.5 9 3.5s9-1.567 9-3.5c0-1.54-2.562-2.845-6.116-3.313"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 7.833C18 4.612 15.314 2 12 2S6 4.612 6 7.833C6 12.208 12 17 12 17s6-4.792 6-9.167z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.414 6.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_mail_ms"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 9.5l-7.426 3.178a4 4 0 01-3.148 0L3 9.5"
      ></path>
      <rect
        width="18"
        height="15"
        x="3"
        y="5"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="4"
      ></rect>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_user_ms"
      fill="none"
      viewBox="0 0 21 22"
    >
      <circle
        cx="10.5"
        cy="11"
        r="7.503"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 7.665a1.852 1.852 0 110 3.705 1.852 1.852 0 010-3.705"
      ></path>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.835 14.73a4.716 4.716 0 01-6.67 0 1.771 1.771 0 011.637-1.112h3.397a1.757 1.757 0 011.636 1.111z"
        clipRule="evenodd"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
     id="icon_logo_ndt"
      fill="none"
      viewBox="0 0 56 24"
    >
      <g clipPath="url(#clip0_274_19252)">
        <path
          fill="#06F784"
          d="M2.76 24c1.438 0 2.605-1.18 2.605-2.637s-1.167-2.638-2.606-2.638c-1.439 0-2.605 1.181-2.605 2.638C.154 22.819 1.32 24 2.759 24z"
        ></path>
        <path
          fill="#fff"
          d="M16.656 9.978c3.3 0 3.56 3.517 3.56 4.571v9.1h3.475V13.625c0-2.285-.478-3.956-1.346-4.923-1.043-1.143-2.606-1.758-4.604-1.758-1.693 0-3.256.66-4.603 1.934-.043.044-.173.088-.217.044a.242.242 0 01-.13-.22V7.385H9.187v16.22h3.604v-7.78c.043-2.858.26-3.473.868-4.352.652-1.012 1.65-1.495 2.997-1.495zM42.972 23.517V0h-3.474v9.143c0 .044-.044.088-.087.088-.044 0-.087 0-.13-.044l-.26-.264C37.456 7.341 35.72 6.55 33.765 6.55c-2.259 0-4.126.836-5.602 2.462-1.477 1.626-2.259 3.736-2.259 6.154 0 2.505.782 4.615 2.259 6.286 1.52 1.626 3.43 2.461 5.688 2.461 1.911 0 3.648-.747 5.168-2.198l.26-.263c.044-.044.087-.044.131-.044.043 0 .087.044.087.087v1.89h3.474v.133zm-4.69-4.088c-.955 1.055-2.215 1.582-3.778 1.582-1.433 0-2.693-.527-3.648-1.626-.912-1.1-1.39-2.462-1.39-4.132 0-1.583.478-2.945 1.433-4 .956-1.055 2.215-1.627 3.648-1.627 1.52 0 2.78.528 3.735 1.583.955 1.099 1.433 2.461 1.433 4.088 0 1.67-.478 3.077-1.433 4.132zM52.7 24c1.302 0 2.3-.044 3.213-.483v-3.121c-.521.131-1.13.22-1.694.22-1.607 0-2.519-.924-2.519-2.594v-7.648c0-.044.044-.088.087-.088h4.17V7.033h-4.17c-.043 0-.087-.044-.087-.088V2.462h-3.474v4.483c0 .044-.043.088-.086.088h-2.085v3.253h2.085c.043 0 .087.044.087.088v7.912c0 3.648 1.65 5.714 4.472 5.714z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_274_19252">
          <path
            fill="#fff"
            d="M0 0H55.846V24H0z"
            transform="translate(.154)"
          ></path>
        </clipPath>
      </defs>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_circle_cliente"
      fill="none"
      viewBox="0 0 64 64"
    >
      <rect
        width="64"
        height="64"
        fill="url(#paint0_linear_274_19163)"
        fillOpacity="0.1"
        rx="32"
      ></rect>
      <path
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42.666 42.667v-1A5.667 5.667 0 0037 36H27a5.667 5.667 0 00-5.667 5.667v1"
      ></path>
      <circle
        cx="32"
        cy="25.333"
        r="5.333"
        stroke="#F69F00"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <rect
        width="63"
        height="63"
        x="0.5"
        y="0.5"
        stroke="url(#paint1_linear_274_19163)"
        strokeOpacity="0.2"
        rx="31.5"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_274_19163"
          x1="64"
          x2="0"
          y1="64"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F69F00"></stop>
          <stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_274_19163"
          x1="0"
          x2="32"
          y1="0"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F69F00"></stop>
          <stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </symbol>

		<svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <rect
        width="64"
        height="64"
        fill="url(#paint0_linear_274_19170)"
        fillOpacity="0.1"
        rx="32"
      ></rect>
      <path
        stroke="#CE7D03"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.33 32.334a3.335 3.335 0 113.334 3.36 3.343 3.343 0 01-3.335-3.36v0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#CE7D03"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34.669 28.999a.333.333 0 10-.004.666.333.333 0 00.004-.666M38.818 28.999a.333.333 0 10-.004.666.333.333 0 00.004-.666"
      ></path>
      <path
        stroke="#CE7D03"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.995 43.171v-.833a3.345 3.345 0 013.335-3.335H30a3.345 3.345 0 013.334 3.335v.833a.836.836 0 01-.834.834H20.83a.836.836 0 01-.834-.834v0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#CE7D03"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.033 23.997a9.326 9.326 0 1110.302 14.28"
      ></path>
      <rect
        width="63"
        height="63"
        x="0.5"
        y="0.5"
        stroke="url(#paint1_linear_274_19170)"
        strokeOpacity="0.2"
        rx="31.5"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_274_19170"
          x1="64"
          x2="0"
          y1="64"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#54C5D2"></stop>
          <stop offset="1" stopColor="#54C5D2" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_274_19170"
          x1="0"
          x2="32"
          y1="0"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#54C5D2"></stop>
          <stop offset="1" stopColor="#54C5D2" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_subtract_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#09121C"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.834 10H4.167"
        opacity="0.4"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_add_details_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="var(--cor-1,#09121C)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 15.833V4.167M15.834 10H4.167"
        opacity="0.4"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_trash_ms"
      fill="none"
      viewBox="0 0 26 26"
    >
      <path
        fill="#09121C"
        fillOpacity="0.4"
        d="M7.498 10a.5.5 0 00-1 0h1zm12.005 0a.5.5 0 00-1 0h1zM15.5 11a.5.5 0 10-1 0h1zm-1 7.002a.5.5 0 101 0h-1zM11.499 11a.5.5 0 00-1 0h1zm-1 7.002a.5.5 0 101 0h-1zM5.497 6.498a.5.5 0 100 1v-1zm15.006 1a.5.5 0 100-1v1zM8.524 6.84a.5.5 0 10.949.316l-.949-.316zm1.019-1.475l.474.158-.474-.158zm1.899-1.368v.5-.5zm3.117 0v.5-.5zm1.9 1.368l.475-.157-.474.157zm.068 1.79a.5.5 0 00.95-.315l-.95.315zM6.497 10v10.004h1V10h-1zm0 10.004A2.5 2.5 0 009 22.504v-1a1.5 1.5 0 01-1.501-1.5h-1zM9 22.504h8.003v-1H8.999v1zm8.003 0a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm2.5-2.5V9.998h-1v10.004h1zm-5.001-9.005v7.003h1V11h-1zm-4.002 0v7.003h1V11h-1zM5.497 7.498h15.006v-1H5.497v1zm3.976-.342l.544-1.633-.949-.316-.544 1.633.949.316zm.544-1.633a1.501 1.501 0 011.424-1.026v-1a2.5 2.5 0 00-2.373 1.71l.95.316zm1.425-1.026h3.117v-1h-3.117v1zm3.117 0a1.5 1.5 0 011.426 1.026l.949-.316a2.5 2.5 0 00-2.376-1.71l.002 1zm1.426 1.026l.542 1.632.95-.315-.543-1.632-.949.315z"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_arrow_left_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.667 6.667L8.334 10l3.333 3.333"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_arrow_right_ms"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.334 13.333L11.667 10 8.334 6.667"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_bell_notifications_ms"
      width="22"
      height="24"
      fill="none"
      viewBox="0 0 22 24"
    >
      <path
        stroke="#09121C"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.495 13.917V10.25c0-3.038 2.464-5.5 5.505-5.5a5.503 5.503 0 015.506 5.5v3.667c0 .903.41 1.759 1.115 2.325l.283.228c.841.674.363 2.03-.715 2.03H4.811c-1.078 0-1.556-1.356-.715-2.03l.283-.228a2.981 2.981 0 001.116-2.325z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#09121C"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.625 21.25h2.75"
      ></path>
      <circle
        cx="16"
        cy="6"
        r="5"
        fill="#E92C2C"
        stroke="#fff"
        strokeWidth="2"
      ></circle>
    </symbol>

		 <symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_hamburguer_ms"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M40 128L216 128"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M40 64L216 64"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M40 192L216 192"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_suitcase_ms"
      fill="none"
      viewBox="0 0 26 26"
    >
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.003 22.004H5.997a2 2 0 01-2-2v-9.005a2 2 0 012-2h14.006a2 2 0 012.001 2v9.004a2 2 0 01-2 2.001z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.002 22.004V6.998A2 2 0 0015 4.997h-4.002a2 2 0 00-2 2v15.007"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_location_ms"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.852 7.408a1.676 1.676 0 11-2.37 2.37 1.676 1.676 0 012.37-2.37"
      ></path>
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.152 8.38v0a5.02 5.02 0 01-1.806 3.856l-1.8 1.499A5.018 5.018 0 0013 16.004l-.332.996-.332-.996a5.024 5.024 0 00-1.548-2.269l-1.8-1.499A5.017 5.017 0 017.183 8.38v.028C7.182 4.986 10.016 3 12.667 3c2.65 0 5.485 1.986 5.485 5.408"
      ></path>
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.667 14.598c-2.41.627-4 1.69-4 2.902 0 1.933 4.029 3.5 9 3.5 4.97 0 9-1.567 9-3.5 0-1.212-1.591-2.276-4-2.902"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_settings_ms3"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.168 15l5 5a2.122 2.122 0 003 0v0a2.122 2.122 0 000-3l-5-5"
      ></path>
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.25 5.847a.19.19 0 01.05.085c.47 1.567.106 3.33-1.132 4.568-1.25 1.25-3.038 1.609-4.617 1.117l-8.347 8.347c-.813.813-2.139.874-2.98.09A2.122 2.122 0 014.168 17l8.383-8.383C12.06 7.037 12.417 5.25 13.668 4c1.238-1.238 3.001-1.602 4.568-1.132a.2.2 0 01.085.05l.162.163a.2.2 0 010 .283L15.848 6l2.32 2.32 2.636-2.636a.2.2 0 01.283 0l.162.163v0zM3.266 4.293l.674 2.023A1 1 0 004.89 7h2.278V4.721a1 1 0 00-.684-.949l-2.023-.674a.5.5 0 00-.512.121l-.562.562a.5.5 0 00-.12.512v0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#D78B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.173 7l3.5 3.5"
      ></path>
    </symbol>

		<symbol
      xmlns="http://www.w3.org/2000/svg"
			id="icon_three_points"
      fill="none"
      viewBox="0 0 28 4"
    >
      <path fill="#D78B00" d="M0 0H4V4H0z"></path>
      <path fill="#D78B00" d="M12 0H16V4H12z"></path>
      <path fill="#D78B00" d="M24 0H28V4H24z"></path>
    </symbol>


	<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_support_ms"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <rect
        width="208"
        height="88"
        x="24"
        y="72"
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="8"
      ></rect>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M84 72L172 160"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M156 72L232 148"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M24 84L100 160"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M192 160L192 200"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M64 160L64 200"
      ></path>
    </symbol>

	<symbol
      xmlns="http://www.w3.org/2000/svg"
      id="icon_faq_ms"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M200 176V64a23.9 23.9 0 00-24-24H40"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M104 104L168 104"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M104 136L168 136"
      ></path>
      <path
        fill="none"
        stroke="#4B5259"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M22.1 80A24 24 0 1164 64v128a24 24 0 1041.9-16h112a24 24 0 01-17.9 40H88"
      ></path>
    </symbol>

	</svg>
</>
export default Svg
