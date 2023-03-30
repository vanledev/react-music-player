import {toggleKeepPlayingCurrentSong,
  toggleShuffle,
  shuffleSongsList,
  resetSongsList,
} from "../redux/slice";
import { useStore, useDispatch, useSelector } from "react-redux";
function ShuffleButton() {
  const { getState } = useStore();
  const dispatch = useDispatch();
  const isShuffle = useSelector((state) => state.playlist.isShuffle);
  const currentPlaylistIndex = useSelector(
    (state) => state.playlist.currentPlaylistIndex
  );
  return (
    <button
      onClick={() => {
        dispatch(toggleShuffle());
        
        getState().playlist.isShuffle
          ? dispatch(shuffleSongsList())
          : dispatch(resetSongsList());
      }}
    >
      <i
        className={isShuffle ? "fa fa-shuffle" : "fa fa-shuffle disabled-icon"}
      ></i>
    </button>
  );
}

export default ShuffleButton;
