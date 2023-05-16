interface FetchProps {
  per_page?: number;
  page?: number;
}

interface ProjectsProps {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
}

export async function fetchManyRepositories({
  page,
  per_page = 9,
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
