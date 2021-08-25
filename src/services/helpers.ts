export const apiBaseRoute = "https://swapi.dev/api/";

export const defaultRequestConfig: Partial<RequestInit> = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  mode: "cors",
};
