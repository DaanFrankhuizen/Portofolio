// Import LitElement correctly
import { LitElement, html, css } from 'lit';

class HomePage extends LitElement {

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: white;
            height: 100%;
            width: 100%;
        }

        #main-container {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            color: var(--main-dark-blue);
        }

        // TODO: even lang maken als de p
        #main-container h1 {
            margin-bottom: 0;
        }

        #main-container p {
            margin-top: 0;
        }
    `

    render() {
        console.log('hoi');
        return html`
            <div id="main-container">
                <h1>Daan Frankhuizen</h1>
                <p>Website is momenteel nog onder constructie, kom later terug!</p>
            </div>
        `;
    }
}

window.customElements.define('home-page', HomePage);
