import axios from "../../utils/axios";

export const getBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

export const updateLikes = async (id) => {
  const { data } = await axios.get(`/blogs/${id}`);
  const response = await axios.patch(`/blogs/${id}`, {
    likes: data.likes + 1,
  });
  return response.data;
};
export const updateSaved = async (id) => {
  const { data } = await axios.get(`/blogs/${id}`);
  const response = await axios.patch(`/blogs/${id}`, {
    isSaved: !data.isSaved,
  });
  return response.data;
};
