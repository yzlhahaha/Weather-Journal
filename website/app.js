/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apikey = "3c81cd1d7a6637915a0c0b77e0b23b5f";

const zipcode = document.getElementById("zip");
const feelings = document.getElementById("feelings");
const generate = document.getElementById("generate");

// Receive date information, this will give the date
const get_date = new Date().toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
});

// Receive temperature information, this will give the temperature
const get_temperature = async (baseUrl, zipcode, apikey) => {
    const response = await fetch(`${baseUrl}?zip=${zipcode},us&appid=${apikey}`);
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

// Client side post request
const postData = async (url='', data={})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};

// function to update UI
const updateUI = async () => {
    const request = await fetch('/database');
    try{
      const allData = await request.json();
      document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature} kel`;
      document.getElementById('date').innerHTML = 'Date: ' + allData.date;
      document.getElementById('content').innerHTML = 'Feelings: ' + allData.feeling;
  
    }catch(error){
      console.log("error", error);
    }
}

// adding event listener for click
document.getElementById('generate').addEventListener('click', async() => {
  const zcode = zipcode.value;
  const feeling =  feelings.value;
  const temp = await get_temperature(baseUrl, zcode, apikey);
  const f_temp = temp.main.temp;
  try {
      postData('/database', {temperature: f_temp, date: get_date, feeling: feeling});
      updateUI();
  } catch(error) {
    console.log("error", error);
  }
});


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();