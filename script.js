let API_KEY = "107bfd2c01fd776fedd15c2b2f552bd9"


// showWeather()
async function showWeather(){

    try{
        let city = 'delhi';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await response.json();
        console.log(data)
    }catch(e){
        console.log('Error')
    }
}


// // THIS IS FOR GETTING THE CURRENT LOACTION OF THE USER 
// getLocation()
// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showposition)
//     }
//     else{
//         console.log('location not found')
//     }
// }

// async function showposition(position){
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     console.log('latitude : ',lat)
//     console.log('longitude : ',long)
    
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)

//     let data = await response.json()
//     console.log(data.main.temp)
// }


























