import Image from "next/image";
export const Feature = () => {
  return (
    <div className="flex px-32">
      <div className="flex flex-row-reverse justify-center items-center">
        <div>
          <h2 className="font-bold text-4xl ">Find seats in seconds</h2>
          <p>
            Jiya separates your ride requests from offers to meet your ideal
            desire{" "}
          </p>
        </div>

        <div className="">
          <Image
            src="/feature_find_rides_quickly.png"
            alt="find rides quickly"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
