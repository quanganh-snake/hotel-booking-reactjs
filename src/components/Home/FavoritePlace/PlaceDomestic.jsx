import React from "react";
import { Link } from "react-router-dom";

const PlaceDomestic = () => {
	return (
		<section className="place__domestic py-5">
			<div className="container">
				<div className="heading mb-2">
					<div className="heading__title flex items-center gap-4">
						<h2 className="text-2xl lg:text-4xl font-bold">Điểm đến yêu thích trong nước</h2>
					</div>
					<p className="heading__description font-medium">Lên rừng xuống biển. Trọn vẹn Việt Nam</p>
				</div>
				<div className="place__domestic--list">
					<div className="grid grid-flow-row grid-cols-3 grid-rows-4 gap-4">
						<div className="domestic__item shadow-md col-start-1 col-end-3 row-start-1 row-end-1 rounded-md">
							<Link to={"/khach-san-phu-quoc"}>
								<div className="relative rounded-md shadow-md h-48 bg-[url('/images/place/phuquoc-show.jpg')] bg-no-repeat bg-center object-cover lg:bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Phú Quốc</h3>
										<p className="text-white">397 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-start-3 col-end-3 row-span-2 rounded-md">
							<Link to={"/khach-san-vung-tau"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/vungtau-show.jpg')] bg-no-repeat bg-center bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Vũng Tàu</h3>
										<p className="text-white">195 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-start-1 col-end-2 rounded-md">
							<Link to={"/khach-san-da-lat"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/dalat-show.jpg')] bg-no-repeat bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Đà Lạt</h3>
										<p className="text-white">510 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-start-2 col-end-3 rounded-md">
							<Link to={"/khach-san-quy-nhon"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/quynhon-show.jpg')] bg-no-repeat bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Quy Nhơn</h3>
										<p className="text-white">117 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-start-1 col-end-1 row-span-2 rounded-md">
							<Link to={"/khach-san-nha-trang"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/nhatrang-show.jpg')] bg-no-repeat bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Nha Trang</h3>
										<p className="text-white">426 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-span-2 rounded-md">
							<Link to={"/khach-hang-da-nang"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/danang-show.jpg')] bg-no-repeat bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Đà Nẵng</h3>
										<p className="text-white">653 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md col-start-2 col-end-3 rounded-md">
							<Link to={"/khach-san-phan-thiet"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/phanthiet-show.jpg')] bg-no-repeat bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Phan Thiết</h3>
										<p className="text-white">124 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
						<div className="domestic__item shadow-md hover:shadow-xl col-start-3 col-end-3 rounded-md">
							<Link to={"/khach-san-phu-yen"}>
								<div className="relative rounded-md shadow-md h-full bg-[url('/images/place/phuyen-show.jpg')] bg-no-repeat bg-cover">
									<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end hover:bg-gray-400 hover:bg-opacity-20">
										<h3 className="text-white text-3xl font-bold uppercase">Phú Yên</h3>
										<p className="text-white">13 khách sạn</p>
									</div>
								</div>
							</Link>
						</div>
						{/* End: .domestic__item */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlaceDomestic;
