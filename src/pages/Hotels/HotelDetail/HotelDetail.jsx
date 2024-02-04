import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import React from "react";
import { useLocation } from "react-router-dom";
import { BiSolidHeart, BiSolidStar } from "react-icons/bi";
import { FaAngleDown, FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import style from "./style.module.scss";

const HotelDetail = () => {
	const { pathname } = useLocation();

	const breadcrumbs = [
		{
			id: 1,
			name: "Trang chủ",
			path: "/",
		},
		{
			id: 2,
			name: "Việt Nam",
			path: "/viet-nam",
		},
		{
			id: 3,
			name: "Phú Quốc",
			path: "/khach-san-phu-quoc",
		},
		{
			id: 4,
			name: "Khu nghỉ dưỡng Wyndham Grand Phú Quốc",
			path: pathname,
		},
	];

	const settingSlickSlider = {
		customPaging: function (i) {
			return (
				<a style={style}>
					<img src={`/images/slider/htdt/ht${i + 1}.jpg`} style={{ width: "300px" }} />
				</a>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="hotel-detail my-2">
			<div className="container">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-3">
						<div className="hotel-detail__left">
							<div className="left__map">
								<iframe
									width="100%"
									height="285"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
									src="https://maps.google.com/maps?q=10.32797617,103.85574783&amp;hl=vi&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
									allowfullscreen=""
								></iframe>
							</div>
							<div className="left__hotel--similar my-4">
								<h3 className="font-bold text-blue-900 mb-4">Khách sạn tương tự</h3>
								<div className="similar__list flex flex-col gap-y-4">
									<div className="similar__item flex items-start gap-x-2">
										<a href="#">
											<img src="/images/hotels/ht1.png" alt="" className="w-20 h-20 object-cover rounded-lg" />
										</a>
										<div className="similar__item--containt">
											<h4 className="text-md">
												<a href="#">La Residencia Hotel &amp; Spa Hội An</a>
											</h4>
											<div className="flex gap-1 text-sm font-bold">
												<p className="flex gap-1">
													<span className="inline-block px-1 bg-green-400 text-white rounded-lg font-bold">9.6</span>
													<span className="text-green-400">Tuyệt vời</span>
												</p>
												<div className="h-5 w-px bg-blue-900"></div>
												<a href="#">4 nhận xét</a>
											</div>
										</div>
									</div>
									<div className="similar__item flex items-start gap-x-2">
										<a href="#">
											<img src="/images/hotels/ht1.png" alt="" className="w-20 h-20 object-cover rounded-lg" />
										</a>
										<div className="similar__item--containt">
											<h4 className="text-md">
												<a href="#">La Residencia Hotel &amp; Spa Hội An</a>
											</h4>
											<div className="flex gap-1 text-sm font-bold">
												<p className="flex gap-1">
													<span className="inline-block px-1 bg-green-400 text-white rounded-lg font-bold">9.6</span>
													<span className="text-green-400">Tuyệt vời</span>
												</p>
												<div className="h-5 w-px bg-blue-900"></div>
												<a href="#">4 nhận xét</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End: .hotel-detail__left */}
					</div>
					<div className="col-span-9">
						<div className="hotel-detail__right">
							<div className="hotel-detail__header mb-4 grid grid-cols-12">
								<div className="col-span-10">
									<div className="header__left flex flex-col gap-2">
										<h3 className="header__title text-xl font-bold text-sky-900 flex items-center gap-2">
											Khu nghỉ dưỡng Wyndlham Grand Phú Quốc <BiSolidHeart size={16} color="red" />
										</h3>
										<div className="text-sm flex items-center gap-1">
											<div className="flex">
												<BiSolidStar size={14} color="orange" />
												<BiSolidStar size={14} color="orange" />
												<BiSolidStar size={14} color="orange" />
												<BiSolidStar size={14} color="orange" />
												<BiSolidStar size={14} color="orange" />
											</div>
											<span className="flex items-center gap-2 cursor-pointer hover:opacity-70">
												<span className="bg-green-600 px-2 py-px text-white font-medium rounded-lg">9.8</span>
												<span className="text-green-600 font-semibold">Tuyệt vời</span>
												<span className="text-gray-600 flex items-center gap-1">
													| 689 đánh giá <FaAngleDown size={12} />
												</span>
											</span>
										</div>
										<p className="text-sm flex ỉtems-center gap-1">
											<FaLocationDot size={12} className="mt-1" />
											Bãi Dài, X. Gành Dầu, H. Phú Quốc, T. Kiên Giang, Việt Nam
										</p>
									</div>
								</div>
								<div className="col-span-2">
									<div className="header__right text-right">
										<p className="text-sm">Giá chỉ từ</p>
										<p className="font-bold text-xl text-cyan-500">1.620.000 VND</p>
										<button className="px-3 py-2 bg-orange-500 rounded-md text-white font-medium w-full hover:cursor-pointer hover:bg-opacity-75">Đặt ngay</button>
									</div>
								</div>
							</div>
							{/* End: .detail__header */}
							<div className="hotel-detail__slider mb-4">
								<div className="relative">
									<Slider {...settingSlickSlider}>
										<div className="inset-0 w-full h-[470px] bg-gray-400">
											<img src="/images/slider/htdt/ht1.jpg" alt="" className="w-full" />
										</div>
										<div className="relative inset-0 w-full h-[470px] bg-gray-400">
											<img src="/images/slider/htdt/ht2.jpg" alt="" className="w-full" />
										</div>
										<div className="relative inset-0 w-full h-[470px] bg-gray-400">
											<img src="/images/slider/htdt/ht3.jpg" alt="" className="w-full" />
										</div>
										<div className="relative inset-0 w-full h-[470px] bg-gray-400">
											<img src="/images/slider/htdt/ht4.jpg" alt="" className="w-full" />
										</div>
										<div className="relative inset-0 w-full h-[470px] bg-gray-400">
											<img src="/images/slider/htdt/ht5.jpg" alt="" className="w-full" />
										</div>
									</Slider>
									<p className="absolute top-8 -left-2 z-[10] bg-red-600 text-white px-8 text-lg">3N2Đ | VMB+Đưa đón+Buffet sáng+Gần Grand World | 3.899 triệu/khách</p>
								</div>
							</div>
							{/* End: .hotel-detail__slider */}
							<div className="hotel-detail__youtube flex items-center gap-6 mb-4">
								<div className="ytb__thumbnail">
									<img src="https://img.youtube.com/vi/vRVYTR_HPuk/default.jpg" alt="" />
								</div>
								<div className="ytb__content">
									<span className="text-sm p-1 bg-orange-400 text-white rounded-md">chỉ có tại ivivu.com</span>
									<p className="mt-1 text-cyan-600">Video về Khu nghỉ dưỡng Wyndham Grand Phú Quốc</p>
								</div>
							</div>
							<p className="p-2 bg-red-100 text-red-700 text-sm mb-4">Đang bán chạy | Đã bán 4 phòng trong 24 giờ qua</p>
							<div className="combo__detail bg-orange-100 p-6 grid grid-cols-12 gap-4">
								<div className="col-span-12 lg:col-span-8">
									<div className="combo__right">
										<h2 className="text-3xl font-bold">Combo 3N2Đ | Vé máy bay + Đưa đón sân bay + Buffet sáng + Gần Grand World</h2>
										<div className="detail__box">
											<h4>Combo bao gồm</h4>
											<i>Kỳ nghỉ tiện nghi gần Tổ hợp Mua sắm Giải trí Corona và Grand World</i>
											<ul>
												<li>- Vé máy bay khứ hồi gồm 7kg hành lý xách tay</li>
												<li>- 02 đêm nghỉ dưỡng ở phòng Superior Room với ban công</li>
												<li>- Buffet sáng tiêu chuẩn quốc tế tại nhà hàng Nautilus</li>
												<li>
													<p>- Tiện ích đa dạng:</p>
													<ul className="ml-6">
														<li>&#8226; Bãi biển riêng và bể bơi lớn ngoài trời</li>
														<li>&#8226; Đưa đón sân bay theo lịch trình bay của khách hàng</li>
														<li>&#8226; Đưa đón Grand World theo lịch trình của VinBus</li>
														<li>&#8226; Ngâm bồn jacuzzi, xông hơi khô (đăng ký trước với lễ tân)</li>
														<li>&#8226; Wifi tốc độ cao, phòng gym hiện đại, khu vui chơi trẻ em</li>
														<li>&#8226; Thức uống chào mừng khi nhận phòng</li>
													</ul>
												</li>
											</ul>
										</div>
										<div className="detail__utilities">
											<h4>🔍 Chơi gì ở Phú Quốc</h4>
											<p>🍽️ Nâng cấp gói 4 bữa ăn chỉ từ 1.100.000 đ/khách</p>
											<p>
												🏰 Nâng cấp gói Vui chơi VinWonders & Vinpearl Safari (*) khám phá Công viên chủ đề với show diễn triệu đô “Once” và trải nghiệm Khu vườn thú mở - nhốt
												người thả thú chỉ từ 1.800.000đ/khách
											</p>
											<ul className="ml-6">
												<li>
													<a href="#">&#8226; Trò Chơi & Sơ Đồ VinWonders</a>
												</li>
												<li>
													<a href="#">&#8226; Hoạt Động & Sơ Đồ Vinpearl Safari</a>
												</li>
											</ul>
											<p>
												<i>(*) Vui chơi không giới hạn (14h ngày nhận phòng - 12h ngày trả phòng)</i>
											</p>
											<p>
												<i>(*) Xe đưa đón VinWonders & Vinpearl Safari theo lịch trình Khách sạn</i>
											</p>
											<p>🗺️ CLICK & ĐẶT THÊM TRẢI NGHIỆM tại Phú Quốc</p>
											<ul className="ml-6">
												<li>
													<a href="https://www.ivivu.com/ve-vui-choi/hoat-dong/ve-vao-cua-grand-world-phu-quoc/16" target="_blank">
														<strong>&#8226; Vé Vào Cửa Địa Điểm Vui Chơi Grand World</strong>
													</a>
													<strong> </strong>(Bảo Tàng Gấu Teddy / Thuyền Kênh Venice / Tinh Hoa Việt Nam)
												</li>
											</ul>
										</div>
										{/* End: .detail__utilities */}
										<div className="detail__condition">
											<h4>Điều kiện áp dụng</h4>
											<ul>
												<li>- Đặt tối thiểu 2 khách/phòng</li>
												<li>- Dành cho khách Việt Nam & Đông Nam Á (quốc tịch khác có phụ thu)</li>
												<li>- Phụ thu Thứ 6-7 và Tết 10/02 - 16/02/2024</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-span-12 lg:col-span-4">
									<div className="combo__left border border-orange-500 rounded-md p-2">
										<h3 className="text-center">
											Khởi hành từ <b>Hồ Chí Minh</b>
										</h3>
										<ul className="block w-full timeline timeline-vertical">
											<li>
												<div className="timeline-middle">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<div className="timeline-end timeline-box">First Macintosh computer</div>
												<hr />
											</li>
											<li>
												<hr />
												<div className="timeline-middle">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<div className="timeline-end timeline-box">iMac</div>
												<hr />
											</li>
											<li>
												<hr />
												<div className="timeline-middle">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<div className="timeline-end timeline-box">iPod</div>
												<hr />
											</li>
											<li>
												<hr />
												<div className="timeline-middle">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<div className="timeline-end timeline-box">iPhone</div>
												<hr />
											</li>
											<li>
												<hr />
												<div className="timeline-middle">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<div className="timeline-end timeline-box">Apple Watch</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* End: .hotel-detail__right */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelDetail;
