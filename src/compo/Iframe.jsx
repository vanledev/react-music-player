import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";
import {
  changeCurrentSongList,
  setProgressPercent,
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
        if (
          getState().playlist.currentSongIndex ==
          getState().playlist.currentSongsList.length - 1
        ) {
          dispatch(setCurrentSongIndex(0));
        } else {
          dispatch(
            setCurrentSongIndex(getState().playlist.currentSongIndex + 1)
          );
        }

        dispatch(
          changeSongNowPlaying(
            getState().playlist.currentSongsList[
              getState().playlist.currentSongIndex
            ]
          )
        );
      }
    }
    if (playerState == 5) {
      window.player.playVideo();
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
