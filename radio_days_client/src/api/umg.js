import umgApiKey from "../api/apikeys";

const baseURL = "https://hackathon.umusic.com/prod/v1/";
export const getArtistId = async artist => {
  let url = `${baseURL}search/artists?q=${artist}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": umgApiKey
    }
  });
  const responseJson = response.json();
  return responseJson;
};

export const getSongsByArtist = async artistId => {
  let url = `${baseURL}artists/${artistId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": umgApiKey
    }
  });
  const responseJson = response.json();
  return responseJson;
};

export const getAlbumArt = async isrc => {
  let url = `https://hackathon.umusic.com/prod/v1/isrc/${isrc}/cover`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": umgApiKey
    }
  });
  const responseJson = response.json();
  return responseJson;
};
