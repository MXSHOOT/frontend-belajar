import axios from "axios";
import { useEffect, useState } from "react";
import Hello from "../../components/Hello/index"
import Pasiens from "../../components/Global/Pasiens/index";


function Indonesia() {
  const URL = 'covid19.mathdro.id/api/countries/indonesia';

  const [pasiens, setPasiens] = useState([]);

  useEffect(async() => {
    const response = await axios(URL);
    
    setPasiens(response.data.results);
  },[]);

  console.log(pasiens);

  return (
    <>
        <Hello />
        <Pasiens pasiens={pasiens} />
    </>    
  );
}

export default Indonesia;
