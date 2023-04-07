import { Link } from "react-router-dom";
import SongLineInList from "./SongLine";
import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";
import Single from "./Single";
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
} from "../redux/slice";
import { useStore, useDispatch, useSelector } from "react-redux";
import Shuffle from "./ShuffleButton";
import PlayButton from "./PlayButton";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";

function QuickPlay() {
  const songNowPlaying = useSelector((state) => state.playlist.songNowPlaying);
  return (
    <section className="">
      <div className="w-full p-0 ">
        <div className="h-65 p-0 text-white    w-full">
          <div className="mt-[-24px]">
            <ProgressBar />
          </div>

          <div className="px-5 pb-5 my-auto flex bg-dark justify-between">
            <div class="grow">
              <Link to="/single">
                <p className="font-bold text-[13px]">{songNowPlaying.name}</p>
                <p className="text-gray-300 text-[11px] ">
                  {songNowPlaying.artist}
                </p>
              </Link>
            </div>

            <div className="z-10 my-auto text-2xl">
              <PrevButton />
              <PlayButton />
              <NextButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickPlay;
