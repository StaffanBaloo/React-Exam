import { type UserList } from "../types.ts";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UserPage from "./User/UserPage";
const MainPage = () => {
	const userList: UserList = [
		{
			id: 1,
			username: "john_doe",
			profile: {
				name: "John Doe",
				email: "john.doe@example.com",
				address: {
					street: "123 Main St",
					city: "Anytown",
					zipcode: "12345",
				},
				roles: ["user"],
			},
		},
		{
			id: 2,
			username: "jane_smith",
			profile: {
				name: "Jane Smith",
				email: "jane.smith@example.com",
				address: {
					street: "456 Oak Ave",
					city: "Somewhere",
					zipcode: "67890",
				},
				roles: ["user", "admin"],
			},
		},
	];
	return (
		<main className="bg-indigo-800 text-white p-4 border-b-2 border-black p-4 rounded-lg shadow-md">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/users" element={<UserPage userList={userList} />} />
				<Route path="/users/:id" element={<UserPage userList={userList} />} />
			</Routes>
		</main>
	);
};
export default MainPage;
