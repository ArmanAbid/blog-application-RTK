import axios from "../../utils/axios";

export const getBlogs = async ({ sort, isSaved }) => {
  const queryString = isSaved&&`isSaved_like=${isSaved}`;

  const response = await axios(`/blogs?${queryString}`);

  let res;

  if (sort === "newest") {
    res = response.data.sort((newest, old) => {
      return new Date(old.createdAt) - new Date(newest.createdAt);
    });
  } else if (sort === "most_liked") {
    res = response.data.sort((most, current) => {
      return current.likes - most.likes;
    });
  } else {
    res = response.data;
  }
  return res;
};
