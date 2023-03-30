import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import data from "../assets/data";
import shuffleArray from "../assets/script/shuffle-array";
import getYoutubeVideoTitle from "../assets/script/youtube-data-api";


export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    
    songNowPlaying:  (data.playlists)[0].songs[0],
    currentPlaylistIndex: 0,
    currentSongsList: (data.playlists)[0].songs,
    isShuffle: false,
    isRepeatOne: false,
    isPlaying: true,
    currentSongIndex: 0,
    playerState: 1,
progressPercent: 0,
currentTime: '',
videoTitle: 'initial video title'
  },
  reducers: {
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
    
    changeCurrentSongList: (state)=>{
   
      state.currentSongsList =(data.playlists)[state.currentPlaylistIndex].songs;
   
    },
    shuffleSongsList: (state) => {
      state.currentSongsList = shuffleArray( (data.playlists)[state.currentPlaylistIndex].songs);
    },
    resetSongsList: (state) => {
      state.currentSongsList = (data.playlists)[state.currentPlaylistIndex].songs;
    },
    increaseSongIndex: (state) => {
      state.currentSongIndex++;
    },
    decreaseSongIndex: (state) => {
      state.currentSongIndex--;
    },
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    changeReduxPlayerState: (state, action) => {
      state.playerState = action.payload;
    },
    togglePlay: (state, playerState) => {
      if (window.player) {
        if (playerState.payload == 1) {
          window.player.pauseVideo();
        } else{
          window.player.playVideo();  
        }
      }
    },
    toggleRepeat: (state)=>{
      state.isRepeatOne = !state.isRepeatOne
    },
    setProgressPercent: (state,action)=>{
      state.progressPercent = action.payload
    },
    changePlaylistIndex:(state, action)=>{
      state.currentPlaylistIndex = action.payload
    },
setCurrentTime: (state,action)=>{
  state.currentTime = action.payload
},
changeSongNowPlaying: (state,action)=>{
  
  state.songNowPlaying = action.payload
}  },
});

export default playlistSlice.reducer;
export const {
  toggleShuffle,
  shuffleSongsList,
  resetSongsList,
  increaseSongIndex,
  decreaseSongIndex,
  setCurrentSongIndex,
  changeReduxPlayerState,
changeSongNowPlaying,  togglePlay,toggleRepeat,setProgressPercent,setCurrentTime,changePlaylistIndex,changeCurrentSongList} = playlistSlice.actions;
