import Post from "./Post";

const MainBlog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <Post />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default MainBlog;
