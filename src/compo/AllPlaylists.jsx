import QuickPlay from "./QuickPlay";
import { changeCurrentSongList, changePlaylistIndex } from "../redux/slice";
import "../assets/script/iframe-api";
import React, { useState, useEffect, useRef } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { useStore, useDispatch, useSelector } from "react-redux";
import data from "../assets/data";

function AllPlaylists() {
  const dispatch = useDispatch();
  const {getState} = useStore();
  const currentPlaylistIndex = useSelector(
    (state) => state.playlist.currentPlaylistIndex
  );

  return (
    <>
      <div className="bg-img-1 p-7 max-w-md text-white">
        <div className="bg-rgba-black p-5 m-4 rounded-2xl px-6 py-10">
          <div>
            <h2 className=" self-end tracking-widest quicksand mx-auto">
              Van's Playlists
            </h2>
            <p className="text-sm text-gray-400 mt-3">102 playlists</p>

            <div>
              {/* <div className="ml-auto mt-2 text-2xl w-24 flex justify-between">
                <Shuffle />
                <PlayButton />

                <button>
                  <i className="text-gray-500 fa fa-ellipsis-vertical" />
                </button>
              </div> */}
            </div>

            <div className="mt-10">
              {data.playlists.map((item, index) => (
                <Link to={"/playlist/" + index} key={index}>
                  <div
                    onClick={() => {
                      if (index !== getState().playlist.currentPlaylistIndex) {
                        dispatch(changePlaylistIndex(index));
                      }
                    }}
                    className="mt-5 flex justify-between div-as-button"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-300 text-sm mt-2">
                        {item.songs.length} songs
                      </p>
                    </div>
                    <i className="text-gray-500 fa fa-ellipsis-vertical" />
                  </div>
                </Link>
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

export default AllPlaylists;
