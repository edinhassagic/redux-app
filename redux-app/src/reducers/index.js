import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Yesterday", duration: "2:05" },
    { title: "Hey Jude", duration: "8:09" },
    { title: "A Hard Days Night", duration: "4:25" },
    { title: "Lucky in the Sky", duration: "3:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
