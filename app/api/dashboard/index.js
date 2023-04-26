export default function handler(req, res) {
  res.status(200).json({ location: "Hello from the dashboard" });
}

export function getProperties(req, res) {
  res.status(200).json({
    address: "123 stealth st.",
    lat: 34.232276,
    lng: -77.946817,
    purchasePrice: 680000,
    color: "yellow",
  });
}
