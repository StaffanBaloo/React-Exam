const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
	return (
		<div className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded relative" role="alert">
			<strong className="font-bold">Oops!</strong>
			<span className="block sm:inline">Något blev fel vid inläsning av data.</span>
			<pre className="text-sm">{error.message}</pre>
			<button
				onClick={resetErrorBoundary}
				className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
				Försök igen.
			</button>
		</div>
	);
};

export default ErrorFallback;
