export function generateSensorData() {
  return {
    oxygen: Math.floor(Math.random()*100),
    temperature: (Math.random()*4 + 34).toFixed(2),
    ph: (Math.random()*2 + 6).toFixed(2),
    bloodFlow: Math.floor(Math.random()*100)
  }
}
