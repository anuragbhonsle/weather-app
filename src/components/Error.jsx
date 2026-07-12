import { SquigglyText } from "../ui/squiggly-text";
import { useNavigate } from "react-router-dom";
import { errorActions } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Error() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error.message);
  return (
    <div className="flex flex-col flex-1 w-screen items-center justify-center">
      <h1 className="text-5xl font-bold text-white font-mono">
        <SquigglyText>Error</SquigglyText>
      </h1>
      {errorMessage && (
        <SquigglyText>
          <span className="text-2xl text-white font-mono">
            Message: {errorMessage}
          </span>
        </SquigglyText>
      )}
      <button
        onClick={() => {
          (dispatch(errorActions.setError({ error: false, message: "" })),
            navigate("/"));
        }}
        className="flex items-center gap-2 border-2 border-white/20 px-8 py-3 rounded-full hover:bg-white text-white mt-2 hover:text-black hover:border-white transition-all duration-200 active:scale-95 font-bold tracking-wide shadow-md"
      >
        ← Back
      </button>
    </div>
  );
}
