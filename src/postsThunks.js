import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from './postsSlice';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    const response = await fetch('https://api.example.com/posts');
    const data = await response.json();
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};