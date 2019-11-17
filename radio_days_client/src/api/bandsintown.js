const baseURL = "https://search.bandsintown.com/";
const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

export const getMusicByVenues = venueString => {
  const params = {
    query: JSON.stringify(venueString)
  };
  let url = `${baseURL}search?${new URLSearchParams(params).toString}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-api-key": "nTG4tbSXpIaniCHlJ62q06GzIpROk6qh56EiK7N1"
    }
  }).then(response => response.json());
};
