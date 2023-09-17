import axios from "axios";

/**
 * @desc fetches a single post
 */
export const fetchSinglePost = async ({
  queryKey,
}: {
  queryKey: unknown[];
}) => {
  const [_key, id] = queryKey;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res?.data;
};
