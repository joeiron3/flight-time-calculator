function formatTimeInput(input) {

    let value = input.value.replace(/\D/g, "");

    if (value.length > 4) {
        value = value.substring(0, 4);
    }

    if (value.length >= 3) {
        value =
            value.substring(0, 2) +
            ":" +
            value.substring(2);
    }

    input.value = value;
}

function isValidTime(time) {

    if (!time || time.length !== 5) {
        return false;
    }

    const parts = time.split(":");

    if (parts.length !== 2) {
        return false;
    }

    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    if (isNaN(hours) || isNaN(minutes)) {
        return false;
    }

    if (hours < 0 || hours > 23) {
        return false;
    }

    if (minutes < 0 || minutes > 59) {
        return false;
    }

    return true;
}

function timeDifference(start, end) {

    const startParts = start.split(":");
    const endParts = end.split(":");

    let startMinutes =
        parseInt(startParts[0], 10) * 60 +
        parseInt(startParts[1], 10);

    let endMinutes =
        parseInt(endParts[0], 10) * 60 +
        parseInt(endParts[1], 10);

    // Handles overnight crossings
    if (endMinutes < startMinutes) {
        endMinutes += 24 * 60;
    }

    const diff = endMinutes - startMinutes;

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0")
    );
}

function calculate() {

    const blockOff = document.getElementById("blockOff").value;
    const takeoff = document.getElementById("takeoff").value;
    const landing = document.getElementById("landing").value;
    const blockOn = document.getElementById("blockOn").value;

    // Block Time
    if (isValidTime(blockOff) && isValidTime(blockOn)) {

        document.getElementById("blockTime").textContent =
            timeDifference(blockOff, blockOn);

    } else {

        document.getElementById("blockTime").textContent =
            "00:00";
    }

    // Time In Service
    if (isValidTime(takeoff) && isValidTime(landing)) {

        document.getElementById("serviceTime").textContent =
            timeDifference(takeoff, landing);

    } else {

        document.getElementById("serviceTime").textContent =
            "00:00";
    }
}

function resetForm() {

    document.getElementById("blockOff").value = "";
    document.getElementById("takeoff").value = "";
    document.getElementById("landing").value = "";
    document.getElementById("blockOn").value = "";

    document.getElementById("blockTime").textContent = "00:00";
    document.getElementById("serviceTime").textContent = "00:00";
}
