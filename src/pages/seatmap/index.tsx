import React, { useEffect } from "react";
import SeatPickerComponent from "../../components/seat-picker";
import ButtonCustom from "../../components/design/button";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes";
import { useQuery } from "@tanstack/react-query";
import { fetchPostsKey, fetchSinglePostKey } from "../../util/queryKeys";
import { fetchPosts } from "../../services/fetchPosts";
import { fetchSinglePost } from "../../services/fetchSinglePost";
import LoadingComponent from "../../components/common/loading";
const SeatMapPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <SeatPickerComponent /> */}
      <LoadingComponent />
      <Example />
      <ButtonCustom
        content="Create event"
        onClick={() => navigate(RoutesName.EVENT_CREATE)}
      />
    </div>
  );
};
export default SeatMapPage;

// https://booking.seatmap.pro/
// https://github.com/topics/seat-map
// https://observablehq.com/@d3/zoomable-sunburst?intent=fork
// https://seatmap.pro/docs/#_introduction
// https://codesandbox.io/s/seat-bookig-component-pt8q2?file=/src/SeatAllocationComponent.jsx
// https://codesandbox.io/s/tongariro-cinema-website-j3mgnw?file=/src/pages/movie/Movie.jsx
// https://github.com/topics/react-typescript-boilerplate

function Example() {
  const { isLoading, isError, isSuccess, refetch, remove, data, error } =
    useQuery([fetchPostsKey], fetchPosts);

  const { data: dataSinglePost } = useQuery(
    [fetchSinglePostKey, 1],
    fetchSinglePost
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>An error while fetching posts</div>
      ) : (
        <>
          <h1>signle post</h1>
          <div>{dataSinglePost?.title}</div>
          <h1>Lots of post</h1>
          {data?.map((post: any) => (
            <div key={post?.id}>
              <div>{post?.title}</div>
              <div>{post?.body}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
