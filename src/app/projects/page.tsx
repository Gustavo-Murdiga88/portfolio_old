import { Header } from "../components/header";
import { Repositories } from "./components/repositories";
import { fetchManyRepositories } from "./fetch";

export default async function Projects() {
  const repos = await fetchManyRepositories({ page: 1, per_page: 12 });

  return (
    <div className="not-scoller h-screen w-full overflow-auto overflow-x-hidden bg-page-main bg-cover bg-left-top">
      <Header />
      <Repositories repositories={repos} />
    </div>
  );
}
