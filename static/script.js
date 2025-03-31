// script.js
// Function to control the slideshow
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }    
      
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      if (slides[slideIndex - 1]) {
          slides[slideIndex - 1].style.display = "block";  
          dots[slideIndex - 1].className += " active";
      }
      
      setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
  
  window.plusSlides = function(n) {
    slideIndex += n;
    showSlides();
}

  window.currentSlide = function(n) {
    slideIndex = n - 1;
    showSlides();
}
});


function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  showSlides();
}


function currentSlide(n) {
  slideIndex = n;
  showSlides();
}




function fetchWeather() {
    const apiKey = '5ab815e6dc500fdb9936653d3119f065';  
    const city = 'Pittsburgh';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;

            document.getElementById('temperature').innerText = `${temperature}°F`;
            document.getElementById('conditions').innerText = description;
            document.getElementById('humidity').innerText = `${humidity}%`;
            document.getElementById('wind').innerText = `${wind} mph`;
            document.getElementById('weather-icon').src = iconUrl;
            document.getElementById('weather-icon').alt = description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('temperature').innerText = 'Unable to fetch data';
            document.getElementById('conditions').innerText = 'Try again later';
        });
}

// Refresh weather data every 30 minutes
fetchWeather();
setInterval(fetchWeather, 1800000);  


$(document).ready(function() {
    const funFacts = [
        "Opened to Public: May 20, 1877",
        "Cost to Build: $47,000",
        "Length of Track: 794 feet",
        "Elevation: 400 feet",
        "Grade: 30.5 degrees",
        "Speed: 6 miles per hour",
        "Passenger Capacity: 18 per car"
    ];
    
    function generateFunFact() {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        const fact = funFacts[randomIndex];
        $('#funFactDisplay').text(fact); // Display the fact in an element with id 'funFactDisplay'
    }
    
    // Attach event listener to the button
    $('.fun-fact-button').on('click', generateFunFact);  // Using `.on()` for better handling
});
