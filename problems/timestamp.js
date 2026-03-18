function parseElfTime(elfTime) {
    const cleaned = elfTime
    .replace(" NP", "")
    .replace(/\*/g, "-")
    .replace("@", "T")
    .replace(/\|/g, ":");
    return new Date(cleaned + "Z"); 
} 

function timeUntilTakeOff(fromTime, takeOffTime) {
    const from = parseElfTime(fromTime);
    const takeOff = parseElfTime(takeOffTime);
    return Math.floor((takeOff - from) / 1000);
}

// Ejemplo
const takeoff = '2025*12*25@00|00|00 NP';
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)); // 30
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)); // 0
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)); // -12
