"use server"

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

type FetchApiPropsType = {
  url: string;
  cache?: RequestCache;
}

export async function fetchAPI<T>(props: FetchApiPropsType): Promise<ApiResponse<T>> {
  const { url, cache = 'force-cache' } = props;

  const response = await fetch(url, { cache } as RequestInit);
  let data: T | null = null;
  let error: string | null = null;

  if (response.ok) {
    try {
      data = await response.json();
    } catch (err) {
      error = 'Error parsing response JSON';
    }
  } else {
    error = 'Something went wrong';
  }

  return {
    data,
    error,
    status: response.status
  };
}

