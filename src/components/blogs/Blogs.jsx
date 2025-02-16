import { UpdateFollower } from "react-mouse-follower";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";

const blogsData = [
  {
    id: 1,
    title: "This is first blog",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, blanditiis.",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "This is second blog",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, blanditiis.",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "This is third blog",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, blanditiis.",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "This is fourth blog",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, blanditiis.",
    link: "#",
    img: Blog4,
  },
];
const Blogs = () => {
  return (
    <>
      <section>
        <div className="container py-14">
          <h1 className="text-3xl font-poppins text-center font-bold pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {blogsData.map((data) => {
              return (
                <UpdateFollower
                  key={data.id}
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "Read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg gap-6 rounded-md bg-white hover:-translate-y-2 duration-300"
                    key={data.id}
                  >
                    <img src={data.img} alt="" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2">{data.desc}</p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
