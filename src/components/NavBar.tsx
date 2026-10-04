import { NavLink } from "react-router-dom";

const NavBar = () => {
	const navItems = [
		{ name: "Hem", path: "/" },
		{ name: "Om", path: "/about" },
		{ name: "Användare", path: "/users" },
	];

	return (
		<nav className="bg-gray-800 text-white p-4 border-b-2 border-black p-4 rounded-3xl shadow-md">
			<ul className="flex justify-between px-6 py-4">
				{navItems.map((item, index) => (
					<li key={index}>
						<NavLink to={item.path}>{item.name}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default NavBar;
