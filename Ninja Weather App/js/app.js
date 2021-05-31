const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateCity = async (city) => {
  const cityDetails = await getCity(city);

  const weather = await getWeatherInformation(cityDetails.Key);

  return { cityDetails, weather };
};

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});

const updateUI = (data) => {
  const { cityDetails, weather } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  time.setAttribute('src', timeSrc);
  icon.setAttribute('src', iconSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};
