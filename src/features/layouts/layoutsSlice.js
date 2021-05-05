import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieModal: 'closed'
};

const layoutsSlice = createSlice({
  name: 'layouts',
  initialState,
  reducers: {
    layoutOpen(state, action) {
      const element = action.payload;
      state[element] = 'opened';
    },
    layoutClose(state, action) {
      const element = action.payload;
      state[element] = 'closed';
    }
  }
});

// Action creators
export const { layoutOpen, layoutClose } = layoutsSlice.actions;

// Reducer
export default layoutsSlice.reducer;

// Selectors
const selectSelf = (state) => state;

export const selectMovieModal = createSelector(selectSelf, (state) => state.layouts.movieModal);

export const selectIsMovieModalOpen = createSelector(
  selectMovieModal,
  (movieModal) => movieModal === 'opened'
);
