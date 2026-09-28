const form = document.querySelector('#prediction-form');
const button = document.querySelector('.predict-button');
const resultEmpty = document.querySelector('#result-empty');
const resultContent = document.querySelector('#result-content');
const errorMessage = document.querySelector('#error-message');
const resultTitle = document.querySelector('#result-title');
const predictionName = document.querySelector('#prediction-name');
const confidenceValue = document.querySelector('#confidence-value');
const confidenceBar = document.querySelector('#confidence-bar');
const probabilityList = document.querySelector('#probability-list');
const resetButton = document.querySelector('#reset-button');
const resultPanel = document.querySelector('#result-panel');

const classNames = ['Entire home/apt', 'Private room', 'Shared room', 'Hotel room'];
const prettyName = value => String(value).replaceAll('_', ' ');

function showError(message) {
  resultEmpty.hidden = true;
  resultContent.hidden = true;
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  resultTitle.innerHTML = 'Prediction<br>needs attention.';
}

function resetResult() {
  resultEmpty.hidden = false;
  resultContent.hidden = true;
  errorMessage.hidden = true;
  resultPanel.classList.remove('result-ready');
  resultTitle.innerHTML = 'Your prediction<br>will appear here.';
  confidenceBar.style.width = '0%';
  probabilityList.innerHTML = '';
}

function renderResult(data) {
  const probabilities = Array.isArray(data.Probability) ? data.Probability : [];
  const confidence = Math.max(...probabilities, 0) * 100;
  const predicted = prettyName(data.Predicted_room_type);
  const labels = probabilities.map((_, index) => classNames[index] || `Class ${index + 1}`);

  resultEmpty.hidden = true;
  errorMessage.hidden = true;
  resultContent.hidden = false;
  resultPanel.classList.add('result-ready');
  resultTitle.textContent = 'A clear signal from the model.';
  predictionName.textContent = predicted;
  confidenceValue.textContent = `${confidence.toFixed(1)}%`;
  requestAnimationFrame(() => { confidenceBar.style.width = `${confidence}%`; });
  probabilityList.innerHTML = probabilities.map((value, index) => `
    <div class="probability-row"><span>${labels[index]}</span><strong>${(value * 100).toFixed(1)}%</strong><div class="mini-track"><span style="width:${value * 100}%"></span></div></div>
  `).join('');
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  button.classList.add('loading');
  resultPanel.classList.remove('result-ready');
  button.querySelector('span:first-child').textContent = 'Reading the listing...';
  errorMessage.hidden = true;

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  ['latitude', 'longitude', 'price', 'reviews_per_month'].forEach(key => { payload[key] = Number(payload[key]); });
  ['minimum_nights', 'number_of_reviews', 'calculated_host_listings_count', 'availability_365'].forEach(key => { payload[key] = Number.parseInt(payload[key], 10); });

  try {
    const response = await fetch('/predict', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail ? JSON.stringify(data.detail) : 'The API returned an error.');
    renderResult(data);
  } catch (error) {
    showError(`Could not reach the prediction service. ${error.message}`);
  } finally {
    button.classList.remove('loading');
    button.querySelector('span:first-child').textContent = 'Predict room type';
  }
});

resetButton.addEventListener('click', resetResult);
