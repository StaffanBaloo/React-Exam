import { BrowserRouter } from "react-router-dom";

import ParentPage from "./components/ParentPage";

function App() {
	return (
		<div className="bg-gray-100 min-h-screen flex">
			<BrowserRouter>
				<ParentPage />
			</BrowserRouter>
		</div>
	);
}

export default App;
