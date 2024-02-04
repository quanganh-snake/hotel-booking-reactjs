import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const Multilist = (props) => {
	const initialItemsToShow = 6;
	const { textHeading, listData } = props;
	const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
	const [showAll, setShowAll] = useState(false);
	// event handlers
	const handleShowMore = () => {
		setItemsToShow(listData.length);
		setShowAll(true);
	};

	const handleShowLess = () => {
		setItemsToShow(initialItemsToShow);
		setShowAll(false);
	};

	return (
		<div className="search__box border-b pb-4">
			<h3 className="text-md font-bold mb-2">{textHeading}</h3>
			<div className="view__list flex flex-col gap-2">
				{listData.slice(0, itemsToShow).map((item, index) => (
					<div key={index} className="view__item form-control">
						<label className="flex items-center gap-2 cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-sm checkbox-info" />
							<span className="label-text">{item}</span>
						</label>
					</div>
				))}
			</div>
			{showAll ? (
				<div className="flex items-center justify-end text-sky-500">
					<p onClick={handleShowLess} className="flex items-center cursor-pointer">
						<FaSortUp size={20} className="mt-2" />
						<span>Thu gọn</span>
					</p>
				</div>
			) : (
				<div className="flex items-center justify-end text-sky-500">
					<p onClick={handleShowMore} className="flex items-center cursor-pointer">
						<FaSortDown size={20} className="-mt-1" />
						<span>Xem thêm</span>
					</p>
				</div>
			)}
		</div>
	);
};

Multilist.propTypes = {};

export default Multilist;
