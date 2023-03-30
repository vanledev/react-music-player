import QuickPlay from "./QuickPlay";
import SongLineInList from "./SongLine";
import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";
import Shuffle from "./ShuffleButton";
import PlayButton from "./PlayButton";
import { changeCurrentSongList, setProgressPercent } from "../redux/slice";
import { Routes, Route, Link } from "react-router-dom";

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
import NextButton from "./NextButton";
import getYoutubeVideoTitle from "../assets/script/youtube-data-api";

function Iframe() {
  const { getState } = useStore();
  const dispatch = useDispatch();
  const currentPlaylistIndex = useSelector(
    (state) => state.playlist.currentPlaylistIndex
  );
  const isShuffle = useSelector((state) => state.playlist.isShuffle);
  const currentSongsList = useSelector(
    (state) => state.playlist.currentSongsList
  );

  const songNowPlaying = useSelector((state) => state.playlist.songNowPlaying);
  const currentSongIndex = useSelector(
    (state) => state.playlist.currentSongIndex
  );
  const playerState = useSelector((state) => state.playlist.playerState);
  const isRepeatOne = useSelector((state) => state.playlist.isRepeatOne);

  useEffect(() => {
    dispatch(changeCurrentSongList());
  }, [currentPlaylistIndex]);

  useEffect(() => {
    if (window.player) {
      window.player.cueVideoById({
        videoId: songNowPlaying.id,
      });

    }
  }, [songNowPlaying]);

  useEffect(() => {
    if (playerState == 0) {
      if (isRepeatOne) {
        window.player.playVideo();
      } else {
        if (currentSongIndex == currentSongsList.length - 1) {
          dispatch(setCurrentSongIndex(0));
        } else {
          dispatch(setCurrentSongIndex(currentSongIndex + 1));
        }
        dispatch(changeSongNowPlaying(currentSongsList[currentSongIndex]));
      }
    }



    if (playerState == 5){
      window.player.playVideo()
    }
  }, [playerState]);

  window.player;

  window.onYouTubeIframeAPIReady = function () {
    window.player = new YT.Player("player-div", {
      width: "280",
      height: "200",

      videoId: currentSongsList[currentSongIndex].id,
      events: {
        onReady: window.onPlayerReady,
        onStateChange: window.onPlayerStateChange,
      },
    });

    window.player.personalPlayer = {
      currentTimeSliding: false,
      errors: [],
    };
  };

  window.onPlayerReady = function (event) {
    event.target.playVideo();
  };

  window.onPlayerStateChange = function (event) {
    dispatch(changeReduxPlayerState(event.target.getPlayerState()));
  };

  return <div id="player-div"></div>;
}

export default Iframe;
