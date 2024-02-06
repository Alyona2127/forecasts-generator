/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let predictionText = '';
const button = document.querySelector('.forecast-btn');
const prediction = document.querySelector('.current-forecast h1');
const probability = document.querySelector('.current-forecast p');
const forecastItemTemplate = document.querySelector('#forecast-item');
const predictionList = document.querySelector('.forecasts');

button.addEventListener('click', function() {
    const predictionNumber = getRandomInt(1, 4);
    const predictionProbability = getRandomInt(0, 100);

    if (predictionText) {
        const item = forecastItemTemplate.content.cloneNode(true);
        const previousPredictionContainer = item.querySelector('p');
        previousPredictionContainer.textContent = predictionText;
        predictionList.prepend(item);
    }
    
    if (predictionNumber === 1) {
        predictionText = 'Ваши надежды и планы сбудутся сверх всяких ожиданий';
    } else if (predictionNumber === 2) {
        predictionText = 'Вам предлагается мечта всей жизни. Скажите да!';
    } else {
        predictionText = 'Время и терпение, вас ждут много сюрпризов!';
    }

    prediction.textContent = predictionText;
    probability.textContent = predictionProbability + '%';
});