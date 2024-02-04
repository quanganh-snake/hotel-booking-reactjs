import { useState, useRef, useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "./datepicker.scss";
import dayjs from "dayjs";
import transition from "react-element-popper/animations/transition";
import size from "react-element-popper/animations/size";
import { IoCalendarOutline } from "react-icons/io5";

const DateRangePickerDouble = () => {
	const dateRef = useRef();
	const [value, setValue] = useState([new DateObject().subtract("days"), new DateObject().add(1, "days")]);

	const [startDate, setStartDate] = useState(dayjs(value?.[0]?.format(), "DD/MM/YYYY").format("dddd, DD [tháng] MM"));
	const [endDate, setEndDate] = useState(dayjs(value?.[1]?.format(), "DD/MM/YYYY").format("dddd, DD [tháng] MM"));

	const handleClickDate = () => {
		dateRef.current.openCalendar();
    };
    
    useEffect(() => {
        setStartDate(dayjs(value?.[0]?.format(), "DD/MM/YYYY").format("dddd, DD [tháng] MM"));
        setEndDate(dayjs(value?.[1]?.format(), "DD/MM/YYYY").format("dddd, DD [tháng] MM"));
    }, [value])

	return (
		<div className="w-full h-full">
			<div className="w-full h-full flex items-center justify-around">
				<div onClick={handleClickDate} className="flex items-center gap-2 cursor-pointer">
					<IoCalendarOutline size={24} />
					<p className="flex flex-col">
						<span>{startDate.split(", ")[1]}</span>
						<span className="capitalize">{startDate.split(", ")[0]}</span>
					</p>
				</div>
				<div className="h-full w-px bg-gray-600"></div>
				<div onClick={handleClickDate} className="flex items-center gap-2 cursor-pointer">
					<IoCalendarOutline size={24} />
					<p className="flex flex-col">
						<span>{endDate.split(", ")[1]}</span>
						<span className="capitalize">{endDate.split(", ")[0]}</span>
					</p>
				</div>
			</div>
			<DatePicker
				ref={dateRef}
				calendarPosition={`bottom-center`}
				offsetY={-40}
				offsetX={20}
				animations={[transition(), size()]}
				format="DD MMMM"
				dateSeparator=" - "
				value={value}
				onChange={setValue}
				range
				numberOfMonths={2}
				style={{ display: "none" }}
			/>
		</div>
	);
};

export default DateRangePickerDouble;
