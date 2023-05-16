import { Loading as Loader } from "../components/loader";

export default function Loading() {
  return (
    <div className="h-screen w-full bg-page-main">
      <Loader />
    </div>
  );
}
