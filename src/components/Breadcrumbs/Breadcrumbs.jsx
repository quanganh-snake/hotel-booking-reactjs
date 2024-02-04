import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Breadcrumbs = (props) => {
	const { breadcrumbs } = props;
	return (
		<div className="text-sm breadcrumbs">
			<ul>
				{breadcrumbs?.map((b, index) => (
					<li key={index}>
						<NavLink to={b.path} className={({ isActive }) => (isActive ? "text-gray-600" : "text-cyan-500")}>
							{b.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

Breadcrumbs.protoTypes = {
    breadcrumbs: PropTypes.array.isRequired
}
export default Breadcrumbs;
