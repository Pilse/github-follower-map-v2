async function API<T>(
  method: string,
  url: string,
  headers?: HeadersInit,
  body?: BodyInit
) {
  const config: RequestInit = {
    method,
    headers,
    body,
  };

  const res = await fetch(url, config);
  const status = res.status;
  const data: T = await res.json();

  return { data, status };
}

export default API;
