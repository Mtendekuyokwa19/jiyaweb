import Image from "next/image";
export const Feature = () => {
  return (
    <div>
      <div>
        <h2>Find seats in seconds</h2>
        <p>
          Jiya separates your ride requests from offers to meet your ideal
          desire{" "}
        </p>
      </div>
      <div>
        <Image
          src="/feature_find_rides_quicklypng"
          alt="find rides quickly"
          width={190}
          height={50}
        />
      </div>
    </div>
  );
};
