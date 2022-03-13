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
        const gameList = document.getElementById('game-list')
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${game.gameTitle}</td>
            <td>${game.developer}</td>
            <td>${game.year}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete"></td>
        `;
        gameList.appendChild(row);
    }

    static displayGames(){
        //How it was before the Local Storage works
        const aux = [
            {
                gameTitle: 'GTA V',
                developer: 'Rockstar',
                year: '2022'
            },
            {
                gameTitle: 'Horizon',
                developer: 'Guerrilla Games',
                year: '2022'
            }
        ];
        aux.forEach( (g) => UI.addGameToList(g) );
    }
}

// PROGRAM

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

// Event: Display Games  
document.addEventListener('DOMContentLoaded', UI.displayGames());
