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

function addTimes() {

    let totalMinutes = 0;

    const ids = [
        "time1",
        "time2",
        "time3",
        "time4"
    ];

    ids.forEach(id => {

        const value =
            document.getElementById(id).value;

        if (value.length === 5) {

            const parts = value.split(":");

            totalMinutes +=
                parseInt(parts[0]) * 60 +
                parseInt(parts[1]);
        }

    });

    const hours =
        Math.floor(totalMinutes / 60);

    const minutes =
        totalMinutes % 60;

    document.getElementById("totalTime")
        .textContent =
            String(hours).padStart(2,"0") +
            ":" +
            String(minutes).padStart(2,"0");
}

function resetAdder() {

    document.getElementById("time1").value = "";
    document.getElementById("time2").value = "";
    document.getElementById("time3").value = "";
    document.getElementById("time4").value = "";

    document.getElementById("totalTime").textContent =
        "00:00";
}