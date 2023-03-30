import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";

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

function NextButton() {
  const { getState } = useStore();
  const dispatch = useDispatch();


  return (
    <button
      onClick={() => {
        if (
          getState().playlist.currentSongIndex ==
          getState().playlist.currentSongsList.length - 1
        ) {
          dispatch(setCurrentSongIndex(0));
        } else {
          dispatch(increaseSongIndex());
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
      <i className="fa fa-forward"></i>
    </button>
  );
}

export default NextButton;
