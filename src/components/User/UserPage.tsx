import { type UserList } from "../../types";
import UserDetailsItem from "./UserDetailsItem";
import UserListItem from "./UserListItem";
import { useParams } from "react-router-dom";
const UserPage = ({ userList }: { userList: UserList }) => {
	const { id } = useParams<{ id: string }>();
	const userId = id ? parseInt(id) : null;
	const selectedUser =
		userId !== null ? userList.find((user) => user.id === userId) : null;
	return (
		<div className="flex flex-row align-start justify-content gap-4">
			<div className="bg-teal-700 text-white basis-1/4 border-r-2 border-black p-4 rounded-3xl shadow-md">
				<h2 className="text-lg font-bold mb-2">Användarlista</h2>

				<ul className="list-none p-0 m-0">
					{userList.map((user) => (
						<UserListItem key={user.id} user={user} />
					))}
				</ul>
			</div>
			<div className="bg-sky-700 basis-3/4 border-r-2 border-black p-4 rounded-lg shadow-md ">
				{selectedUser ? (
					<UserDetailsItem user={selectedUser} />
				) : (
					<p>Välj en användare för att visa detaljer.</p>
				)}
			</div>
		</div>
	);
};
export default UserPage;
