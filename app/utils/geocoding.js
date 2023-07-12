import React from "react";
import axios from "axios";
async function geocoding(geoCodeAddress) {
  console.log(geoCodeAddress);

  const options = {
    method: "GET",
    url: "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi",
    params: {
      address: geoCodeAddress,
    },
    headers: {
      "X-RapidAPI-Key": "e42da7b395msh7d24a30cfb214d8p181175jsn2683f3c9c1ae",
      "X-RapidAPI-Host": "address-from-to-latitude-longitude.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default geocoding;
