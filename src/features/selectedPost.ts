import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

export type SelectedPostState = {
  selectedPost: Post | null;
};

const initialState: SelectedPostState = {
  selectedPost: null,
};

export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      /* eslint-disable-next-line no-param-reassign */
      state.selectedPost = action.payload;
    },
  },
});

export const selectedPostReducer = selectedPostSlice.reducer;
export const { setSelectedPost } = selectedPostSlice.actions;