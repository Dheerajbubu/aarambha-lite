// Get the signals container
const signalsDiv = document.getElementById("signals");

// Sample multiple signals
const signals = [
  { instrument: "NIFTY 50", action: "BUY", entry: "19250", sl: "19200", target: "19350" },
  { instrument: "BANKNIFTY", action: "SELL", entry: "43750", sl: "43900", target: "43500" },
  { instrument: "RELIANCE", action: "BUY", entry: "2785", sl: "2765", target: "2835" }
];

function loadSignals() {
  let html = "<h2>Live Trading Signals</h2>";
  signals.forEach(sig => {
    html += `
      <div class="signal">
        <p><strong>Instrument:</strong> ${sig.instrument}</p>
        <p><strong>Action:</strong> ${sig.action}</p>
        <p><strong>Entry:</strong> ${sig.entry}</p>
        <p><strong>Stop Loss:</strong> ${sig.sl}</p>
        <p><strong>Target:</strong> ${sig.target}</p>
      </div>
    `;
  });
  signalsDiv.innerHTML = html;
}

window.onload = loadSignals;
