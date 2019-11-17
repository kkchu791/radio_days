const baseURL = "https://hackathon.umusic.com/prod/v1/";
export const getArtistId = async artist => {
  let url = `${baseURL}search/artists?q=${artist}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh"
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
      "x-api-key": "xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh"
    }
  });
  const responseJson = response.json();
  return responseJson;
};

// export const getSongsByArtist = async artistId => {
//   let url = `${baseURL}artists/${artistId}`;
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "x-api-key": "xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh"
//     }
//   });
//   const responseJson = response.json();
//   return responseJson;
// };
