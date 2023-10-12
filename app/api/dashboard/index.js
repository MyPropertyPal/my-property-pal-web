export default function handler(req, res) {
  res.status(200).json({ location: "Hello from the dashboard" });
}

// Fake data
export function getProperties(req, res) {
  res.status(200).json({
    address: "123 stealth st.",
    lat: 34.232276,
    lng: -77.946817,
    purchasePrice: 680000,
    color: "yellow", // marker color
  },
  {
    address: "123 test st.",
    lat: 35.232276,
    lng: -74.946817,
    purchasePrice: 630000,
    color: "blue", // marker color
  });
}
