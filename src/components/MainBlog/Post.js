import { FiMoreHorizontal } from "react-icons/fi";
import { BsShareFill, BsEye } from "react-icons/bs";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div>
        <img width="100%" src="images/post-1.jpg" alt="" />
      </div>
      <div className="post__content">
        <div className="post__category">
          <span className="pb-2">✍️</span>
          <span>Article</span>
        </div>
        <div className="row justify-content-between post__title">
          <div className="col-10 ">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </div>
          <div className="col-1 text-end">
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="post__description">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </div>
        <div className="row post__author justify-content-between">
          <div className="col-8">
            <div className="d-flex gap-2 align-items-center">
              <div className="mr-2">
                <img src="images/hero.jpg" width={50} height={50} alt="" />
              </div>
              <div className="">
                <h4>author title</h4>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center justify-content-start me-3">
                <div className="me-1">
                  <BsEye />
                </div>
                <div>1.4k views</div>
              </div>
              <div className="post__author__icon d-flex justify-content-center align-items-center">
                <BsShareFill />
                <span>share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
