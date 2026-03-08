export default function Dashboard() {
  return (
    <div style={{padding: "20px", fontFamily: "Arial"}}>
      <h1>BioPulse Patch Dashboard</h1>

      <h2>Patient Wound Monitoring</h2>

      <div>
        <p>Oxygen Level: 72%</p>
        <p>Temperature: 36.5°C</p>
        <p>pH Level: 7.1</p>
        <p>Blood Flow: Normal</p>
      </div>

      <h3>Status: Low Risk</h3>

      <p>
        BioPulse Patch monitors biochemical signals from wounds and predicts
        early tissue necrosis before visible symptoms appear.
      </p>
    </div>
  );
}
