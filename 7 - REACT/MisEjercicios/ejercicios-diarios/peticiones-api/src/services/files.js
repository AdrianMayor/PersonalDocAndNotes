import axios from "axios";

export async function getData() {
  try {
    const { data } = await axios.get(`http://localhost:8080/files`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getDataFetch() {
  try {
    const response = await fetch(`http://localhost:8080/files`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function postData({ file }) {
  try {
    const FormData = require("form-data");
    const form = new FormData();
    form.append("file", file);

    await axios.post(`http://localhost:8080/upload`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.error(err);
  }
}

export const postDataFetch = async ({ file }) => {
  try {
    const FormData = require("form-data");
    const formData = new FormData();
    formData.append("file", file);

    await fetch(`http://localhost:8080/upload`, {
      method: "POST",
      body: formData,
    });
  } catch (err) {
    console.error(err);
  }
};
