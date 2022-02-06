  
    let keyValue = "711eca7481f8024eae9166a31ddf2a23"
    // let apiCall = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={711eca7481f8024eae9166a31ddf2a23}`;
    
    async function getWeatherData(){
        try{
        let cityName =  document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyValue}&units=metric`);
        let data = await res.json();
        // console.log('data:', data)
        showWeather(data)
        showMap(cityName);
        }
      catch(err) {
          console.log('Kuch Galti hai:', err)
    
      }  
    }

    // async function getWeatherData(){
    //     try{
    //     let cityName =  document.getElementById("city").value;
    //     let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyValue}&units=metric`);
    //     let data = await res.json();
    //     // console.log('data:', data)
    //     showWeather(data)
    //     showMap(cityName);
    //     }
    //   catch(err) {
    //       console.log('Kuch Galti hai:', err)
    
    //   }  
    // }

    // let symbol = °

    let box1 = document.getElementById("box")
    let box2 = document.getElementById("mapBox")
    
    function showWeather(data){
    box1.innerHTML = null;
    // console.log('Data is here', data)
    
    let div = document.createElement("div");
    let city = document.createElement("p")
    city.innerHTML = `<b>City:</b> ${data.name}`
    let temp = document.createElement("p");
    temp.innerHTML = `<b>Temp:</b> ${data.main.temp}°C`;

    // let temp_min  = document.createElement("p")
    // temp_min.innerHTML = data.main.temp_min;

    // let temp_max  = document.createElement("P")
    // temp_max.innerHTML = data.main.temp_max;

    let pressure = document.createElement("p")
    pressure.innerHTML = `<b>Pressure:</b> ${data.main.pressure}`;

    let humidity = document.createElement("p")
    humidity.innerHTML = `<b>Humidity:</b> ${data.main.humidity}`;

    div.append(city,temp,pressure, humidity)
    // console.log('div:', div)
    box1.append(div);
    }

    function data7days(){
        // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    }
    data7days("hello")

    

    function showMap(city){
        box2.innerHTML = null;
        let apiKey = "AIzaSyDpJcoJyLRrIQIA7BErNyj-yHZAqhTFlas"
        let place = document.getElementById("city").value
        let iframe = document.createElement("iframe")
        iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${place}`
        iframe.style.width = "600px";
        iframe.style.height = "600px";
        iframe.style.allowfullscreen = true;
       box2.append(iframe);
          
    }
