// const apiKey= '2404506';
// const apiUrl= 'https://geo.ipify.org/api/v2/country?apiKey=at_6lQEoDU4n5VVobs6ao979R3jCAZpN&ipAddress=8.8.8.8';

// fetch (apiUrl, {
//     headers: {
//         'Authorisation': `API_KEY ${apiKey}`
//     }
// })



// GET  
// 'https://geo.ipify.org/api/v2/country?apiKey=at_6lQEoDU4n5VVobs6ao979R3jCAZpN&ipAddress=8.8.8.8'


// fetch ('https://geo.ipify.org/api/v2/country?apiKey=at_6lQEoDU4n5VVobs6ao979R3jCAZpN&ipAddress=8.8.8.8')

// .then(res => res.json())
// .then(data => console.log(data))

// last section i remembered 

// const apiKey = '5363829';
// const ipAddress = '8.8.8.8';

// const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the API response
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });

  //last section ends here



  const apiKey = '2404513';
const ipAddress = '8.8.8.8';

const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
  
    displayResponse(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

function displayResponse(data) {
  const responseContainer = document.getElementById('response-container');
  responseContainer.innerHTML = `
    <p>IP: ${data.ip}</p>
    <p>Country: ${data.location.country}</p>
    <p>Region: ${data.location.region}</p>
    <p>Timezone: ${data.location.timezone}</p>
    <p>ISP: ${data.isp}</p>
    <p>AS Name: ${data.as.name}</p>
    <!-- Add more fields as needed -->
  `;
}


// .then(data => {
//     // Handle the API response
//   console.log(data);
// })
//   .catch(error => {
//    // Handle any errors
//      console.error('Error:', error);
//   });




// const apiKey = 'YOUR_API_KEY';
// const apiUrl = 'https://api.example.com/endpoint';

// fetch(apiUrl, {
//   headers: {
//     'Authorization': `API_KEY ${apiKey}`
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Handle the API response
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });



// map

var map=L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);