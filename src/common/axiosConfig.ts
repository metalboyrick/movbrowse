import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export default axios;
