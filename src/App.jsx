import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AutoScrollToTop, BackToTop } from "./components/BackToTop/index";
import Hotels from "./pages/Hotels/Hotels";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/">
					<Route path="" element={<Home />} />
                    <Route path=":hotel" element={<Hotels />} >
                        
                    </Route>
				</Route>
			</Routes>
			<BackToTop />
			<AutoScrollToTop />
			<Footer />
		</>
	);
}

export default App;
