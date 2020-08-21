import axios from "axios";
import consts from "../../consts";

export const getMenu = () => {
  return (dispatch) => {
    axios
      .get(`${consts.Api}/acessosMenu`)
      .then((resp) => {
        dispatch([{ type: "MENU_FETCHED", payload: resp }]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
};

// export const getMenu = async () => {
//   const request = await axios.get(`${consts.Api}/acessosMenu`)
//   return {
//     type: 'MENU_FETCHED',
//     payload: request
// }
// };
