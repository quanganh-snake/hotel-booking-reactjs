import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AutoScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window &&
			window.scroll({
				top: 0,
				behavior: "smooth",
			});
	}, [pathname]);

	return null;
};
