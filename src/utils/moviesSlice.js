import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null,
        PopulerMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopulerMovies: (state, action)=>{
            state.PopulerMovies = action.payload;
        },
        addTopRatedMovies:(state, action) =>{
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.UpcomingMovies = action.payload;
        },
        TrailerVideo:(state, action)=>{
            state.TrailerVideo = action.payload;
        }
    }
})
export const {addNowPlayingMovies,addPopulerMovies,addTopRatedMovies,addUpcomingMovies, TrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;