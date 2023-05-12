import Img from "next/image";
import rockeat from "../assets/rocket.svg";

export function Loading() {
  return (
    <div
      id="loading"
      className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-70"
    >
      <Img
        className="animate-loading"
        src={rockeat}
        height={120}
        width={120}
        alt="rockeat loader"
      />
    </div>
  );
}
