import axios from "axios";

/**
 * @desc fetch a list of posts
 */
export const fetchPosts = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res?.data;
};
