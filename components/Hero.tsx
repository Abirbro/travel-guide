import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <section
      className=" max-container padding-container flex-col gap-20
    py-10 pb-32 md:gap-28 lg:py-20  xlflex-row  "
    >
      <div className="hero-map " />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        {" "}
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absoulute left-[-5px] top-[-30px] w-10 lg:w-[50px] "
        />
        <h1 className="bold-52 lg:bold-88 ">Candil Hill Camp Area</h1>
        <p className="regular-16 mt-16 text-gray-30 xl:max-w-[520px] ">
          {" "}
          We want to be on each of your jourmey seeking the satisfiction of
          seeing the incorruptible beauty of nature. We can help you on
          adventure around the world in just one app{" "}
        </p>
        <div className="my-11 flex flex-wrap gap-5 ">
          <div className="flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image src="/star.svg" alt="star" width={24} height={24} />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">198k</p>
          <span className="regular-16 lg:regular-20 ml-1 underline">
            Excellent Reviews
          </span>
        </div>
        <div className="flex w-full gap-3 sm:flex-row ">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?
        "
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start  ">
        <div className="relative z-10 w-[268px] flex  flex-col gap-8  rounded-3xl bg-gray-90 px-7 py-8">
          <div className="flex flex-col ">
            <div className="flexBetween ">
              <p className="regular-16 text-gray-20  ">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white ">Aguas Calintes</p>
          </div>

          <div className="flexBetween ">
            <p className="regular-16 block text-gray-20  ">Distance</p>
            <p className="bold-20 text-white  ">126.35 Miles</p>
          </div>
          <div className="flexBetween ">
            <p className="regular-16 block text-gray-20  ">Elevation</p>
            <p className="bold-20 text-white  ">2.084 Km</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;