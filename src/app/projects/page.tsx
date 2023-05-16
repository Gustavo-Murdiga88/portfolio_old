import { Header } from "../components/header";
import { Repositories } from "./components/repositories";

interface ProjectsProps {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
}

interface FetchProps {
  per_page?: number;
  page?: number;
}

export async function fetchManyRepositories({
  page = 1,
  per_page = 15,
}: FetchProps) {
  const url = new URL("https://api.github.com/users/gustavo-murdiga88/repos");
  url.searchParams.set("sort", "pushed");
  url.searchParams.set("page", String(page));
  url.searchParams.set("per_page", String(per_page));

  const repos: ProjectsProps[] = await fetch(url, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  }).then((response) => response.json());

  if (!repos) {
    throw new Error("Repositories not found");
  }

  return repos;
}

export default async function Projects() {
  const repos = await fetchManyRepositories({ page: 1, per_page: 12 });

  return (
    <div className="not-scoller h-screen w-full overflow-auto overflow-x-hidden bg-page-main bg-cover bg-left-top">
      <Header />
      <Repositories repositories={repos} />
    </div>
  );
}
