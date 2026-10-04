import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const ParentPage = () => {
	return (
		<>
			<div className="basis-1/6"></div>
			<div className="bg-gray-300 min-h-screen flex flex-col basis-4/6 gap-4">
				<BrowserRouter>
					<HeaderComponent />
					<NavBar />
					<MainPage />
					<FooterComponent />
				</BrowserRouter>
			</div>
			<div className="basis-1/6"></div>
		</>
	);
};
export default ParentPage;
