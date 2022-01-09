import { IFollowerResponse } from "./interfaces";

async function API(
  method: string,
  url: string,
  headers?: HeadersInit,
  body?: BodyInit
) {
  try {
    const config: RequestInit = {
      method,
      headers,
      body,
    };

    const res = await fetch(url, config);
    const data: IFollowerResponse = await res.json();

    return data;
  } catch (err: any) {
    console.log(err);
  }
}

export default API;
