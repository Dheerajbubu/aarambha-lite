// Get the signals container
const signalsDiv = document.getElementById("signals");

const signals = [
  { instrument: "NIFTY 50", action: "BUY", entry: "19250", sl: "19200", target: "19350" },
  { instrument: "BANKNIFTY", action: "SELL", entry: "43750", sl: "43900", target: "43500" },
  { instrument: "RELIANCE", action: "BUY", entry: "2785", sl: "2765", target: "2835" }
];

function loadSignals() {
  let html = "<h2>Live Trading Signals</h2>";
  signals.forEach(sig => {
    const color = sig.action === "BUY" ? "#00ff99" : "#ff4d4d"; // Green for BUY, Red for SELL
    html += `
      <div class="signal">
        <p><strong>Instrument:</strong> ${sig.instrument}</p>
        <p><strong>Action:</strong> <span style="color: ${color}; font-weight: bold">${sig.action}</span></p>
        <p><strong>Entry:</strong> ${sig.entry}</p>
        <p><strong>Stop Loss:</strong> ${sig.sl}</p>
        <p><strong>Target:</strong> ${sig.target}</p>
      </div>
    `;
  });
  signalsDiv.innerHTML = html;

  // Call alerts after loading
  alertNewSignals(signals);
}

function alertNewSignals(signals) {
  signals.forEach(sig => {
    alert(`${sig.instrument}: ${sig.action} at ${sig.entry}`);
  });
}

// Call the load function when page is ready
window.onload = loadSignals;
