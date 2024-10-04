import AddGameHelper from '../helper/api/GamesAPIHelper.js';
import { navigateTo } from '../index.js';
import { validateNewGame } from '../helper/validations/gamesValidations.js'

export default class GameForm {
    constructor(selector) {
        this.container = document.getElementById(selector);
        this.loadForm();
    }

    async loadForm() {
        this.render();
        this.addListener();
    }

    async handleSubmit(event) {
        try {
            event.preventDefault();
            const name = event.target.elements.name.value.trim();
            const description = event.target.elements.description.value.trim();
            const photoUrl = event.target.elements.photoUrl.value.trim();
            validateNewGame({ name, description })
            await AddGameHelper.addGame({ name, description, photoUrl });
            alert('Juego agregado exitosamente!');
            navigateTo('/');
            window.removeEventListener('submit', this.handleSubmit)
        } catch (e) {
            console.log(e)
            alert('Error agregando juego');
        }
    };

    addListener() {
        window.addEventListener('submit', this.handleSubmit);
    }

    render() {
        const formHtml = `
            <form id="game-form" class="new-game-form-container">
                <h2 class="new-game-form-title">Nuevo juego</h2>
                <div class="input-container">
                    <label for="name" class="input-label">Nombre:</label>
                    <input type="text" id="name" name="name" class="input-field" required>
                </div>
                <div class="input-container">
                    <label for="description" class="input-label">Descripcion:</label>
                    <textarea id="description" name="description" class="input-field" required></textarea>
                </div>
                <div class="input-container">
                    <label for="photoUrl" class="input-label">Url de la foto:</label>
                    <input type="text" id="photoUrl" name="photoUrl" class="input-field" required>
                </div>
                <button type="submit" form="game-form" class="form-submit-button">Enviar</button>
            </form>
        `;
        this.container.innerHTML = formHtml;
    }
}