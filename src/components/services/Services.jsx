import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";

const servicesData = [
  {
    id: 1,
    title: "Security",
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla possimus repellendus sed fugit doloribus sunt aspernatur perspiciatis facere eveniet.",
    icon: Icon1,
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla possimus repellendus sed fugit doloribus sunt aspernatur perspiciatis facere eveniet.",
    icon: Icon2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla possimus repellendus sed fugit doloribus sunt aspernatur perspiciatis facere eveniet.",
    icon: Icon3,
    delay: 1.1,
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((data) => (
              <UpdateFollower 
              mouseOptions={{
                backgroundColor: "white",
                zIndex:9999,
                followSpeed:0.5,
                scale:5, 
                rotate:720,
                mixBlendMode:"darken",
                backgroundElement: (
                    <div>
                        <img src={data.icon} alt="" />
                    </div>
                )
              }}
              key={data.id}>
                <div className="flex flex-col justify-center items-center p-5 max-w-[300px] mx-auto shadow-lg rou bg-white">
                  <img src={data.icon} alt="" className="w-[100px] mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="text-center text-sm text-black/75">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
