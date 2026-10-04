import { type UserList } from "../types.ts";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UserPage from "./User/UserPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./UI/Spinner.tsx";

const MainPage = () => {
	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://api-userapi.onrender.com/api/users/getUsers",
				{ method: "GET", headers: { "x-api-key": "elev-hemlighet-2026" } },
			);
			if (!response.ok) {
				switch (response.status) {
					case 404:
						throw new Error("Resource not found");
					case 401:
						throw new Error("Unauthorized access");
					case 500:
						throw new Error("Internal server error");
					default:
						throw new Error(`Unexpected error: ${response.status}`);
				}
			}
			const data = await response.json();
			// Sort the data by name in ascending order
			data.sort(
				(
					a: { profile: { name: string } },
					b: { profile: { name: string } },
				) => {
					const nameA = a.profile.name.toUpperCase();
					const nameB = b.profile.name.toUpperCase();
					return nameA.localeCompare(nameB);
				},
			);
			return data;
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const { data: userList, isLoading } = useQuery<UserList>({
		queryKey: ["users"],
		queryFn: fetchData,
		gcTime: 1000 * 60 * 60, // 30 minutes
		staleTime: 1000 * 60 * 30, // 30 minutes
	});

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<main className="bg-indigo-800 text-white p-4 border-b-2 border-black p-4 rounded-3xl shadow-md">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/users" element={<UserPage userList={userList!} />} />
				<Route path="/users/:id" element={<UserPage userList={userList!} />} />
			</Routes>
		</main>
	);
};
export default MainPage;
