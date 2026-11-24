// Edit these sample prices to change the ticket costs.
const matches = [
  { id: "rcb-csk", name: "RCB vs CSK", prices: { general: 1000, premium: 2500, vip: 6000 } },
  { id: "csk-mi", name: "CSK vs MI", prices: { general: 800, premium: 1800, vip: 5000 } },
  { id: "mi-kkr", name: "MI vs KKR", prices: { general: 900, premium: 2200, vip: 5500 } }
];

const matchSelect = document.getElementById("match-select");
const standSelect = document.getElementById("stand-select");
const quantityInput = document.getElementById("quantity");
const bookingForm = document.querySelector("#booking-form");

let toastTimer;

function formatPrice(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2500);
}

matches.forEach((match) => {
  const option = document.createElement("option");
  option.value = match.id;
  option.textContent = match.name;
  matchSelect.append(option);
});

function calculate() {
  const match = matches.find((item) => item.id === matchSelect.value);
  const stand = standSelect.value;
  const quantity = Number(quantityInput.value);
  const quantityIsValid = quantityInput.value !== ""
    && Number.isInteger(quantity)
    && quantity >= 1
    && quantity <= Number(quantityInput.max);
  const standIsValid = Boolean(match && Object.hasOwn(match.prices, stand));
  const validBooking = Boolean(match && standIsValid && quantityIsValid);
  const price = standIsValid ? match.prices[stand] : 0;
  const total = validBooking ? price * quantity : 0;

  quantityInput.setCustomValidity(
    quantityIsValid ? "" : `Enter a whole number from 1 to ${quantityInput.max}.`
  );

  return { match, standIsValid, quantityIsValid, validBooking, price, quantity, total };
}

function updateBookingSummary(showNotification = false) {
  const booking = calculate();

  document.getElementById("summary-match").textContent = booking.match ? booking.match.name : "—";
  document.getElementById("summary-stand").textContent = booking.standIsValid
    ? standSelect.selectedOptions[0].textContent
    : "—";
  document.getElementById("summary-quantity").textContent = booking.quantityIsValid
    ? String(booking.quantity)
    : "—";
  document.getElementById("summary-price").textContent = formatPrice(booking.price);
  document.getElementById("summary-total").textContent = formatPrice(booking.total);

  if (showNotification && booking.validBooking) {
    showToast("Booking summary updated successfully!");
  }
}

matchSelect.addEventListener("change", () => updateBookingSummary(true));
standSelect.addEventListener("change", () => updateBookingSummary(true));
quantityInput.addEventListener("input", () => updateBookingSummary(true));
bookingForm.addEventListener("submit", (event) => event.preventDefault());

updateBookingSummary();
