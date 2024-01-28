import { IoSearchOutline } from "react-icons/io5";
import { BiSolidStar } from "react-icons/bi";
import Multilist from "./Multilist";

const HotelNavbar = () => {
	const fakeListPlace = ["Bãi dâu (3)", "Bãi dứa (2)", "Bãi Sau (24)", "Bãi Trước (10)", "Bình Châu (2)", "Côn Đảo (13)", "Hồ Tràm (13)", "Long Hải (5)", "Trung tâm thành phố (7)"];
	const fakeListResidence = [
		"Khu nghỉ dưỡng (Resort)",
		"Biệt thự (Villa)",
		"Khách sạn (Hotel)",
		"Căn hộ (Apartment)",
		"Du thuyền (Cruise)",
		"Nhà nghỉ (Guest house, Homestay)",
		"Dorm",
		"All-inclusive property",
		"Cottages/Cabin/Houses",
		"Ranch",
		"Kiến trúc bản địa",
		"Castle/Palace",
	];
	const fakeListUtilities = [
		"Phòng gia đình",
		"Bãi biển riêng",
		"Bãi đậu xe ô tô taji khách sạn",
		"Connecting Rooms",
		"Hồ bơi",
		"Đưa đón sân bay",
		"Khu vui chơi trẻ em",
		"Villa cho gia đình/nhóm bạn",
		"Villa cho cặp đôi",
		"Xe đưa đón",
		"Giáp biển (dưới 5 phút đi bộ)",
		"Suối khoáng nóng",
	];

	return (
		<div className="hotels__navbar">
			<div className="navbar__supporter">
				<div className=" flex gap-4 border p-2">
					<div className="supporter--img">
						<img src="/images/supporter/sp1.jpg" alt="Supporter" className="rounded-full" />
					</div>
					<div className="supporter__detail">
						<h3 className="text-2xl font-bold">Cần hỗ trợ?</h3>
						<table>
							<tbody>
								<tr>
									<td align="right">
										<p className="text-sm">HCM</p>
									</td>
									<td>
										<a href="tel:1900 1870" className="text-orange-500 text-sm px-2">
											1900 1870
										</a>
									</td>
								</tr>
								<tr>
									<td align="right">
										<p className="text-sm">HN</p>
									</td>
									<td>
										<a href="tel:1900 1870" className="text-orange-500 text-sm px-2">
											1900 1870
										</a>
									</td>
								</tr>
								<tr>
									<td align="right">
										<p className="text-sm">CT</p>
									</td>
									<td>
										<a href="tel:1900 1870" className="text-orange-500 text-sm px-2">
											1900 1870
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* End: .navbar__supporter */}
			<div className="navbar__search">
				<div className="flex flex-col gap-4 border p-3">
					<div className="search__field flex w-full border-b pb-4">
						<input type="text" placeholder="Nhập tên khách sạn" className="w-full focus:outline-slate-400 p-2 border" />
						<span className="p-2 border hover:bg-slate-200 cursor-pointer">
							<IoSearchOutline size={24} />
						</span>
					</div>
					{/* End: .search__field */}
					<div className="search__star border-b pb-4">
						<h3 className="text-md font-bold mb-2">Hạng sao</h3>
						<div className="star--list flex flex-col gap-2">
							<div className="form-control">
								<label className="flex items-center gap-4 cursor-pointer">
									<input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
									<div className="label-text flex">
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
									</div>
								</label>
							</div>
							<div className="form-control">
								<label className="flex items-center gap-4 cursor-pointer">
									<input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
									<div className="label-text flex">
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
									</div>
								</label>
							</div>
							<div className="form-control">
								<label className="flex items-center gap-4 cursor-pointer">
									<input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
									<div className="label-text flex">
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
									</div>
								</label>
							</div>
							<div className="form-control">
								<label className="flex items-center gap-4 cursor-pointer">
									<input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
									<div className="label-text flex">
										<BiSolidStar size={18} color="orange" />
										<BiSolidStar size={18} color="orange" />
									</div>
								</label>
							</div>
							<div className="form-control">
								<label className="flex items-center gap-4 cursor-pointer">
									<input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
									<div className="label-text flex">
										<BiSolidStar size={18} color="orange" />
									</div>
								</label>
							</div>
						</div>
					</div>
					{/* End: .search__star */}
					<Multilist textHeading={"Khu vực"} listData={fakeListPlace} />
					{/* End: .search__place */}
					<Multilist textHeading={"Loại hình nơi ở"} listData={fakeListResidence} />
					{/* End: .search__type-of-residence */}
					<Multilist textHeading={"Tiện ích"} listData={fakeListUtilities} />
					{/* End: .search__utilities */}
				</div>
			</div>
			{/* End: .navbar__search */}
		</div>
	);
};

export default HotelNavbar;
