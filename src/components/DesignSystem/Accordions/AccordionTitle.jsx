import SvgUse from "../../svg/svgUse";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

const AccordionTitle = ({ iconID, children, id, parent = false, classe, classeSvg }) => {
	const title = useRef(null);

	const handleClick = () => {
		const { current } = title;
		const idClicado = current.dataset.id;
		const contents = [...document.querySelectorAll(`.accordion-content`)];
		const contentRelativo = document.querySelector(
			`.accordion-content[data-id='${idClicado}']`
		);
		const containerRelativo = contentRelativo.closest(".accordions-container");
		const divRelativa = contentRelativo.querySelector(".content-container");
	
		//quando tem parent 
		contents
			.filter((i) => i.dataset.id !== idClicado)
			.forEach((i) => {
				// if (parent) {
				// 	if(i.closest(".accordions-container").classList.contains("permanent")) return
				// 		i.closest(".accordions-container").classList.remove("active")
					
				// }
			});

		if (!containerRelativo.classList.contains("permanent")) {
			
			if (!containerRelativo.classList.contains("active")) {
				gsap.to(contentRelativo, {duration:0.25, ease:"power3" ,height: divRelativa.scrollHeight });
			} else{
				gsap.to(contentRelativo, {duration:0.25, ease:"power3", height: 0 });

			}

			containerRelativo.classList.toggle("active");
		}
	};

	// ADICIONANDO HEIGHT AUTOMATICO CASO SEJA ADICIONADO ALGUM ELEMENTO COM O ACCORDION ABERTO...
	const contents = [...document.querySelectorAll(`.accordion-content`)];
	useEffect(() => {
		contents.map((content) => {
			
			let containerRelativo = content.closest('.accordions-container');
			const divRelativa = content.querySelector(".content-container");

			if (containerRelativo.classList.contains("active")) {
				gsap.to(content, {duration:0.25, ease:"power3" ,height: divRelativa.scrollHeight });
			}
		})
	}, [contents])

	return (
		<div
			ref={title}
			className={`accordion-title ${classe ? classe : ""}`}
			onClick={handleClick}
			data-id={id}
		>
			{iconID && <SvgUse id={iconID} classe={classeSvg} />}
			{children}
		</div>
	);
};

export default AccordionTitle;
