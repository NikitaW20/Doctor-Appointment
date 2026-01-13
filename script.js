function book() {
    let name = document.getElementById("name").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    if (name === "" || doctor === "" || date === "") {
        document.getElementById("result").innerText = "Please fill all fields!";
    } else {
        document.getElementById("result").innerText = 
        "Appointment booked for " + name + " with Dr. " + doctor + " on " + date;
    }
}
