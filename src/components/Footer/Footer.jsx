import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime, IoIosArrowDown } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
	return (
		<footer className="bg-gray-100 p-4">
			<div className="container">
				<div className="footer__top grid grid-cols-5 flex-wrap">
					<div className="col-span-1">
						<h3 className="text-lg font-semibold">Về iViVu.com</h3>
						<ul>
							<li>
								<a href="" className="text-gray-500">
									Chúng tôi
								</a>
							</li>
							<li>
								<a href="" className="text-gray-500">
									iViVu Blog
								</a>
							</li>
							<li>
								<a href="" className="text-gray-500">
									PMS - Miễn phí
								</a>
							</li>
						</ul>
					</div>
					{/* End: col-1 */}
					<div className="col-span-1">
						<h3 className="text-lg font-semibold">Thông Tin Cần Biết</h3>
						<ul>
							<li>
								<a href="" className="text-gray-500">
									Điều kiện & Điều khoản
								</a>
							</li>
							<li>
								<a href="" className="text-gray-500">
									Quy chết hoạt động
								</a>
							</li>
							<li>
								<a href="" className="text-gray-500">
									Câu hỏi thường gặp
								</a>
							</li>
						</ul>
					</div>
					{/* End: col-1 */}
					<div className="col-span-1">
						<h3 className="text-lg font-semibold">Đối tác</h3>
						<ul>
							<li>
								<a href="" className="text-gray-500">
									Quy chế bảo hiểm Cathay
								</a>
							</li>
							<li>
								<a href="" className="text-gray-500">
									Yêu cầu bồi thường Cathay
								</a>
							</li>
							<li>
								<a href="" className="text-gray-500">
									Quy chế trả góp
								</a>
							</li>
						</ul>
					</div>
					{/* End: col-1 */}
					<div className="col-span-1">
						<h3 className="text-center mb-4">
							<span>Thành viên của</span>
							<br />
							<span className="text-lg font-semibold">Thiên Minh Group</span>
						</h3>
						<div className="flex justify-center">
							<img src="/images/tmg_logo.png" className="w-28" alt="Thiên Minh Group" />
						</div>
					</div>
					{/* End: col-1 */}
					<div className="col-span-1">
						<h3 className="text-lg font-semibold">Được chứng nhận</h3>
						<div className="flex items-center gap-2">
							<img src="/images/bocongthuong.png" className="w-26" alt="Bộ Công Thương" />
							<img src="/images/iata_logo.png" className="w-16" alt="IATA" />
						</div>
					</div>
					{/* End: col-1 */}
					<div className="grid grid-cols-subgrid gap-4 col-span-4 mt-4">
						<div className="col-span-3">
							<div className="w-full prize__list flex items-center gap-4">
								<div className="prize__item flex items-center gap-2">
									<div className="prize__item--image">
										<img src="/images/prize/ivv-agency-winner.svg" className="w-32" alt="" />
									</div>
									<p className="font-bold text-gray-600">Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>
								</div>
								<div className="prize__item flex items-center gap-2">
									<div className="prize__item--image">
										<img src="/images/prize/hraa-logo.png" className="w-32" alt="" />
									</div>
									<p className="font-bold text-gray-600">Best Companies to Work for in Asia</p>
								</div>
								<div className="prize__item flex items-center gap-2">
									<div className="prize__item--image">
										<img src="/images/prize/apea.png" className="w-16" alt="" />
									</div>
									<p className="font-bold text-gray-600">APEA Inspirational Brand Award</p>
								</div>
							</div>
						</div>
						<div className="col-span-4">
							<p className="mb-3">DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch đầu tư thành phố Hồ Chí Minh</p>
							<p className="flex items-center mb-3">
								<CiLocationOn />
								<b>HCM: </b>
								<span>Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh</span>
								<a href=""> (Xem bản đồ)</a>
							</p>
							<p className="flex items-center mb-3">
								<CiLocationOn />
								<b>HN: </b>
								<span> P308, Tầng 3, tòa nhà The One, số 2 Chương Dương Độ, P.Chương Dương, Q.Hoàn Kiếm, Hà Nội</span>
								<a href=""> (Xem bản đồ)</a>
							</p>
							<p className="flex items-center mb-3">
								<CiLocationOn />
								<b>Cần Thơ: </b>
								<span> Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ</span>
								<a href=""> (Xem bản đồ)</a>
							</p>
						</div>
					</div>
					<div className="col-span-1">
						<div className="mt-4">
							<h3 className="text-md font-bold mb-2">Bạn cần trợ giúp? Hãy gọi ngay!</h3>
							<div className="hotline my-4">
								<div className="hotline__now text-4xl font-bold text-orange-500 flex items-center gap-1">
									<FaPhone />
									<p>0334350166</p>
								</div>
								<div className="hotline__select flex items-center gap-2">
									<p className="flex items-center">
										<IoMdTime />
										<span>7h30</span>
										<MdArrowRightAlt />
										<span>21h</span>
									</p>
									<p className="flex items-center">
										<CiLocationOn />
										<span>iVIVU HCM</span>
										<IoIosArrowDown />
									</p>
								</div>
							</div>
							<p className="whitespace-nowrap">Tư vấn với Olivia - chatbot của iVIVU</p>
						</div>
					</div>
				</div>
				{/* End: .footer__top */}
			</div>
		</footer>
	);
};

export default Footer;
