import axiosInstance from "../../../helpers/axiosInstance";

export default (history) => {
  axiosInstance(history)
    .get("/jobs/my/")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
