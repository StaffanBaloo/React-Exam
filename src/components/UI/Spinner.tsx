import { PropagateLoader } from "react-spinners";

const Spinner = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<PropagateLoader color="#4135e6" />
		</div>
	);
};

export default Spinner;
