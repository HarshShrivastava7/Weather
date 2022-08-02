// console.log(urlExistSync("https://google.com"));
let fetchingAPI = (name) => {
  const apiID = "d36e2a49f77c14b472a10a9edcc4cc35";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiID}`).then(response => response.json()).then(data => {
    // console.log(data.weather[0].icon);
    // here weather[0] is used bcz weather is an array in api
    if (data.name === undefined) {
      // document.querySelector("#content").innerHTML = `Please Search Valid City....`;
      document.querySelector("#name").innerHTML = `Wrong Input...`;
      document.querySelector("#country").innerHTML = ``;
      document.querySelector("#icon").innerHTML = ``;
      document.querySelector("#temp").innerHTML = ``;
      document.querySelector("#description").innerHTML = ``;
      document.querySelector("body").style.backgroundImage = `url(https://p4.wallpaperbetter.com/wallpaper/473/664/23/temple-jungle-fantasy-art-michele-nucera-wallpaper-preview.jpg)`;
      document.querySelector("body").style.backgroundSize = `cover`;
    } else {
      document.querySelector("#name").innerHTML = `${data.name}`;
      document.querySelector("#country").innerHTML = `, ${data.sys.country}`;
      document.querySelector("#icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;
      document.querySelector("#temp").innerHTML = `${data.main.temp}°C`;
      document.querySelector("#description").innerHTML = `${data.weather[0].main}`;
      // CHECK IF IMAGE EXISTS
      function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;

        if (img.complete) {
          callback(true);
        } else {
          img.onload = () => {
            callback(true);
          };

          img.onerror = () => {
            callback(false);
          };
        }
      }


      // USAGE
      checkIfImageExists(`https://www.holidify.com/images/bgImages/${data.name.toUpperCase()}.jpg`, (exists) => {
        if (exists) {
          document.querySelector("body").style.backgroundImage = `url("https://www.holidify.com/images/bgImages/${data.name.toUpperCase()}.jpg")`;
          console.log('Image exists. ')
        } else {
          document.querySelector("body").style.backgroundImage = `url("https://wallpapercave.com/wp/wp2906721.jpg")`;
          console.error('Image does not exists.')
        }
      });

      document.querySelector("body").style.backgroundSize = `cover`;
    }
  })
}

document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(document.querySelector("#search").value);
  fetchingAPI(document.querySelector("#search").value);
  setTimeout(function() {
    document.querySelector("#search").setAttribute("placeholder", "Search");
  }, 2200)
  document.querySelector("#search").setAttribute("placeholder", (document.querySelector("#search").value));
  document.querySelector("#search").value = "";
  // console.log(document.querySelector("body").style.backgroundImage);
});
