import { type User } from "../../types.ts";
const UserDetailsItem = ({ user }: { user: User }) => {
	console.log("UserDetailsItem user:", user);
	return (
		<>
			<h3 className="text-lg font-bold mb-2">{user.profile.name}</h3>
			<p>
				<strong>Email:</strong> {user.profile.email}
			</p>
			<p>
				<strong>Adress:</strong>{" "}
				{user.profile.address.street +
					", " +
					user.profile.address.zipCode +
					" " +
					user.profile.address.city}
			</p>

			<p>
				<strong>Roller:</strong> {user.roles.join(", ")}
			</p>
			<p>
				<strong>Användarnamn:</strong> {user.username}
			</p>
		</>
	);
};
export default UserDetailsItem;
