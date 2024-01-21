import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

export const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const handleBackToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="fixed right-10 bottom-20">
			<div onClick={handleBackToTop} className={clsx("w-10 h-10 bg-red-500 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60", !isVisible && "hidden")}>
				<FaAnglesUp color="white" />
			</div>
		</div>
	);
};
