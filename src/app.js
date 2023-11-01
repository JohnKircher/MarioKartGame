function getRandomTracks(numberOfTracks) {
    const trackList = [
        "Mario Kart Stadium", "Water Park", "Sweet Sweet Canyon", "Thwomp Ruins", "Mario Circuit", "Toad Harbor", "Twisted Mansion", "Shy Guy Falls", "Sunshine Airport", "Dolphin Shoals", "Electrodrome", "Mount Wario", "Cloudtop Cruise", "Bone-Dry Dunes", "Bowser's Castle", "Rainbow Road", "GCN Yoshi Circuit", "Excite Bike Arena", "Dragon Driftway", "Mute City", "GCN Baby Park", "GBA Cheese Land", "Wild Woods", "Animal Crossing", "Wii Moo Moo Meadows", "GBA Mario Circuit", "DS Cheep Cheep Beach", "N64 Toad's Turnpike", "GCN Dry Dry Desert", "SNES Donut Plains 3", "N64 Royal Raceway", "3DS DK Jungle", "GCN Sherbet Land", "3DS Music Park", "N64 Yoshi Valley", "DS Tick Tock Clock", "3DS Piranha Plant Slide", "Wii Grumble Volcano", "N64 Rainbow Road", "Wii Wario's Gold Mine", "SNES Rainbow Road", "Ice Ice Outpost", "Hyrule Circuit", "3DS Neo Bowser City", "GBA Ribbon Road", "Super Bell Subway", "Big Blue", "Tour Paris Promenade", "3DS Toad Circuit", "N64 Choco Mountain", "Wii Coconut Mall", "Tour Tokyo Blur", "DS Shroom Ridge", "GBA Sky Garden", "Ninja Hideaway", "Tour New York Minute", "SNES Mario Circuit 3", "N64 Kalimari Desert", "DS Waluigi Pinball", "Tour Sydney Sprint", "GBA Snow Land", "Wii Mushroom Gorge", "Sky-High Sundae", "Tour London Loop", "GBA Boo Lake", "3DS Rock Rock Mountain", "Wii Maple Treeway", "Tour Berlin Byways", "DS Peach Gardens", "Merry Mountain", "3DS Rainbow Road", "Tour Amsterdam Drift", "GBA Riverside Park", "Wii DK Summit", "Yoshi's Island", "Tour Bangkok Rush", "GCN Waluigi Stadium", "DS Mario Curcuit", "Tour Singapore Speedway", "Tour Athens Dash", "GCN Daisy Cruiser", "Wii Moonview Highway", "Squeaky Clean Sprint", "Tour Los Angeles Laps", "GBA Sunset Wilds", "Wii Koopa Cape", "Tour Vancouver Velocity"
    ];

    const selectedTracks = new Set();

    while (selectedTracks.size < numberOfTracks) {
        const randomIndex = Math.floor(Math.random() * trackList.length);
        const selectedTrack = trackList[randomIndex];
        selectedTracks.add(selectedTrack);
    }

    return Array.from(selectedTracks);
}

document.getElementById('randomize-button').addEventListener('click', () => {
    const trackContainer = document.getElementById('selected-tracks');

    // Clear the existing tracks
    trackContainer.innerHTML = '';

    const numberOfTracks = 6;
    const selectedTracks = getRandomTracks(numberOfTracks);

    selectedTracks.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.textContent = `Track ${index + 1}: ${track}`;
        trackContainer.appendChild(trackElement);
    });
});

  

  document.getElementById('submit-button').addEventListener('click', () => {
    // Get the password and scores from the input fields
    const password = document.getElementById('password').value;
    const teamKircherScore = document.getElementById('teamKircherScore').value;
    const teamJMOscore = document.getElementById('teamJMOscore').value;
    const individualKircherScore = document.getElementById('individualKircherScore').value;
    const individualJMOscore = document.getElementById('individualJMOscore').value;
  
    // Add your password validation logic here
    const correctPassword = 'chriswebstersghost'; // Change this to your actual password
  
    if (password === correctPassword) {
      // Include playerName in the request body
      // Create a JavaScript Date object to capture the date and time of the submission
      const submissionDate = new Date();
  
      // Send the scores and date to the server
      fetch('/save-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teamKircherScore,
          teamJMOscore,
          individualKircherScore,
          individualJMOscore,
          submissionDate,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Scores successfully saved
            alert('Scores saved successfully');
          } else {
            alert('Error saving scores');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Error saving scores');
        });
    } else {
      // Incorrect password, show an error message or take appropriate action
      alert('Incorrect password. Scores not submitted.');
    }
  });
  

  document.getElementById('refresh-button').addEventListener('click', () => {
    // Fetch scores from the server
    fetch('/get-scores')
      .then((response) => response.json())
      .then((data) => {
        const scoreList = document.getElementById('score-list');
        scoreList.innerHTML = ''; // Clear the previous data
  
        let teamKircherTotal = 0;
        let teamJMOTotal = 0;
        let individualKircherTotal = 0;
        let individualJMOTotal = 0;
  
        let highlightedTeamKircher = 0;
        let highlightedTeamJMO = 0;
        let highlightedIndividualKircher = 0;
        let highlightedIndividualJMO = 0;

        data.forEach((score) => {
          const newRow = scoreList.insertRow(-1);
  
          // Loop through the score properties and add them to the table cells
          ['teamKircherScore', 'teamJMOscore', 'individualKircherScore', 'individualJMOscore', 'submissionDate'].forEach((property, index) => {
            const cell = newRow.insertCell(index);
            cell.textContent = property === 'submissionDate'
              ? new Date(score[property]).toLocaleString()
              : score[property];
  
            cell.style.textAlign = 'center'; // Center text
            cell.style.border = '1px solid #000'; // Add lines
            cell.style.padding = '8px'; // Add padding
  
            // Calculate totals (excluding date)
            if (property !== 'submissionDate') {
              switch (property) {
                case 'teamKircherScore':
                  teamKircherTotal += score[property];
                  if (score.teamKircherScore > score.teamJMOscore) {
                    cell.style.backgroundColor = 'gold';
                    highlightedTeamKircher++;
                  }
                  break;
                case 'teamJMOscore':
                  teamJMOTotal += score[property];
                  if (score.teamJMOscore > score.teamKircherScore) {
                    cell.style.backgroundColor = 'gold';
                    highlightedTeamJMO++;
                  }
                  break;
                case 'individualKircherScore':
                  individualKircherTotal += score[property];
                  if (score.individualKircherScore > score.individualJMOscore) {
                    cell.style.backgroundColor = 'limegreen';
                    highlightedIndividualKircher++;
                  }
                  break;
                case 'individualJMOscore':
                  individualJMOTotal += score[property];
                  if (score.individualJMOscore > score.individualKircherScore) {
                    cell.style.backgroundColor = 'limegreen';
                    highlightedIndividualJMO++;
                  }
                  break;
              }
            }
          });
        });
  
        // Add the counts in parentheses to the column headers at the top
        document.getElementById('score-table').rows[0].cells[0].textContent = `Team Kircher Score (${highlightedTeamKircher})`;
        document.getElementById('score-table').rows[0].cells[1].textContent = `Team JMO Score (${highlightedTeamJMO})`;
        document.getElementById('score-table').rows[0].cells[2].textContent = `Individual Kircher Score (${highlightedIndividualKircher})`;
        document.getElementById('score-table').rows[0].cells[3].textContent = `Individual JMO Score (${highlightedIndividualJMO})`;

        // Create the totals row at the bottom
        const totalsRow = scoreList.insertRow(-1);
        totalsRow.insertCell(0).textContent = teamKircherTotal;
        totalsRow.insertCell(1).textContent = teamJMOTotal;
        totalsRow.insertCell(2).textContent = individualKircherTotal;
        totalsRow.insertCell(3).textContent = individualJMOTotal;
        totalsRow.insertCell(4).textContent = ''; // Leave the date total cell empty
  
        // Apply additional styling to totals row
        totalsRow.style.fontWeight = 'bold'; // Apply bold style
        totalsRow.style.border = '1px solid #000'; // Add lines
        totalsRow.style.textAlign = 'center'; // Center text
      })
      .catch((error) => {
        console.error(error);
      });
  });


  
  
  
  
  
  
  