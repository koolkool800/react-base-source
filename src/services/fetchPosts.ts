import axios from "axios";
import { ApiResponse, axiosInstance } from "../configs/axios";
import { Event } from "../types/event";

/**
 * @desc fetch a list of posts
 */

interface IEventResponseList {
  data: Event[];
  length: number;
}

export const fetchPosts = async () => {
  const res = await axiosInstance.get<ApiResponse<IEventResponseList>>(
    `admin/events`
  );
  return res?.data;
};
