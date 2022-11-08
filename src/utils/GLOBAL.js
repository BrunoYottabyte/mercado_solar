import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"
import moment from "moment";
import currency from "currency.js";


export const GLOBAL = {
	debounce: (time, fn, name) => {
    return (...args) => {
      clearTimeout(window[name]);
      window[name] = setTimeout(() => {
        fn(...args);
      }, time);
    };
  },
	debounceFunction: (fn, wait = 1000, timing) => {
		return (...args) => {
			clearTimeout(window[timing]);
			window[timing] = setTimeout(() => {
				fn(...args);
			}, wait);
		};
	},

	currencyFormatterReal: (value) => {
		if (!Number(value)) return "";
		const amount = new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(value);
		return `${amount}`;
	},

	CNPJFormatter: (value) => {
		if (!Number(value)) return "";

		if (value.length >= 15) {
			return cnpj(value).trim().slice(0, 18).trim();
		}

		return cnpj(value);

		function cnpj(v) {
			v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
			v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
			v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
			v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
			v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
			return v;
		}
	},

	CPFFormatter: (value) => {
		if (!Number(value.replaceAll('.','').replaceAll('-',''))) return "";

		// para previnir o bug de mudar a formataçao
		if (value.length === 12)
			return value
				.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
				.slice(0, 14);

		return cpf(value.trim()).slice(0, 14);

		function cpf(v) {
			v = v
				.replace(/\D/g, "") //Remove tudo o que não é dígito
				.replace(/(\d{3})(\d)/, "$1.$2") //Coloca um ponto entre o terceiro e o quarto dígitos
				.replace(/(\d{3})(\d)/, "$1.$2") //Coloca um ponto entre o terceiro e o quarto dígitos de novo (para o segundo bloco de números)`
				.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

			return v;
		}
	},

	RgFormatter:(v) => {
		v=v.replace(/\D/g,"").replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1})$/, '$1-$2')
		return v;
	},

	CepFormatter: (v) => {
		v=v.replace(/\D/g,"")                
		.replace(/^(\d{5})(\d)/,"$1-$2") 
		return v;
	},

	validarPorLength: (value, tamanho) => value?.length > tamanho,

	showToastify: (text, duration = 3500, classe, style) => {
		Toastify({
			text: text,
			duration: duration,
			position: 'center',
			className: classe ? classe : "",
			style: style ? style : {}
		}).showToast();
	},

	

	stringToNumber: (string) => {
		return Number(string.replace(',', '.').replace(/\./g, '')).toFixed(0)
	},

	generateRange: (totalElementos, valor) => {
		return Array(totalElementos).fill(valor);
	},

	currencyMask: (v) => {
		let value = v
		value = value.replace(/\D/g, "");
		value = value.replace(/(\d)(\d{2})$/, "$1,$2");
		value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
		return value;
	},
	
	currencyBR: (v) => currency(v,{
		decimal: ',',
		fromCents: true,
		symbol: 'R$ ',
		separator: '.'
	}).format(),

	valueToBackEnd: (v) => currency(v, { separator: "", decimal: ",", symbol: "", }).format(),

	numberPost: (v) => {
		// TEM QUE VIM EM STRING
		// NAO ADIANTA FORMATAR
		let part1 = v.toString().replaceAll('.','').replaceAll(',','').slice(0, -2);
		let result = part1 + '.' + v.slice(-2);
		return result
	},

	onlyNumbers:(value) => {
		const numbers = value.replace(/\D/g, "");
		if(numbers == 0) return '';
		return numbers;
	},

	clearFeedbackErrorRequestDuplicated: (obj) => {
		const arrNative = Object.keys(obj).map(item => obj[item])
		const arrFormated = [...new Set(...arrNative)];
		return arrFormated;
	},

	realToNumber: (v) =>{
        const centavos = `${v}`.startsWith("0.")
        const value = parseFloat(`${v}`.replace(/\./g, '').replace(',', '.'))
        return centavos ? Number(`0.${value}`) : value
    },

	oldDate: (param, arr) => {
		return arr.sort((a, b) => {
			console.log(moment(a[param], moment.defaultFormat).toDate().getTime() - moment(b[param], moment.defaultFormat).toDate().getTime())
			return moment(a[param], moment.defaultFormat).toDate().getTime() - moment(b[param], moment.defaultFormat).toDate().getTime();
		})
	},

	recentDate: (param, arr) => {
		return arr.sort((a, b) => {
			console.log(moment(b[param], moment.defaultFormat).toDate().getTime() - moment(a[param], moment.defaultFormat).toDate().getTime())
			return moment(b[param], moment.defaultFormat).toDate().getTime() - moment(a[param], moment.defaultFormat).toDate().getTime();
		})
	},

	dateAndHoursToDate: (param, arr) => {
		return arr.map(item => ({
			...item,
			[param]: moment(item[param]).format('DD/MM/YYYY')
		}))
	}

};

window.global = GLOBAL;