import { Info } from "../service/info.mjs";

export default function initAllMatchesController(db) {
  const index = async (request, response) => {
    try {
      Info(db).then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
