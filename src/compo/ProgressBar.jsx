import "../assets/script/iframe-api";
import React, { useEffect, useRef } from "react";
import Iframe from "./Iframe";
import {
  changeReduxPlayerState,
  toggleShuffle,
  shuffleSongsList,
  resetSongsList,
  increaseSongIndex,
  decreaseSongIndex,
  setCurrentSongIndex,
  togglePlay,
  toggleRepeat,
  setProgressPercent,
} from "../redux/slice";
import { useStore, useDispatch, useSelector } from "react-redux";

function ProgressBar() {
  const { getState } = useStore();
  const dispatch = useDispatch();

  setInterval(() => {
    if (window.player) {
      if (window.player.getCurrentTime) {
        dispatch(
          setProgressPercent(
            (window.player.getCurrentTime() / window.player.getDuration()) * 100
          )
        );
      }
    }
  }, 1000);

  return (
    <>
      <input
        className="progress-bar"
        type="range"
        min="0"
        max="100"
        step="1"
        value={useSelector((state) => state.playlist.progressPercent)}
        onChange={(e) => {
          dispatch(setProgressPercent(e.target.value));
          if (window.player) {
            window.player.seekTo(
              (e.target.value * window.player.getDuration()) / 100,
              true
            );
          }
        }}
      />
    </>
  );
}

export default ProgressBar;
