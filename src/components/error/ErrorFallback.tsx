const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
	return (
		<div
			className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert">
			<strong className="font-bold">Error!</strong>
			<span className="block sm:inline">Something went wrong.</span>
			<pre className="text-sm">{error.message}</pre>
			<button
				onClick={resetErrorBoundary}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
				Try Again
			</button>
		</div>
	);
};

export default ErrorFallback;
