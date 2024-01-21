import React from "react";
import { FaFire } from "react-icons/fa";
import Slider from "react-slick";

const TopSale = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		fade: true,
		fadeSpeed: 1000,
		useCSS: true,
	};

	return (
		<section className="top-sale py-10">
			<div className="container">
				<div className="heading mb-2">
					<div className="heading__title flex flex-col lg:flex-row lg:items-center gap-4">
						<h2 className="text-2xl lg:text-4xl font-bold">Combo tốt nhất hôm nay</h2>
						<p className="flex items-center gap-2 px-4 py-2 bg-red-200 text-red-500 rounded-full">
							<FaFire />
							<span>372 khách đã đặt phòng trong 24h qua</span>
						</p>
					</div>
					<p className="heading__description font-medium lg:text-inherit">Nhanh tay đặt ngay. Để mai sẽ lỡ</p>
				</div>
				<div className="slider">
					<Slider {...settings}>
						<div className="w-full bg-red-200 rounded-lg">
							<img src="/images/slider/slider1.png" className="w-full rounded-lg" alt="slide" />
						</div>
						<div className="w-full bg-red-200 rounded-lg">
							<img src="/images/slider/slider2.png" className="w-full rounded-lg" alt="slide" />
						</div>
						<div className="w-full bg-red-200 rounded-lg">
							<img src="/images/slider/slider3.png" className="w-full rounded-lg" alt="slide" />
						</div>
						<div className="w-full bg-red-200 rounded-lg">
							<img src="/images/slider/slider4.png" className="w-full rounded-lg" alt="slide" />
						</div>
						<div className="w-full bg-red-200 rounded-lg">
							<img src="/images/slider/slider5.png" className="w-full rounded-lg" alt="slide" />
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default TopSale;
