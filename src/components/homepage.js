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
        
        #main-container h1 {
            color: var(--main-dark-blue)
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
