import QuickPlay from "./QuickPlay";
import SongLineInList from "./SongLine";
import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";
import Shuffle from "./ShuffleButton";
import PlayButton from "./PlayButton";
import { Routes, Route, Link } from "react-router-dom";
import { useStore, useDispatch, useSelector } from "react-redux";
import { setCurrentSongIndex, changeSongNowPlaying } from "../redux/slice";

function OnePlaylist({ playlistData }) {
  const dispatch = useDispatch();
  const { getState } = useStore();

  const currentSongsList = useSelector(
    (state) => state.playlist.currentSongsList
  );

  return (
    <>
      <div className="bg-img-1 p-7 max-w-md text-white">
        <div className="bg-rgba-black p-5 m-4 rounded-2xl px-6 py-10">
          <div>
            <Link to="/allplaylists">
              <i className=" text-gray-400 fa fa-home text-xl mr-[8px]"></i>
            </Link>
            <i className=" text-gray-400 fa fa-angle-right text-sm mr-[8px]"></i>
            <span className=" self-end tracking-widest quicksand mx-auto">
              {playlistData.name}
            </span>
            <p className="text-sm text-gray-400 mt-3">
              {playlistData.songs.length} songs
            </p>

            <div>
              <div className="ml-auto mt-2 text-2xl w-24 flex justify-between">
                <Shuffle />
                <PlayButton />

                <button>
                  <i className="text-gray-500 fa fa-ellipsis-vertical" />
                </button>
              </div>
            </div>

            <div className="mt-10">
              {currentSongsList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    dispatch(setCurrentSongIndex(index));

                    dispatch(
                      changeSongNowPlaying(
                        getState().playlist.currentSongsList[index]
                      )
                    );
                  }}
                >
                  <SongLineInList
                    index={index}
                    name={item.name}
                    artist={item.artist}
                    id={item.id}
                    key={item.id}
                  />
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md ">
        <QuickPlay />
      </div>
    </>
  );
}

export default OnePlaylist;
