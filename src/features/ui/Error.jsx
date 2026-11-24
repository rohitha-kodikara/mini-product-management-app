import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2 className="text-xl font-bold text-cyan-800">Something went wrong</h2>
      <p>{error.data || error.message}</p>
      {/* <p>{error.message}</p> */}
      <button
        className="bg-blue-500 rounded-md px-3 py-2"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
