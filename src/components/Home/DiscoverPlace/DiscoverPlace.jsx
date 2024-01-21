import React from "react";
import Slider from "react-slick";

const DiscoverPlace = () => {
    const settings = {
		className: "flex gap-4",
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="discover py-5 lg:py-10">
			<div className="container">
				<div className="heading mb-2">
					<div className="heading__title flex items-center gap-4">
						<h2 className="text-2xl lg:text-4xl font-bold">Cuối năm rồi, đi chơi thôi!</h2>
					</div>
					<p className="heading__description font-medium">Thư giãn - nạp năng lượng - khám phá</p>
				</div>
				<div className="discover__list">
					<Slider {...settings}>
						<div className="discover__item">
							<div className="relative mr-4 bg-[url('/images/discover/dv1.png')] bg-no-repeat bg-cover min-h-[400px] rounded-lg">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Quốc tế</h3>
									<p className="text-white">Khám phá thế giới trong tầm tay - 65 khách sạn</p>
								</div>
							</div>
						</div>
						<div className="discover__item">
							<div className="relative mr-4 bg-[url('/images/discover/dv2.png')] bg-no-repeat bg-cover min-h-[400px] rounded-lg">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Villa</h3>
									<p className="text-white">Chill tại Villa, vui hè thả ga - 30 khách sạn</p>
								</div>
							</div>
						</div>
						<div className="discover__item">
							<div className="relative mr-4 bg-[url('/images/discover/dv3.png')] bg-no-repeat bg-cover min-h-[400px] rounded-lg">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Team X</h3>
									<p className="text-white">Nâng tầm chuyến du lịch của công ty và đội nhóm của bạn!</p>
								</div>
							</div>
						</div>
						<div className="discover__item">
							<div className="relative mr-4 lg:mr-0 bg-[url('/images/discover/dv4.png')] bg-no-repeat bg-cover min-h-[400px] rounded-lg">
								<div className="absolute inset-0 bg-gray-900 bg-opacity-30 rounded-lg p-4 flex flex-col justify-end">
									<h3 className="text-white text-3xl font-bold uppercase">Gift Voucher</h3>
									<p className="text-white">Lưu giữ khoảnh khắc, trải nghiệm hành trình</p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default DiscoverPlace;
