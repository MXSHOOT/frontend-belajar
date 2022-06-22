import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hello from "../../components/Hello/index";
import Pasiens from "../../components/Global/Pasiens/index";
import { updatePasiens } from "../../features/pasiensSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Global() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPasiens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPasiens() {
    const response = await axios(ENDPOINTS.GLOBAL);
    const pasiens = response.data.results;
    dispatch(updatePasiens(pasiens));
  }

  return (
    <>
      <Hello />
      <Pasiens title="Global" />
    </>
  );
}

export default Global;
