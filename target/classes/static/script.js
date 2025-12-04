document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('questionnaireForm');
  const resultDiv = document.getElementById('result');
  const resultList = document.getElementById('recommendationList');

  const response = await fetch('/api/questionnaires');
  const questions = await response.json();
  getUserLocation();
  
  function getUserLocation() {
      if (!navigator.geolocation) {
          alert("Geolocation is not supported by this browser.");
          return;
      }

      navigator.geolocation.getCurrentPosition(
          function (pos) {
              const latitude = pos.coords.latitude;
              const longitude = pos.coords.longitude;
              const accuracy = pos.coords.accuracy;

              console.log("Latitude :", latitude);
              console.log("Longitude:", longitude);
              console.log("Accuracy :", accuracy, "meters");

              alert(
                  "Your Location:\n" +
                  "Latitude: " + latitude + "\n" +
                  "Longitude: " + longitude + "\n" +
                  "Accuracy: " + accuracy + " meters"
              );

              // OPTIONAL → send to backend API
              /*
              fetch("/api/save-location", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ latitude, longitude, accuracy })
              });
              */
          },
          function (err) {
              console.log("Geolocation Error:", err.message);

              let message = "";
              switch (err.code) {
                  case err.PERMISSION_DENIED:
                      message = "Permission denied. Please allow location access.";
                      break;
                  case err.POSITION_UNAVAILABLE:
                      message = "Location unavailable.";
                      break;
                  case err.TIMEOUT:
                      message = "Location request timed out.";
                      break;
                  default:
                      message = "An unknown error occurred.";
              }

              alert(message);
          },
          {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
          }
      );
  }

  

 questions.forEach(q => {
  const div = document.createElement('div');
   div.classList.add('question-card');
  div.innerHTML = `
    <h1>${q.text}</h1>
    <div class="radio-list">
      ${['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        .map((label, i) => {
          const id = `${q.key}-${i}`;
          return `
            <div class="radio-item">
              <input type="radio" id="${id}" name="${q.key}" value="${i}" />
              <label for="${id}">${label}</label>
            </div>
          `;
        }).join('')}
    </div>
  `;
  form.appendChild(div);
});


/*  document.getElementById('submitBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = {};
    for (const [k,v] of formData.entries()) payload[k] = parseInt(v);

    const res = await fetch('/api/strand/recommend', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    resultList.innerHTML = '';
    for (const strand in data) {
      const div = document.createElement('div');
      div.textContent = `${strand}: ${data[strand]}`;
      resultList.appendChild(div);
    }
    resultDiv.style.display = 'block';
  });*/
  
  
  document.getElementById('submitBtn').addEventListener('click', async (e) => {
  e.preventDefault();

  const form = document.querySelector('form');
  const formData = new FormData(form);
  const payload = {};

  for (const [k, v] of formData.entries()) {
    payload[k] = parseInt(v);
  }

  // Save answers to localStorage
  localStorage.setItem('strandAnswers', JSON.stringify(payload));

  // Redirect to results page
  window.location.href = '/result';
});

});
