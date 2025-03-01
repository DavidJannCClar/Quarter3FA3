function generateStory() {
    console.log("Generating a new underwater adventure...");

    const locations = ["The Lost City of Atlantis", "Mariana Trench", "Great Barrier Reef", "Sunken Pirate Ship", "Deep Sea Cave"];
    const vehicles = ["Neptune Explorer Submarine", "Aqua Drone", "Diving Suit X-300", "Manta Ray Glider", "Triton Underwater Scooter"];

    let location = locations[Math.floor(Math.random() * locations.length)];
    let vehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
    let diveHours = Math.floor(Math.random() * 12) + 1;
    let diveMinutes = Math.floor(Math.random() * 60);

    console.log("Selected Location:", location);
    console.log("Selected Vehicle:", vehicle);
    console.log("Dive Duration:", diveHours, "hours and", diveMinutes, "minutes");

    let adventureDetails = `Your underwater adventure takes you to <strong>${location}</strong>!<br>
                            You will explore using the <strong>${vehicle}</strong>.<br>
                            Estimated dive duration: <strong>${diveHours} hours and ${diveMinutes} minutes</strong>.`;

    document.getElementById("story").innerHTML = adventureDetails;
    console.log("Adventure displayed successfully.");
}