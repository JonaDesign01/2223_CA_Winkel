async function success(position) {
  const apiKey = 'pk.eyJ1Ijoiam9uYW1hcHMiLCJhIjoiY2xlbWpxaHF4MTYwNjNxbXpvOGJidzJmcCJ9.VmUM5Pq9Bb3vkthFr8C-qw';
  const endpoint = 'mapbox.places';
  const latitude = 51.1992331;
  const longitude = 4.4143465;
  const url = `https://api.mapbox.com/geocoding/v5/${endpoint}/${longitude},${latitude}.json?access_token=${apiKey}`;

  try {
    const loader = document.querySelector("#loader");
    loader.style.display = "block"; // show the loader

    const response = await fetch(url);
    const json = await response.json();
    const mijnAdres = document.querySelector("#adres");
    mijnAdres.textContent = json.features[0].place_name;

    loader.style.display = "none"; // hide the loader after the request completes

  } catch(error) {
    console.log(error);
  }
}

await success()

