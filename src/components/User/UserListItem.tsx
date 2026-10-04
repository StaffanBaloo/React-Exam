import { NavLink } from "react-router-dom";
import { type User } from "../../types.ts";
const UserListItem = ({ user }: { user: User }) => {
	return (
		<NavLink
			to={`/users/${user.id}`}
			className={({ isActive }) =>
				(isActive ? "font-bold text-black bg-teal-300 " : "") +
				"hover:bg-teal-500 hover:text-black transition-colors duration-300 p-1 m-1 rounded-lg block"
			}>
			{user.profile.name}
		</NavLink>
	);
};
export default UserListItem;
