function timeDifference(start, end) {

    let startMinutes =
        parseInt(start.split(":")[0]) * 60 +
        parseInt(start.split(":")[1]);

    let endMinutes =
        parseInt(end.split(":")[0]) * 60 +
        parseInt(end.split(":")[1]);

    if (endMinutes < startMinutes) {
        endMinutes += 24 * 60;
    }

    let diff = endMinutes - startMinutes;

    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0")
    );
}

function calculate() {

    const blockOff =
        document.getElementById("blockOff").value;

    const takeoff =
        document.getElementById("takeoff").value;

    const landing =
        document.getElementById("landing").value;

    const blockOn =
        document.getElementById("blockOn").value;

    if (
        blockOff &&
        takeoff &&
        landing &&
        blockOn
    ) {

        document.getElementById("blockTime").textContent =
            timeDifference(blockOff, blockOn);

        document.getElementById("serviceTime").textContent =
            timeDifference(takeoff, landing);
    }
}