import { togglePlay } from "../redux/slice";
import { useDispatch, useSelector, useStore } from "react-redux";

function PlayButton() {
  const dispatch = useDispatch();
  const { getState } = useStore();
  const playerState = useSelector((state) => state.playlist.playerState);
  return (
    <button
      onClick={() => {
        dispatch(togglePlay(getState().playlist.playerState));
      }}
    >
      <i className={playerState !== 1 ? "fa fa-play" : "fa fa-pause "} />
    </button>
  );
}

export default PlayButton;
