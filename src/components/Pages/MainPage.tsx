import { type UserList } from "../../types.ts";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage.tsx";
import UserPage from "./User/UserPage.tsx";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../UI/Spinner.tsx";

const MainPage = () => {
	const fetchData = async () => {
		try {
			const response = await fetch("https://api-userapi.onrender.com/api/users/getUsers", {
				method: "GET",
				headers: { "x-api-key": "elev-hemlighet-2026" },
			});
			if (!response.ok) {
				switch (response.status) {
					// Handle specific HTTP status codes
					case 404:
						throw new Error("Hittar inte användarlistan");
					case 401:
						throw new Error("Ej auktoriserad åtkomst");
					case 403:
						throw new Error("Förbjuden åtkomst");
					case 418:
						throw new Error("Servern är en teakopp");
					case 429:
						throw new Error("För många förfrågningar");
					case 500:
						throw new Error("Internt serverfel");
					case 502:
						throw new Error("Dålig gateway");
					case 503:
						throw new Error("Tjänsten är otillgänglig");
					default:
						throw new Error(`Oväntat fel: ${response.status}`);
				}
			}
			const data = await response.json();
			// Check if the data is empty and throw an error if it is
			if (data.length === 0) {
				throw new Error("Inga användare hittades");
			}
			// Sort the data by name in ascending order
			data.sort((a: { profile: { name: string } }, b: { profile: { name: string } }) => {
				const nameA = a.profile.name.toUpperCase();
				const nameB = b.profile.name.toUpperCase();
				return nameA.localeCompare(nameB);
			});
			return data;
		} catch (error) {
			console.error("Error fetching user data:", error);
			throw error; // Rethrow the error to be caught by useQuery
		}
	};

	const {
		data: userList,
		isLoading,
		isError,
		error,
	} = useQuery<UserList>({
		queryKey: ["users"],
		queryFn: fetchData,
		gcTime: 1000 * 60 * 60, // 60 minutes
		staleTime: 1000 * 60 * 30, // 30 minutes
	});

	//Display a spinner while the data is loading
	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return (
			<div
				className="bg-indigo-800 text-white p-4 border-b-2 border-black p-4 rounded-3xl shadow-md"
				role="alert">
				<p>
					<strong className="font-bold">Oops!</strong>
				</p>
				<p className="sm:inline">Ett fel uppstod vid hämtning av användardata.</p>
				<p>
					<pre className="text-sm">{error.message}</pre>
				</p>
				<button
					onClick={() => window.location.reload()}
					className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
					Försök igen.
				</button>
			</div>
		);
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
