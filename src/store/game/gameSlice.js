import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 0,
  isGameStarted: false,
  hoveredSquares: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setMode: (state, { payload: mode }) => {
      state.mode = mode;
      return state;
    },
    setIsStarted: (state, { payload: isStarted }) => {
      state.isGameStarted = isStarted;
      return state;
    },
    addHoveredSquare: (state, { payload: hovered }) => {
      state.hoveredSquares.push(hovered);
      return state;
    },
    resetGameOptions: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { actions, reducer } = gameSlice;
