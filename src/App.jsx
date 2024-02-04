import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AutoScrollToTop, BackToTop } from "./components/BackToTop/index";
import Hotels from "./pages/Hotels/Hotels";
<<<<<<< HEAD
import HotelDetail from "./pages/Hotels/HotelDetail/HotelDetail";
import dayjs from "dayjs";
import "dayjs/locale/vi";
=======
>>>>>>> a49b6c3087680c3b415f1b72408cb86a27f93343

function App() {
	dayjs.locale("vi");
	return (
		<>
			<Header />
			<Routes>
				<Route path="/">
					<Route path="" element={<Home />} />
<<<<<<< HEAD
					<Route path=":hotel" element={<Hotels />}></Route>
					<Route path=":hotel/:detail" element={<HotelDetail />} />
					<Route path="chu-de"></Route>
=======
                    <Route path=":hotel" element={<Hotels />} >
                        
                    </Route>
>>>>>>> a49b6c3087680c3b415f1b72408cb86a27f93343
				</Route>
			</Routes>
			<BackToTop />
			<AutoScrollToTop />
			<Footer />
		</>
	);
}

export default App;
