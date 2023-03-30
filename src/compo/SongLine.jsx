import "../assets/script/iframe-api";
import { useDispatch } from "react-redux";
import { setCurrentSongIndex } from "../redux/slice";

function SongLineInList(props) {
  const dispatch = useDispatch();
  return (
    <div
    
      className="mt-5 flex justify-between div-as-button"
    >
      <div youtube-id={props.id}>
        <p className="font-semibold">{props.name.substring(0, 20) + "..."}</p>
        <p className="text-gray-300 text-sm mt-2">{props.artist}</p>
      </div>
      <i className="text-gray-500 fa fa-ellipsis-vertical" />
    </div>
  );
}

export default SongLineInList;
