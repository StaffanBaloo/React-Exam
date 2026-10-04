import { type User } from "../../types.ts";
const UserDetailsItem = ({ user }: { user: User }) => {
	return (
		<>
			<h3 className="text-lg font-bold mb-2">{user.username}</h3>
			<p>
				<strong>Name:</strong> {user.profile.name}
			</p>
			<p>
				<strong>Email:</strong> {user.profile.email}
			</p>
			<p>
				<strong>Address:</strong> {user.profile.address.street},{" "}
				{user.profile.address.city} {user.profile.address.zipcode}
			</p>
		</>
	);
};
export default UserDetailsItem;
