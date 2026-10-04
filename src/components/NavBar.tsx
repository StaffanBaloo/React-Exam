import { NavLink } from "react-router-dom";
import { Home, Info, Users } from "lucide-react";

const NavBar = () => {
	const navItems = [
		{ name: "Hem", icon: Home, path: "/" },
		{ name: "Om", icon: Info, path: "/about" },
		{ name: "Användare", icon: Users, path: "/users" },
	];

	return (
		<nav className="bg-gray-800 text-white p-4 border-b-2 border-black p-4 rounded-3xl shadow-md">
			<ul className="flex justify-between">
				{navItems.map((item, index) => (
					<NavLink
						key={index}
						to={item.path}
						className="w-fit p-4 rounded-3xl hover:bg-gray-600">
						<span className="md:hidden ">
							<item.icon />
						</span>
						<span className="hidden md:inline">{item.name}</span>
					</NavLink>
				))}
			</ul>
		</nav>
	);
};
export default NavBar;
