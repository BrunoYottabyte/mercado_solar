import React, { useRef, useEffect } from "react";

export const DisabledContainer = ({ children, verificacao, classe }) => {
	const div = useRef(null)
	const observer = new MutationObserver(handleMutationObserver);

	function handleMutationObserver(mutations) {

		mutations.forEach(function (mutation) {
			if (mutation.attributeName === "class") {
				!div.current.classList.contains("disabled") && div.current.classList.add("disabled")
			}

		})
	}

	useEffect(() => {
		if (!verificacao) {
			const config = { childList: true, attributes: true };
			observer.observe(div.current, config);
		}
	}, []);

	if (!verificacao)
		return <div ref={div} className={`${classe ? classe : ""} disabled`}>{children}	</div>

	observer.disconnect()

	return children
}

