import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { GLOBAL } from "../utils/GLOBAL";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const { showToastify, currencyBR } = GLOBAL;
	const formattedData = (obj) => {
		return {
			id: obj.id,
			name: obj.nome,
			url: "https://melepimenta.com/wp-content/uploads/2021/02/Pao-integral-centeio-aveia-Baixa-2.jpg.webp",
			price: obj.preco,
			discountPrice: null,
			quantity: 0,
			category: obj.categoria_produto.nome,
			description: obj.descricao,
			stock: null
		}
	}

	const [reportCart, setReportCart] = useState('');
	const [menulistAndCategories, setMenulistAndCategories] = useState(async () => {
		

		// BUSCANDO E FORMATANDO PRODUTOS
		const products = []

		//BUSCANDO E FILTRANDO AS CATEGORIAS
		const arrCategories = data.cardapios_direcionados.map(item => {

			const categories = item.itemcardapio_set
				.filter(item => item.disponibilidade === true)
				.map(i => {
					return i.produto.get_categoria_produto.nome
				})
			return categories
		})

		const categories = [...new Set(...arrCategories)]
		if (categories.length > 1) categories.unshift('Todas');

		setMenulistAndCategories({ categories, products: [...products].flat() })
	})

	const handleChangesProduct = () => {
		const productsUpdated = menulistAndCategories.products?.map(product => {

			return cart.filter(internal => internal.id == product.id).map(internal => (
				{
					...product,
					quantity: internal.quantity
				}
			));
		}).flat();

		// quando o produto nao tem no cardapio direcionado pois o pedido veio do historico...
		// cart.map(item => {
		// 	let result = productsUpdated?.some(internal => internal.id == item.id);
		// 	if(!result)productsUpdated?.push(item);
		// })

		if (Array.isArray(productsUpdated) && productsUpdated !== undefined) {
			setCart(productsUpdated);
			localStorage.setItem('@mr.cart', JSON.stringify(productsUpdated));
		}
	}

	const [cart, setCart] = useState(() => {
		const cartStorage = localStorage.getItem('@mr.cart')
		if (cartStorage) return JSON.parse(cartStorage);
		return [];
	})

	useEffect(() => {
		handleChangesProduct();
	}, [menulistAndCategories])

	const addProductToCart = async (productID) => {
		try {
			const cartUpdated = [...cart];

			const productExists = cartUpdated.find(product => product.id === productID);

			if (productExists) {
				removeProduct(productExists.id)
				return;
			} else {
				const product = menulistAndCategories.products.find(product => product.id === productID);
				const newProduct = {
					...product,
					quantity: 1
				}

				cartUpdated.push(newProduct)
			}

			setCart(cartUpdated);
			localStorage.setItem('@mr.cart', JSON.stringify(cartUpdated));
		} catch (e) {
			showToastify('Erro na adição do produto');
		}

	}

	const [queueItemsRemove, setQueueItemsRemove] = useState([]);
	const removeProduct = (productID, queue = null) => {

		try {
			const cartUpdated = [...cart];
			if (queue) {
				// FIZ ESSA LOGICA CASO A PESSOA CLIQUE MUITO RAPIDO PARA REMOVER O ITEM DO CARRINHO
				// SE NAO TIVER ESSA LOGICA A APLICAÇÃO VAI EXCLUIR SOMENTE O ULTIMO CLIQUE POR CONTA DA ANIMAÇÃO DE EXCLUSAO
				let time = setTimeout(() => {
					queue?.map(id => {
				
						const productIndex = cartUpdated.findIndex(product => product.id === id);
						if (productIndex >= 0) {
							cartUpdated.splice(productIndex, 1);
							setCart(cartUpdated);
							localStorage.setItem('@mr.cart', JSON.stringify(cartUpdated));
						}
						setQueueItemsRemove([]);
					})
				}, 300)
				setTimeout(() => {
					clearTimeout(time)
				}, 1000);
			} else {
	
				const productIndex = cartUpdated.findIndex(product => product.id === productID);

				if (productIndex >= 0) {
					cartUpdated.splice(productIndex, 1);
					setCart(cartUpdated);
					localStorage.setItem('@mr.cart', JSON.stringify(cartUpdated));
				}
			}
		} catch (err) {
			showToastify('Erro na remoção do produto');
		}

	}

	const updateProductAmount = async (productID, amount) => {

		try {

			if (amount <= 0) {
				removeProduct(productID);
				return;
			}

			const cartUpdated = [...cart];
			const productExists = cartUpdated.find(product => product.id === productID);

			// Verificando estoque
			// const { data } = await axios.get(`http://localhost:4000/products/${productID}`)
			// const stockAmount = data.stock;
			// if (amount > stockAmount) {
			// 	showToastify('Quantidade indisponível no estoque :(');
			// 	return;
			// }

			//Atualizando estoque
			if (productExists) {
				productExists.quantity = amount;
				setCart(cartUpdated);
				localStorage.setItem('@mr.cart', JSON.stringify(cartUpdated));
			} else {
				throw Error();
			}


		} catch {
			showToastify('Erro ao atualizar o estoque');
		}
	}


	useEffect(() => {
		cartReport();
	}, [cart])

	const cartReport = () => {
		const report = cart.reduce((ac, v) => {
			ac.totalItems += 1;
			if (v.discountPrice > 0) {
				ac.amount += v.discountPrice * v.quantity;
				return ac
			}
			ac.amount += v.price * v.quantity
			return ac
		}, {
			totalItems: 0,
			amount: 0
		})

		setReportCart(report);
	}


	/************************  HISTORICO de pedidos *******************************************/
	const addOrderHistoryToCart = async (arr, loading) => {
		try {
			loading(true);
			const cartUpdated = [...cart];
			for (let currentItem of arr) {
				const productExists = cartUpdated.find(product => product.id === currentItem.produto.id);
				if (productExists) {
					let productUpdated = {
						...productExists,
						quantity: productExists.quantity + currentItem.quantidade
					}

					let index = cartUpdated.findIndex(product => product.id === currentItem.produto.id);
					cartUpdated[index] = productUpdated;

				} else {
					const product = menulistAndCategories.products.find(item => item.id == currentItem.produto.id);
					if (product) {
						const newProduct = {
							...product,
							quantity: currentItem.quantidade,
						}

						cartUpdated.push(newProduct)
					}
					// const productFormatted = {
					// 	idCardapio: currentItem.idCardapio,
					// 	id: product.id,
					// 	name: product.nome,
					// 	url: product.midia,
					// 	price: String(Number(product.preco).toFixed(2)).replaceAll('.', '').replaceAll(',', ''),
					// 	discountPrice: null,
					// 	quantity: 0,
					// 	category: product.get_categoria_produto.nome,
					// 	idCategory: product.get_categoria_produto.id,
					// 	description: product.descricao || `${product.nome} Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eos rem nulla tenetur! In itaque odit veritatis, labore sint optio, voluptate rerum quas voluptatem, harum expedita aliquam delectus ipsa inventore!`,
					// 	stock: null
					// }
					// console.log('product', product)

				}

				setCart(cartUpdated);
				localStorage.setItem('@mr.cart', JSON.stringify(cartUpdated));
			}

		} catch (e) {
		
			showToastify('Erro na adição do pedido ao carrinho');
		} finally {
			loading(false);
		}

	}


	return (
		<CartContext.Provider value={{ cart, setCart, cartReport, addProductToCart, addOrderHistoryToCart, reportCart, updateProductAmount, removeProduct, menulistAndCategories, setQueueItemsRemove, queueItemsRemove }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)