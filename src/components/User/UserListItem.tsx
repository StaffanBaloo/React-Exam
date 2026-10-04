import { NavLink } from "react-router-dom";
import { type User } from "../../types.ts";
const UserListItem = ({ user }: { user: User }) => {
	// Render a list of users as navigation links, highlighting the active user with a different style.
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
