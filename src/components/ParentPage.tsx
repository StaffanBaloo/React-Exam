import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import HeaderComponent from "./HeaderComponent";

const ParentPage = () => {
	return (
		<>
			<div className="basis-1/6"></div>
			<div className="bg-gray-100 min-h-screen flex flex-col basis-4/6 border-2 border-gray-300">
				<BrowserRouter>
					<HeaderComponent />
					<NavBar />
					<MainPage />
				</BrowserRouter>
			</div>
			<div className="basis-1/6"></div>
		</>
	);
};
export default ParentPage;
