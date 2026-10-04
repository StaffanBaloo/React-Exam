import { NavLink } from "react-router-dom";
import { type User } from "../../types.ts";
const UserListItem = ({ user }: { user: User }) => {
	return (
		<NavLink to={`/users/${user.id}`}>
			<li className="mb-2">
				<strong>{user.profile.name}</strong>
			</li>
		</NavLink>
	);
};
export default UserListItem;
