import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getBlog, updateLikes,updateSaved} from "./blogAPI"

//initialState
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const updateBlogLikes = createAsyncThunk(
  "blog/updateBlogLikes",
  async (id) =>{
    const updatedBlog = await updateLikes(id)
    return updatedBlog
  }
)
export const updateBlogSaved = createAsyncThunk(
  "blog/updateBlogSaved",
  async (id) =>{
    const updatedBlog = await updateSaved(id)
    return updatedBlog
  }
)

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    //Get Blog
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      //Updated Blog 
      builder
      .addCase(updateBlogLikes.pending, (state) => {
        return state
      })
      .addCase(updateBlogLikes.fulfilled, (state, action) => {
        state.blog.likes = action.payload.likes;
      })
      .addCase(updateBlogLikes.rejected, (state) => {
        return state
      })
      //Updated Blog 
      builder
      .addCase(updateBlogSaved.pending, (state) => {
        return state
      })
      .addCase(updateBlogSaved.fulfilled, (state, action) => {
        state.blog.isSaved = action.payload.isSaved;
      })
      .addCase(updateBlogSaved.rejected, (state) => {
        return state
      })
  },
});

export default blogSlice.reducer;
