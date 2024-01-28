import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAccessTime, MdArrowRightAlt } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={clsx("bg-sky-800", isVisible && "fixed top-0 left-0 right-0 z-[10] animate__animated animate__fadeInDown bg-opacity-80 shadow-lg")}>
			<div className="container mx-auto">
				<div className="flex justify-between">
					<div className="header__left flex flex-col lg:flex-row mx-auto lg:mx-0 items-center gap-2 lg:gap-10">
						<div className="header__left--logo w-20 lg:w-auto">
							<Link to={'/'}>
								<img src="/images/logo.svg" alt="Logo brand ivivu" />
							</Link>
						</div>
						<nav className="header__left--navbar">
							<ul className="flex gap-6">
								<li>
									<a href="#" className="font-semibold block hover:text-cyan-300 text-cyan-300 py-5 border-b-2 border-cyan-300">
										Khách sạn
									</a>
								</li>
								<li>
									<a href="#" className="font-semibold text-white block hover:text-cyan-300 py-5 ">
										Tours
									</a>
								</li>
								<li>
									<a href="#" className="font-semibold text-white block hover:text-cyan-300 py-5 ">
										Vé máy bay
									</a>
								</li>
								<li>
									<a href="#" className="font-semibold text-white block hover:text-cyan-300 py-5 ">
										Vé vui chơi
									</a>
								</li>
							</ul>
						</nav>
					</div>
					{/* End: .header__left */}
					<div className="hidden header__right lg:flex items-center gap-5">
						<div className="header__right--profile dropdown flex items-center gap-2">
							<div className="w-10 h-10 rounded-full border">
								<img src="/images/no-avatar.png" alt="no-avatar profile ivivu" />
							</div>
							<div className="">
								<div tabIndex={0} role="button" className="flex items-center gap-2 text-white">
									<p>Tài khoản</p>
									<FaChevronDown />
								</div>
							</div>
							<ul tabIndex={0} className="dropdown-content top-full mt-3 z-[1] p-2 bg-white rounded-md shadow min-w-60">
								<li>
									<a className="block w-full mb-2 px-3 py-2 rounded-full text-center bg-cyan-500 text-white font-medium cursor-pointer hover:opacity-70">Đăng nhập</a>
								</li>
								<li>
									<p className="text-sm">
										Chưa có tài khoản? <a className="text-cyan-500 cursor-pointer hover:opacity-70">Đăng ký</a> ngay
									</p>
								</li>
							</ul>
						</div>
						{/* End: .header__right--profile */}
						<div className="header__right--contact">
							<div className="contact__top flex items-center gap-2">
								<FaPhone size={26} className="text-cyan-400" />
								<p className="text-3xl font-bold text-cyan-400">0334350166</p>
							</div>
							<div className="contact__bottom dropdown cursor-pointer">
								<div tabIndex={1} role="button" className="contact__bottom--timeline hover:opacity-70 text-white text-sm flex items-center gap-2">
									<p className="flex items-center ">
										<MdOutlineAccessTime />
										<span>7h30</span>
										<MdArrowRightAlt />
										<span>21h00</span>
									</p>
									<p className="flex items-center ">
										<CiLocationOn />
										<span>Hồ Chí Minh</span>
									</p>
									<FaChevronDown />
								</div>
								<ul tabIndex={1} className="dropdown-content mt-2 z-[10] menu menu-md bg-white shadow-lg w-56 rounded-box">
									<li>
										<a className="font-medium grid grid-cols-2 items-center">
											<span className="col-span-1">Hồ Chí Minh</span>
											<span className="col-span-1 text-orange-400">0334350166</span>
										</a>
									</li>
									<li>
										<a className="font-medium grid grid-cols-2 items-center">
											<span className="col-span-1">Hà Nội</span>
											<span className="col-span-1 text-orange-400">0334350166</span>
										</a>
									</li>
									<li>
										<a className="font-medium grid grid-cols-2 items-center">
											<span className="col-span-1">Cần Thơ</span>
											<span className="col-span-1 text-orange-400">0334350166</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* End: .header__right--contact */}
					</div>
					{/* End: .header__right */}
				</div>
			</div>
		</header>
	);
};

export default Header;
