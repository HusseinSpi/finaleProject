import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStories } from "../redux/thunk/storiesThunk";

const StoriesComponent = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.stories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllStories());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((story) => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.text}</p>
        </div>
      ))}
    </div>
  );
};

export default StoriesComponent;
