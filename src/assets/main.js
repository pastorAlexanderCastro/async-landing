const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC1emV4A8liRs9p80CY8ElUQ&part=snippet%2Cid&order=date&maxResults=50";

const contenedor = null || document.getElementById("cotenedor");
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "fb4acef53fmsh8c6879f3870e638p1d1c49jsn9097949f288b",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetData(API);
    let view = `
      ${videos.items
        .map(
          (video) =>
            `<div class="group relative">
            <div
           class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span> 
                ${video.snippet.title}
            </h3>            
          </div>
      </div>`
        )
        .slice(0, 4)
        .join("")}
      `;
    contenedor.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
const ghpages = require("gh-pages");

ghpages.publish(
  "src",
  {
    branch: "gh-pages-nueva",
  },
  (err) => {
    if (err) {
      console.error("Error al publicar:", err);
    } else {
      console.log("Sitio web publicado con éxito en la rama gh-pages-nueva");
    }
  }
);
