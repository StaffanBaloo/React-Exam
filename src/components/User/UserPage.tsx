import { type User, type UserList } from "../../types";
const UserPage = () => {
	const userList: UserList = {
		users: [
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
		],
	};
	return (
		<div className="flex flex-row">
			<div className="basis-1/4 border-r-2 border-black p-4 rounded-lg shadow-md">
				<h2 className="text-lg font-bold mb-2">User List</h2>
				<ul>
					{userList.users.map((user) => (
						<li key={user.id} className="mb-2">
							<strong>{user.username}</strong> - {user.profile.name}
						</li>
					))}
				</ul>
			</div>
			<div className="basis-3/4 border-r-2 border-black p-4 rounded-lg shadow-md">
				<p>This is where the user details go.</p>
			</div>
		</div>
	);
};
export default UserPage;
