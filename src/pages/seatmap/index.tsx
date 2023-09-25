import React, { useEffect } from "react";
import SeatPickerComponent from "../../components/seat-picker";
import ButtonCustom from "../../components/design/button";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes";
import { useQuery } from "@tanstack/react-query";
import { fetchEventsKey, fetchSinglePostKey } from "../../util/queryKeys";
import { fetchPosts } from "../../services/fetchPosts";
import { fetchSinglePost } from "../../services/fetchSinglePost";
import LoadingComponent from "../../components/common/loading";
import ErrorComponent from "../../components/common/error";
import ListEvents from "../../components/pages/event/listEvents";
import { Space } from "antd";
const SeatMapPage = () => {
  const navigate = useNavigate();

  return (
    <Space direction="vertical" style={{ maxWidth: "100%", display: "flex" }}>
      <ButtonCustom
        content="Create event"
        onClick={() => navigate(RoutesName.EVENT_CREATE)}
      />
      <Example />
      <LoadingComponent />
    </Space>
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
  const {
    isLoading,
    isError,
    isSuccess,
    refetch,
    remove,
    data: listEventResponseAxios,
    error,
  } = useQuery([fetchEventsKey], fetchPosts);

  const { data: dataSinglePost } = useQuery(
    [fetchSinglePostKey, 1],
    fetchSinglePost
  );

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : isError ? (
        <ErrorComponent message="There is some error while fetching events" />
      ) : (
        <>
          <h1>Lots of post</h1>
          {/* {listEventResponseAxios.data?.data.map((event) => (
            <div key={event?.eventId}>
              <p>{event.eventName}</p>
            </div>
          ))} */}
          <ListEvents />
        </>
      )}
    </div>
  );
}
