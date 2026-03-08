export function predictRisk(data) {

let risk = 0

if(data.oxygen < 40) risk += 30
if(data.temperature > 38) risk += 20
if(data.ph > 7.8 || data.ph < 6.5) risk += 20
if(data.bloodFlow < 30) risk += 30

return risk

}
