import axios from "axios";

const instance = axios.create({
  baseURL: "https://65048c47c8869921ae252b26.mockapi.io",
});

export async function fetchCars(page) {
  try {
    const response = await instance.get(`/advert?page=${page}&limit=8`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
