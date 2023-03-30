import { Link } from "react-router-dom";
import convertSecondToMinute from "../assets/script/convert-time";
import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";

import { toggleRepeat, setCurrentTime } from "../redux/slice";
import { useStore, useDispatch, useSelector } from "react-redux";

import ShuffleButton from "./ShuffleButton";
import PlayButton from "./PlayButton";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import data from "../assets/data";

function Single() {
  const dispatch = useDispatch();

  const currentPlaylistIndex = useSelector(
    (state) => state.playlist.currentPlaylistIndex
  );
  const songNowPlaying = useSelector((state) => state.playlist.songNowPlaying);

  const isRepeatOne = useSelector((state) => state.playlist.isRepeatOne);
  const currentTime = useSelector((state) => state.playlist.currentTime);
  setInterval(() => {
    if (window.player) {
      if (window.player.getCurrentTime) {
        dispatch(
          setCurrentTime(convertSecondToMinute(window.player.getCurrentTime()))
        );
      }
    }
  }, 1000);

  let duration = "";

  if (window.player) {
    duration = convertSecondToMinute(window.player.getDuration());
  }

  return (
    <div className="bg-img-1 p-7 max-w-md text-white">
      <div className="bg-rgba-black p-5 m-4 rounded-2xl px-6 py-10">
        <section>
          <div className=" ">
            <Link to="/allplaylists">
              <i className=" text-gray-400 fa fa-home text-xl mr-[8px]"></i>
            </Link>
            <i className=" text-gray-400 fa fa-angle-right text-sm mr-[8px]"></i>
            <Link to={"/playlist/" + currentPlaylistIndex}>
              <span className=" mr-[8px] font-bold text-sm text-gray-300  tracking-widest quicksand ">
                {data.playlists[currentPlaylistIndex].name}
              </span>
            </Link>
            <i className="mr-[8px] text-gray-400 fa fa-angle-right text-sm"></i>
            <span className="  text-sm text-gray-300 self-end tracking-widest quicksand ">
              Now Playing
            </span>
          </div>

          <div className="flex justify-between mt-16">
            <div className="self-end ">
              <h1 className="noto-serif font-bold text-2xl">
                {songNowPlaying.name}
              </h1>
              <p className="mt-3 text-gray-400 text-sm">
                {songNowPlaying.artist}
              </p>
            </div>
            <i className="text-xl mt-1 text-gray-300 fa fa-heart self-start"></i>
          </div>

          <div className="mt-14">
            <div className="text-gray-400 text-xs flex justify-between">
              <p id="current-time">{currentTime}</p>
              <p id="duration">{duration}</p>
            </div>
            <ProgressBar />
          </div>
          <div className="mt-10 text-3xl flex justify-between">
            <ShuffleButton />
            <PrevButton />
            <PlayButton />
            <NextButton />
            <button
              onClick={() => {
                dispatch(toggleRepeat());
              }}
            >
              <i className={isRepeatOne ? "fa fa-1" : "fa fa-repeat"}></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Single;
