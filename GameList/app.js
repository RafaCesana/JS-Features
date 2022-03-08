// Game Class: Represents a Game
class Game{
    constructor(gameName, developerCompanyName, yearDate){
        this.gameTitle = gameName;
        this.developer = developerCompanyName;
        this.year      = yearDate;
    }
}

// UI Class: Handle UI Tasks
class UI{
    static addGameToList(game){
        alert(game+' ff');
    }
}

// Event: Add a Game
document.getElementById('game-form').addEventListener('submit', () => { 

    // Get Form values
    const gameName             = document.getElementById('gameName').value;
    const developerCompanyName = document.getElementById('developerCompanyName').value;
    const yearDate             = document.getElementById('yearDate').value;

    // Instance of Game Class
    const game = new Game(gameName, developerCompanyName, yearDate);

    // Add Game to UI
    UI.addGameToList(game);
} );
