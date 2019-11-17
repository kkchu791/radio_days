const baseURL = "https://search.bandsintown.com/";

export const getMusicByVenues = async (genre, latitude, longitude) => {
  let url = `${baseURL}search?query=%7B%22region%22%3A%7B%22latitude%22%3A${latitude}%2C%22longitude%22%3A${longitude}%2C%22radius%22%3A5%7D%2C%22filter%22%3A%22${genre}%22%2C%22entities%22%3A%5B%7B%22type%22%3A%22event%22%2C%22order%22%3A%22start%20date%22%2C%20%22limit%22%3A%222%22%7D%5D%7D`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "nTG4tbSXpIaniCHlJ62q06GzIpROk6qh56EiK7N1"
    }
  });
  const responseJson = response.json();
  return responseJson;
};
