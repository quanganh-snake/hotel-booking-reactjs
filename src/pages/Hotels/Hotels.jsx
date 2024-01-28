import HotelItem from "@/components/Hotels/HotelItem/HotelItem";
import HotelNavbar from "@/layouts/Hotels/Navbar/HotelNavbar";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hotels = () => {
	return (
		<div className="hotels">
			<div className="container">
				<div className="hotels__top p-2"></div>
				{/* End: .hotels__top */}
				<div className="hotels__main">
					<div className="hotels__main--heading flex items-center justify-between mb-4">
						<p className="flex items-center gap-2">
							<span className="font-bold text-2xl text-blue-900">Khách sạn Vũng Tàu</span>
							<sub>
								<Link to={""} className="text-sm flex items-center uppercase font-bold text-sky-400 hover:text-sky-700">
									<CiLocationOn />
									Xem bản đồ
								</Link>
							</sub>
						</p>
					</div>
					{/* End: .hotels__main--heading */}
					<div className="hotels__main--content grid grid-cols-12 gap-4">
						<div className="content__left hidden md:block md:col-span-12 lg:col-span-3">
							<HotelNavbar />
						</div>
						<div className="content__right md:col-span-12 lg:col-span-9">
							<p className="text-sm text-right -mt-10 mb-5">*Giá trung bình phòng 1 đêm cho 2 khách</p>
							<div className="flex flex-col gap-4">
								<HotelItem />
								<HotelItem />
								<HotelItem />
								<HotelItem />
								<HotelItem />
								<HotelItem />
							</div>
						</div>
					</div>
					{/* End: .hotels__main--content */}
				</div>
				{/* End: .hotels__main */}
			</div>
		</div>
	);
};

export default Hotels;
