import React from "react";
import BannerHotel from "@/components/Banner/BannerHotel";
import TopSale from "@/components/Home/TopSale/TopSale";
import PlaceDomestic from "@/components/Home/FavoritePlace/PlaceDomestic";
import DiscoverPlace from "@/components/Home/DiscoverPlace/DiscoverPlace";
import PlaceForeign from "@/components/Home/FavoritePlace/PlaceForeign";

const Home = () => {
	return (
		<div>
			<BannerHotel />
			<TopSale />
			{/* Start: Discover */}
			<DiscoverPlace />
			{/* End: Discover */}
			<PlaceDomestic />
			<PlaceForeign />
		</div>
	);
};

export default Home;
