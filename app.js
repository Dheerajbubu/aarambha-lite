// Get the signals container
const signalsDiv = document.getElementById("signals");

// Simulate a live signal fetch
function loadSignals() {
  // Clear the loading text
  signalsDiv.innerHTML = `
    <h2>Live Trading Signals</h2>
    <div class="signal">
      <p><strong>Instrument:</strong> NIFTY 50</p>
      <p><strong>Action:</strong> BUY</p>
      <p><strong>Entry:</strong> 19250</p>
      <p><strong>Stop Loss:</strong> 19200</p>
      <p><strong>Target:</strong> 19350</p>
    </div>
  `;
}

// Call the function after page load
window.onload = loadSignals;
