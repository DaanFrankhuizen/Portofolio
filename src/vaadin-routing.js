// Import Router correctly
import { Router } from '@vaadin/router';
import './components/homepage.js';

const outlet = document.querySelector('#app');
const router = new Router(outlet);

router.setRoutes([
    {
        path: '/',
        component: 'home-page',
    },
]).then(() => {
    console.log('Routes mapped successfully!');
});