const NavBar = () => {
	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Users", path: "/users" },
	];

	return (
		<nav className="bg-gray-800 text-white p-4 border-b-2 border-black p-4 rounded-lg shadow-md">
			<ul className="flex space-x-4">
				{navItems.map((item, index) => (
					<li key={index}>
						<a href={item.path}>{item.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default NavBar;
