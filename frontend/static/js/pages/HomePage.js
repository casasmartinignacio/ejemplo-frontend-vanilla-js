import GameItem from "../components/GameItem.js";
import GamesStateHelper from "../helper/state/GamesStateHelper.js";
import GamesAPIHelper from "../helper/api/GamesAPIHelper.js";

export default class Home {
    constructor(selector) {
        this.container = document.getElementById(selector);
        this.loadGames();
    }

    async loadGames() {
        try {
            if (!this.games || this.games?.length <= 0) {
                const data = await GamesAPIHelper.getGames();
                GamesStateHelper.setGames(data);
                this.games = GamesStateHelper.getGames();
            }
        } catch (e) {
            console.log(e)
            GamesStateHelper.setGames([]);
            this.games = [];
        } finally {
            this.render();
        }
    }

    render() {
        let gamesHtml = `
            <h3 class="home-game-list-title">Juegos disponibles:</h3>
            <div class="home-game-list-div">
        `;
        this.games?.forEach(game => {
            gamesHtml += new GameItem(game).render();
        }); 
        gamesHtml += '</div>';
        this.container.innerHTML = gamesHtml;
    }
}
