import clsx from "clsx";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline, IoCalendarOutline } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useClickOutside } from "@/services/hooks";
import DateRangePickerDouble from "../DateRangePicker/DateRangePickerDouble";
import { Link } from "react-router-dom";

const BannerHotel = () => {
	const listSuggestions = [
		{
			id: 1,
			thumbnailUrl: "/images/address1.png",
			address: "Đà Lạt",
			quantity: 510,
		},
		{
			id: 2,
			thumbnailUrl: "/images/address2.png",
			address: "Phan Thiết",
			quantity: 124,
		},
		{
			id: 3,
			thumbnailUrl: "/images/address1.png",
			address: "Nha Trang",
			quantity: 426,
		},
		{
			id: 4,
			thumbnailUrl: "/images/address1.png",
			address: "Phú Quốc",
			quantity: 397,
		},
		{
			id: 5,
			thumbnailUrl: "/images/address1.png",
			address: "Đà Nẵng",
			quantity: 653,
		},
		{
			id: 6,
			thumbnailUrl: "/images/address1.png",
			address: "Quy Nhơn",
			quantity: 117,
		},
		{
			id: 7,
			thumbnailUrl: "/images/address1.png",
			address: "Vũng Tàu",
			quantity: 195,
		},
		{
			id: 8,
			thumbnailUrl: "/images/address1.png",
			address: "Vịnh Hạ Long",
			quantity: 271,
		},
		{
			id: 9,
			thumbnailUrl: "/images/address1.png",
			address: "Hội An",
			quantity: 497,
		},
	];

	const [showSuggestAddress, setShowSuggestAddress] = useState(false);
	const [showBookings, setShowBookings] = useState(false);

	const [startDate, setStartDate] = useState(new Date());

	const [quantityRooms, setQuantityRooms] = useState(1);
	const [quantityAdults, setQuantityAdults] = useState(1);
	const [quantityKids, setQuantityKids] = useState(1);

	const addressHotRef = useClickOutside(() => {
		setShowSuggestAddress(false);
	});

	const bookingRef = useClickOutside(() => {
		setShowBookings(false);
	});

	// event handlers
	const handleIncrement = (id, value) => {
		if (value >= 0) {
			switch (id) {
				case "qttRoom":
					setQuantityRooms(quantityRooms + 1);
					break;
				case "qttAdults":
					setQuantityAdults(quantityAdults + 1);
					break;
				case "qttKids":
					setQuantityKids(quantityKids + 1);
					break;
				default:
					break;
			}
		}
	};
	const handleDecrement = (id, value) => {
		if (value > 0) {
			switch (id) {
				case "qttRoom":
					setQuantityRooms(quantityRooms - 1);
					break;
				case "qttAdults":
					setQuantityAdults(quantityAdults - 1);
					break;
				case "qttKids":
					setQuantityKids(quantityKids - 1);
					break;
				default:
					break;
			}
		}
	};
	// effect

	return (
		<>
			<div className="relative top-0 left-0 w-full flex items-center justify-center bg-no-repeat bg-banner bg-center bg-cover h-[490px]">
				<div className="absolute container mx-auto top-12">
					<div className="banner__heading mb-4 text-white">
						<h1 className="text-xl lg:text-5xl font-bold mb-4">Trải nghiệm kỳ nghỉ tuyệt vời</h1>
						<p className="font-medium">Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất</p>
					</div>
					{/* End: .banner__heading */}
					<div className="banner__search-box w-full lg:w-3/5 bg-blue-950 p-3 rounded-md">
						<div ref={addressHotRef} className="search-box__field relative mb-4">
							<div
								className="field--input flex items-center bg-white rounded-md mb-1 px-3 py-2"
								onClick={() => {
									setShowSuggestAddress(!showSuggestAddress);
								}}
							>
								<CiLocationOn size={24} />
								<input type="text" className="focus:outline-none px-3 py-1 w-full" placeholder="Bạn muốn đi đâu?" name="" id="" />
							</div>
							<div className={clsx("field--suggest absolute left-0 right-0 z-[5] w-full bg-white rounded-md mb-4", !showSuggestAddress && "hidden")}>
								<h4 className="suggest--heading text-lg font-semibold border-b px-3 py-2">Địa điểm đang HOT nhất</h4>
								<div className="suggest__list grid grid-cols-3">
									{listSuggestions.map((iAddress) => (
										<div key={iAddress.id} className="suggest__item col-span-1">
											<div className="suggest__item--content flex items-center gap-2 p-4 cursor-pointer hover:bg-gray-200">
												<img src={iAddress.thumbnailUrl} className="rounded-md" alt="address ivivu-address ivivu-suggest" />
												<p className="flex flex-col text-md">
													<span>{iAddress.address}</span>
													<span className="text-gray-500">{iAddress.quantity} KS</span>
												</p>
											</div>
										</div>
									))}
								</div>
								{/* End: .suggest__list */}
							</div>
						</div>
						{/* End: .search-box__field */}
						<div className="search-box__options grid grid-cols-12 gap-4">
							<div className="options--times col-span-12 lg:col-span-7 flex items-center justify-between bg-white px-3 rounded-md">
								{/* <div className="time__start w-1/2 flex items-center justify-center gap-x-2 p-3 border border-slate-200">
									<IoCalendarOutline />
									<DatePicker className="focus:outline-none w-3/4" selected={startDate} onChange={(date) => setStartDate(date)} />
								</div>
								<div className="time__total">
									<MdArrowRightAlt />
								</div>
								<div className="time__end w-1/2 flex items-center justify-center gap-x-2 p-3 border border-slate-200">
									<IoCalendarOutline />
									<DatePicker className="focus:outline-none w-3/4" selected={startDate} onChange={(date) => setStartDate(date)} />
								</div> */}
								<DateRangePickerDouble />
							</div>
							<div ref={bookingRef} className="options--rooms col-span-12 lg:col-span-4 relative bg-white px-3 py-2 rounded-md ">
								<div
									className="flex items-center gap-4 cursor-pointer hover:opacity-80"
									onClick={() => {
										setShowBookings(!showBookings);
									}}
								>
									<IoPeopleOutline size={24} />
									<p>
										<span>2 người lớn, 0 trẻ em</span>
										<br />
										<span>1 Phòng</span>
									</p>
								</div>
								<div className={clsx("absolute top-full mt-2 left-0 right-0 rounded-md shadow-lg bg-white", !showBookings && "hidden")}>
									<div className="quantity__rooms flex justify-between gap-2 border-b p-2">
										<p>{quantityRooms} Phòng</p>
										<div className="actions border">
											<button
												onClick={() => {
													handleDecrement("qttRoom", quantityRooms);
												}}
												className="border-r px-3 py-1 text-lg font-bold"
											>
												-
											</button>
											<button
												onClick={() => {
													handleIncrement("qttRoom", quantityRooms);
												}}
												className=" px-3 py-1 text-lg font-bold"
											>
												+
											</button>
										</div>
									</div>
									<div className="quantity__adult flex justify-between gap-2 border-b p-2">
										<p>{quantityAdults} Người lớn</p>
										<div className="actions border">
											<button
												onClick={() => {
													handleDecrement("qttAdults", quantityAdults);
												}}
												className="border-r px-3 py-1 text-lg font-bold"
											>
												-
											</button>
											<button
												onClick={() => {
													handleIncrement("qttAdults", quantityAdults);
												}}
												className=" px-3 py-1 text-lg font-bold"
											>
												+
											</button>
										</div>
									</div>
									<div className="quantity__kids flex justify-between gap-2 border-b p-2">
										<p>{quantityKids} Trẻ em</p>
										<div className="actions border">
											<button
												onClick={() => {
													handleDecrement("qttKids", quantityKids);
												}}
												className="border-r px-3 py-1 text-lg font-bold"
											>
												-
											</button>
											<button
												onClick={() => {
													handleIncrement("qttKids", quantityKids);
												}}
												className=" px-3 py-1 text-lg font-bold"
											>
												+
											</button>
										</div>
									</div>
									<div className="quantity__group flex items-center justify-between gap-2 border-b p-2">
										<p>Đặt đoàn nhóm</p>
										<p className="border p-2 rounded-md">Liên hệ</p>
									</div>
								</div>
							</div>
							<button className="bg-orange-400 col-span-12 lg:col-span-1 text-white font-medium rounded-md hover:opacity-70">Tìm</button>
						</div>
					</div>
					{/* End: .banner__search-box */}
				</div>
			</div>
		</>
	);
};

export default BannerHotel;
