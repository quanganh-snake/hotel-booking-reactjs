import React from "react";
import "./hotelItem.module.scss";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { PiCallBell } from "react-icons/pi";
import { BiSolidStar, BiSolidHeart } from "react-icons/bi";

const HotelItem = () => {
	return (
		<Link to={"/a"}>
			<div className="hover:shadow-ht-item">
				<div className="bg-orange-200 p-1">
					<div className="item__top">
						<p className="text-orange-400 p-2 ">Còn 63 ngày | Combo 2N1Đ + Xe đưa đón + Ăn Sáng từ 1.050.000 VNĐ/Khách</p>
					</div>
					<div className="item__content grid grid-cols-7">
						<div className="item__content--img col-span-2">
							<div className="relative">
								<span className="">
									<span className="absolute px-2 py-1 text-white bg-red-600 text-sm top-6 -left-4">2N1Đ+Xe+Ăn sáng | 1tr050/khách</span>
								</span>
								<div className="img w-full min-h-52 bg-[url('https://cdn1.ivivu.com/images/2023/06/02/19/hir-exterior-cut___m7emo9____horizontal-374x280.webp?o=jpg')] bg-no-repeat bg-center bg-cover"></div>
							</div>
						</div>
						<div className="col-span-3">
							<div className="bg-gray-50 h-full py-3 px-2 text-sm flex flex-col gap-2">
								<h3 className="text-blue-950 font-semibold text-lg">Khu nghỉ dưỡng Holiday Inn Hồ Tràm</h3>
								<div className="text-sm flex items-center gap-1">
									<div className="flex">
										<BiSolidStar size={14} color="orange" />
										<BiSolidStar size={14} color="orange" />
										<BiSolidStar size={14} color="orange" />
										<BiSolidStar size={14} color="orange" />
										<BiSolidStar size={14} color="orange" />
									</div>
									<span>
										<BiSolidHeart size={14} color="red" />
									</span>
									<span>
										<span className="bg-green-600 px-2 py-px text-white font-medium rounded-lg">9.8</span>
										<span className="text-green-600 font-semibold">Tuyệt vời</span>
										<span className="text-gray-600"> | 689 đánh giá</span>
									</span>
								</div>
								<Link to={"/b"} className="text-sm">
									Ven Biển, Xã Phước Thuận - Xem bản đồ
								</Link>
								<div className="flex items-center gap-1 text-sm">
									<div className="flex items-center gap-1 p-1 border text-blue-950">
										<FaCheck size={10} />
										Thương hiệu quốc tế
									</div>
									<div className="flex items-center gap-1 p-1 border text-blue-950">
										<FaCheck size={10} />
										Hiện đại
									</div>
								</div>
								<div className="flex gap-1">
									<p className="bg-white flex items-center gap-1">
										<span className="bg-blue-900 w-6 h-full flex items-center justify-center">
											<BiSolidStar color="white" />
										</span>
										<span>Khu phúc hợp nghỉ dưỡng...</span>
									</p>
									<p className="p-1 bg-white">
										Bãi biển riêng <span className="text-sm font-medium text-blue-850">2+</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-span-2">
							<div className="bg-white h-full flex flex-col justify-center items-center gap-2">
								<h3 className="text-cyan-500 text-2xl font-semibold">Ưu đãi bí mật</h3>
								<p className="text-sm px-2 py-1 border border-slate-200 bg-gray-100 flex flex-col justify-center items-center">
									<span className="font-medium text-blue-900">Standard Ocean...</span>
									<span className="flex items-center gap-1">
										<PiCallBell />
										Gồm ăn sáng
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default HotelItem;
