import axios from "axios";

export const BASE_URL = "http://testapi.hits.ai";

export const getAllResults = async () => {
  let resp;
  try {
    let resultDataURL = `${BASE_URL}/result`;
    resp = await axios.get(resultDataURL);
  } catch (e) {
    console.log("EEROR IN API");
    throw e;
  }
  return resp.data;
};

export const getResultByName = async (name: string) => {
  let resp;
  try {
    resp = await axios.get(`${BASE_URL}/result/${name}`);
  } catch (e) {
    throw e;
  }
  return resp.data;
};
