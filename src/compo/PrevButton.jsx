import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";
import Iframe from "./Iframe";
import {
  changeSongNowPlaying,
  changeReduxPlayerState,
  toggleShuffle,
  shuffleSongsList,
  resetSongsList,
  increaseSongIndex,
  decreaseSongIndex,
  setCurrentSongIndex,
  togglePlay,
  toggleRepeat,
} from "../redux/slice";
import { useStore, useDispatch, useSelector } from "react-redux";

function PrevButton() {
  const { getState } = useStore();
  const dispatch = useDispatch();

  const currentSongsList = useSelector(
    (state) => state.playlist.currentSongsList
  );

  const currentSongIndex = useSelector(
    (state) => state.playlist.currentSongIndex
  );

  return (
    <button
      onClick={() => {
        if (getState().playlist.currentSongIndex == 0) {
          dispatch(
            setCurrentSongIndex(getState().playlist.currentSongsList.length - 1)
          );
        } else {
          dispatch(decreaseSongIndex());
        }

        dispatch(
          changeSongNowPlaying(
            getState().playlist.currentSongsList[
              getState().playlist.currentSongIndex
            ]
          )
        );
      }}
    >
      <i className="fa fa-backward"></i>
    </button>
  );
}

export default PrevButton;
