import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import Video from "./Video";

function Videos() {
  let [page, setPage] = useState(0);

  // eslint-disable-next-line no-unused-vars
  let { videos, loading, hasMore, error } = useVideoList(page);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        videos.length > 0 && (
          <InfiniteScroll
            dataLength={videos.length}
            hasMore={hasMore}
            loader="Loading..."
            next={() => setPage((prevPage) => prevPage + 8)}
          >
            {videos.map((video, index) =>
              video.noq > 0 ? (
                <Link to="/quiz" key={video.youtubeID + index}>
                  <Video
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              ) : (
                <Video
                  key={video.youtubeID + index}
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              )
            )}
          </InfiniteScroll>
        )
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
    </div>
  );
}

// const MemoizedVideos = React.memo(Videos);
export default Videos;
