// Game Class: Represents a Game
class Game{
    constructor(gameName, developerCompanyName, yearDate){
        this.gameTitle = gameName;
        this.developer = developerCompanyName;
        this.year      = yearDate;
    }
}

// Event: Add a Game
document.getElementById('game-form').addEventListener('submit', () => { 

    // Get Form values
    const gameName             = document.getElementById('gameName').value;
    const developerCompanyName = document.getElementById('developerCompanyName').value;
    const yearDate             = document.getElementById('yearDate').value;

    var R = alert(gameName +' '+ developerCompanyName +' '+ yearDate);

    return R
} );
