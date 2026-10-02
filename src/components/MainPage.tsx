import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UserPage from "./User/UserPage";
const MainPage = () => {
	return (
		<main className="bg-indigo-800 text-white p-4 border-b-2 border-black p-4 rounded-lg shadow-md">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/users" element={<UserPage />} />
			</Routes>
		</main>
	);
};
export default MainPage;
