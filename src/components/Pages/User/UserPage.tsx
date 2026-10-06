import { type UserList } from "../../../types.ts";
import UserDetailsItem from "./UserDetailsItem";
import UserListItem from "./UserListItem";
import { useParams } from "react-router-dom";
const UserPage = ({ userList }: { userList: UserList }) => {
	// Extract the user ID from the URL parameters and find the corresponding user in the list, setting the selected user to null if no ID is provided or undefined if the user is not found.
	const { id } = useParams<{ id: string }>();
	const userId = id ? parseInt(id) : null;
	const selectedUser =
		userId !== null ? userList.find((user) => user.id === userId) : null;
	return (
		<div className="flex flex-row align-start justify-content gap-4">
			{/* Render user list on the left */}
			<aside className="bg-teal-700 text-white basis-1/4 border-r-2 border-black p-4 rounded-3xl shadow-md">
				<h2 className="text-lg font-bold mb-2">Användarlista</h2>

				<ul className="list-none p-0 m-0">
					{userList.map((user) => (
						<UserListItem key={user.id} user={user} />
					))}
				</ul>
			</aside>
			{/* Render user details on the right, showing different messages based on the selected user state */}
			<div className="bg-sky-700 basis-3/4 border-r-2 border-black p-4 rounded-3xl shadow-md ">
				{selectedUser === undefined ? (
					<p>Användare inte hittad. Vänligen välj en användare från listan.</p>
				) : selectedUser === null ? (
					<p>Vänligen välj en användare från listan.</p>
				) : (
					<UserDetailsItem key={selectedUser.id} user={selectedUser} />
				)}
			</div>
		</div>
	);
};
export default UserPage;
