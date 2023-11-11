const trackImages = {
        "Mario Kart Stadium": "mushroom.png", "Water Park": "mushroom.png", "Sweet Sweet Canyon": "mushroom.png", "Thwomp Ruins": "mushroom.png", 
        "Mario Circuit": "flower.png", "Toad Harbor": "flower.png", "Twisted Mansion": "flower.png", "Shy Guy Falls": "flower.png", 
        "Sunshine Airport": "star.png", "Dolphin Shoals": "star.png", "Electrodrome": "star.png", "Mount Wario": "star.png", 
        "Cloudtop Cruise": "special.png", "Bone-Dry Dunes": "special.png", "Bowser's Castle": "special.png", "Rainbow Road": "special.png",
        "Wii Moo Moo Meadows": "shell.png", "GBA Mario Circuit": "shell.png", "DS Cheep Cheep Beach": "shell.png", "N64 Toad's Turnpike": "shell.png",
        "GCN Dry Dry Desert": "banana.png", "SNES Donut Plains 3": "banana.png", "N64 Royal Raceway": "banana.png", "3DS DK Jungle": "banana.png",
        "DS Wario Stadium": "leaf.png", "GCN Sherbet Land": "leaf.png", "3DS Music Park": "leaf.png", "N64 Yoshi Valley": "leaf.png",
        "DS Tick Tock Clock": "lightning.png", "3DS Piranha Plant Slide": "lightning.png", "Wii Grumble Volcano": "lightning.png", "N64 Rainbow Road": "lightning.png",
        "GCN Yoshi Circuit": "egg.png", "Excite Bike Arena": "egg.png", "Dragon Driftway": "egg.png", "Mute City": "egg.png",
        "Wii Wario's Gold Mine": "triforce.png", "SNES Rainbow Road": "triforce.png", "Ice Ice Outpost": "triforce.png", "Hyrule Circuit": "triforce.png",
        "GCN Baby Park": "crossing.png", "GBA Cheese Land": "crossing.png", "Wild Woods": "crossing.png", "Animal Crossing": "crossing.png",  
        "3DS Neo Bowser City": "bell.png", "GBA Ribbon Road": "bell.png", "Super Bell Subway": "bell.png", "Big Blue": "bell.png", 
        "Tour Paris Promenade": "goldendash.png", "3DS Toad Circuit": "goldendash.png", "N64 Choco Mountain": "goldendash.png", "Wii Coconut Mall": "goldendash.png", 
        "Tour Tokyo Blur": "luckycat.png", "DS Shroom Ridge": "luckycat.png", "GBA Sky Garden": "luckycat.png", "Ninja Hideaway": "luckycat.png", 
        "Tour New York Minute": "turnip.png", "SNES Mario Circuit 3": "turnip.png", "N64 Kalimari Desert": "turnip.png", "DS Waluigi Pinball": "turnip.png", 
        "Tour Sydney Sprint": "propeller.png", "GBA Snow Land": "propeller.png", "Wii Mushroom Gorge": "propeller.png", "Sky-High Sundae": "propeller.png", 
        "Tour London Loop": "rock.png", "GBA Boo Lake": "rock.png", "3DS Rock Rock Mountain": "rock.png", "Wii Maple Treeway": "rock.png", 
        "Tour Berlin Byways": "moon.png", "DS Peach Gardens": "moon.png", "Merry Mountain": "moon.png", "3DS Rainbow Road": "moon.png", 
        "Tour Amsterdam Drift": "fruit.png", "GBA Riverside Park": "fruit.png", "Wii DK Summit": "fruit.png", "Yoshi's Island": "fruit.png", 
        "Tour Bangkok Rush": "boomerang.png", "GCN Waluigi Stadium": "boomerang.png", "DS Mario Curcuit": "boomerang.png", "Tour Singapore Speedway": "boomerang.png", 
        "Tour Athens Dash": "feather.png", "GCN Daisy Cruiser": "feather.png", "Wii Moonview Highway": "feather.png", "Squeaky Clean Sprint": "feather.png", 
        "Tour Los Angeles Laps": "cherry.png", "GBA Sunset Wilds": "cherry.png", "Wii Koopa Cape": "cherry.png", "Tour Vancouver Velocity": "cherry.png",
        "Tour Rome Avanti": "acorn.png", "GCN DK Mountain": "acorn.png", "Wii Daisy Circuit": "acorn.png", "Piranha Plant Cove": "acorn.png",
        "Tour Madrid Drive": "spiny.png", "3DS Rosalina's Ice World": "spiny.png", "SNES Bowser Castle 3": "spiny.png", "Wii Rainbow Road": "spiny.png"
};

function getRandomTracks(numberOfTracks) {
    const trackList = [
        "Mario Kart Stadium", "Water Park", "Sweet Sweet Canyon", "Thwomp Ruins", 
        "Mario Circuit", "Toad Harbor", "Twisted Mansion", "Shy Guy Falls", 
        "Sunshine Airport", "Dolphin Shoals", "Electrodrome", "Mount Wario", 
        "Cloudtop Cruise", "Bone-Dry Dunes", "Bowser's Castle", "Rainbow Road",
        "Wii Moo Moo Meadows", "GBA Mario Circuit", "DS Cheep Cheep Beach", "N64 Toad's Turnpike",
        "GCN Dry Dry Desert", "SNES Donut Plains 3", "N64 Royal Raceway", "3DS DK Jungle",
        "DS Wario Stadium", "GCN Sherbet Land", "3DS Music Park", "N64 Yoshi Valley",
        "DS Tick Tock Clock", "3DS Piranha Plant Slide", "Wii Grumble Volcano", "N64 Rainbow Road",
        "GCN Yoshi Circuit", "Excite Bike Arena", "Dragon Driftway", "Mute City",
        "Wii Wario's Gold Mine", "SNES Rainbow Road", "Ice Ice Outpost", "Hyrule Circuit",
        "GCN Baby Park", "GBA Cheese Land", "Wild Woods", "Animal Crossing",  
        "3DS Neo Bowser City", "GBA Ribbon Road", "Super Bell Subway", "Big Blue", 
        "Tour Paris Promenade", "3DS Toad Circuit", "N64 Choco Mountain", "Wii Coconut Mall", 
        "Tour Tokyo Blur", "DS Shroom Ridge", "GBA Sky Garden", "Ninja Hideaway", 
        "Tour New York Minute", "SNES Mario Circuit 3", "N64 Kalimari Desert", "DS Waluigi Pinball", 
        "Tour Sydney Sprint", "GBA Snow Land", "Wii Mushroom Gorge", "Sky-High Sundae", 
        "Tour London Loop", "GBA Boo Lake", "3DS Rock Rock Mountain", "Wii Maple Treeway", 
        "Tour Berlin Byways", "DS Peach Gardens", "Merry Mountain", "3DS Rainbow Road", 
        "Tour Amsterdam Drift", "GBA Riverside Park", "Wii DK Summit", "Yoshi's Island", 
        "Tour Bangkok Rush", "GCN Waluigi Stadium", "DS Mario Curcuit", "Tour Singapore Speedway", 
        "Tour Athens Dash", "GCN Daisy Cruiser", "Wii Moonview Highway", "Squeaky Clean Sprint", 
        "Tour Los Angeles Laps", "GBA Sunset Wilds", "Wii Koopa Cape", "Tour Vancouver Velocity",
        "Tour Rome Avanti", "GCN DK Mountain", "Wii Daisy Circuit", "Piranha Plant Cove",
        "Tour Madrid Drive", "3DS Rosalina's Ice World", "SNES Bowser Castle 3", "Wii Rainbow Road"
    ];

    const remainingTracks = ["Mario Kart Stadium", "Water Park", "Sweet Sweet Canyon", "Thwomp Ruins", 
    "Mario Circuit", "Toad Harbor", "Twisted Mansion", "Shy Guy Falls", 
    "Sunshine Airport", "Dolphin Shoals", "Electrodrome", "Mount Wario", 
    "Cloudtop Cruise", "Bone-Dry Dunes", "Bowser's Castle", "Rainbow Road",
    "Wii Moo Moo Meadows", "GBA Mario Circuit", "DS Cheep Cheep Beach", "N64 Toad's Turnpike",
    "GCN Dry Dry Desert", "SNES Donut Plains 3", "N64 Royal Raceway", "3DS DK Jungle",
    "DS Wario Stadium", "GCN Sherbet Land", "3DS Music Park", "N64 Yoshi Valley",
    "DS Tick Tock Clock", "3DS Piranha Plant Slide", "Wii Grumble Volcano", "N64 Rainbow Road",
    "GCN Yoshi Circuit", "Excite Bike Arena", "Dragon Driftway", "Mute City",
    "Wii Wario's Gold Mine", "SNES Rainbow Road", "Ice Ice Outpost", "Hyrule Circuit",
    "GCN Baby Park", "GBA Cheese Land", "Wild Woods", "Animal Crossing",  
    "3DS Neo Bowser City", "GBA Ribbon Road", "Super Bell Subway", "Big Blue", 
    "Tour Paris Promenade", "3DS Toad Circuit", "N64 Choco Mountain", "Wii Coconut Mall", 
    "Tour Tokyo Blur", "DS Shroom Ridge", "GBA Sky Garden", "Ninja Hideaway", 
    "Tour New York Minute", "SNES Mario Circuit 3", "N64 Kalimari Desert", "DS Waluigi Pinball", 
    "Tour Sydney Sprint", "GBA Snow Land", "Wii Mushroom Gorge", "Sky-High Sundae", 
    "Tour London Loop", "GBA Boo Lake", "3DS Rock Rock Mountain", "Wii Maple Treeway", 
    "Tour Berlin Byways", "DS Peach Gardens", "Merry Mountain", "3DS Rainbow Road", 
    "Tour Amsterdam Drift", "GBA Riverside Park", "Wii DK Summit", "Yoshi's Island", 
    "Tour Bangkok Rush", "GCN Waluigi Stadium", "DS Mario Curcuit", "Tour Singapore Speedway", 
    "Tour Athens Dash", "GCN Daisy Cruiser", "Wii Moonview Highway", "Squeaky Clean Sprint", 
    "Tour Los Angeles Laps", "GBA Sunset Wilds", "Wii Koopa Cape", "Tour Vancouver Velocity",
    "Tour Rome Avanti", "GCN DK Mountain", "Wii Daisy Circuit", "Piranha Plant Cove",
    "Tour Madrid Drive", "3DS Rosalina's Ice World", "SNES Bowser Castle 3", "Wii Rainbow Road"
  ];

    const selectedTracks = new Set();

    while (selectedTracks.size < numberOfTracks && remainingTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingTracks.length);
      const selectedTrack = remainingTracks[randomIndex];
      selectedTracks.add({
        name: selectedTrack,
        image: trackImages[selectedTrack], // Get the image filename
      });

      // Remove the selected track from the remainingTracks array
      remainingTracks.splice(randomIndex, 1);
    }

    return Array.from(selectedTracks);
}

document.getElementById('randomize-button').addEventListener('click', () => {
    const trackContainer = document.getElementById('selected-tracks');

    // Clear the existing tracks
    trackContainer.innerHTML = '';

    const numberOfTracks = 6;
    const selectedTracks = getRandomTracks(numberOfTracks);

    selectedTracks.forEach((track) => {
      const trackElement = document.createElement('div');
      trackElement.classList.add('track-element'); // Add the class for styling
    
      // Create a containing div for the image and text
      const container = document.createElement('div');
      container.classList.add('track-container');
    
      // Create an image element and set its attributes
      const imgElement = document.createElement('img');
      imgElement.src = 'mapImages/' + track.image; // Assuming images are in the 'mapImages' folder
      imgElement.alt = track.name;
      
      // Append the image to the containing div
      container.appendChild(imgElement);
      
      // Create a div for the track name
      const nameElement = document.createElement('div');
      nameElement.textContent = track.name;
      
      // Append the track name to the containing div
      container.appendChild(nameElement);
    
      // Append the containing div to the track element
      trackElement.appendChild(container);
    
      // Append the track element to the track container
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

        data.reverse();

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
  
        const teamKircherAvg = teamKircherTotal / data.length;
        const teamJMOAvg = teamJMOTotal / data.length;
        const individualKircherAvg = individualKircherTotal / data.length;
        const individualJMOAvg = individualJMOTotal / data.length;
  
        // Add the counts in parentheses to the column headers at the top
        document.getElementById('score-table').rows[0].cells[0].innerHTML = `Team Kircher Score (${highlightedTeamKircher})<br>Avg: ${teamKircherAvg.toFixed(2)}`;
        document.getElementById('score-table').rows[0].cells[1].innerHTML = `Team JMO Score (${highlightedTeamJMO})<br>Avg: ${teamJMOAvg.toFixed(2)}`;
        document.getElementById('score-table').rows[0].cells[2].innerHTML = `Individual Kircher Score (${highlightedIndividualKircher})<br>Avg: ${individualKircherAvg.toFixed(2)}`;
        document.getElementById('score-table').rows[0].cells[3].innerHTML = `Individual JMO Score (${highlightedIndividualJMO})<br>Avg: ${individualJMOAvg.toFixed(2)}`;

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

  function loadScores() {
    fetch('/get-scores')
      .then((response) => response.json())
      .then((data) => {

        data.reverse();

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

        const teamKircherAvg = teamKircherTotal / data.length;
        const teamJMOAvg = teamJMOTotal / data.length;
        const individualKircherAvg = individualKircherTotal / data.length;
        const individualJMOAvg = individualJMOTotal / data.length;
  
        // Add the counts in parentheses to the column headers at the top
        document.getElementById('score-table').rows[0].cells[0].innerHTML = `Team Kircher Score (${highlightedTeamKircher})<br>Avg: ${teamKircherAvg.toFixed(2)}`;
        document.getElementById('score-table').rows[0].cells[1].innerHTML = `Team JMO Score (${highlightedTeamJMO})<br>Avg: ${teamJMOAvg.toFixed(2)}`;
        document.getElementById('score-table').rows[0].cells[2].innerHTML = `Individual Kircher Score (${highlightedIndividualKircher})<br>Avg: ${individualKircherAvg.toFixed(2)}`;
        document.getElementById('score-table').rows[0].cells[3].innerHTML = `Individual JMO Score (${highlightedIndividualJMO})<br>Avg: ${individualJMOAvg.toFixed(2)}`;



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
  }

  window.addEventListener('load', loadScores);
  


  
  
  
  
  
  
  