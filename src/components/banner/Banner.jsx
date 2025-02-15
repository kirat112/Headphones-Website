import Headphone4 from "../../assets/headphone4.png"
const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 place-items-center">
            {/* Banner Image */}
            <div>
                <img src={Headphone4} alt="" className="w-[300px] md:w-[400px]"/>
            </div>

            {/* Banner Text */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                    <h1 className="text-3xl lg:text-4xl font-semibold font-poppins">The Latest Headphones with Latest Technology</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed odio architecto illo culpa nam, sunt provident eveniet minima vero?</p>
                    <button className="border-2 border-[#e33343] text-[#e33343] hover:bg-[#e33343] hover:text-white p-2">Learn More</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner
