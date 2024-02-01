import {Router} from "@vaadin/router";

const outlet = document.querySelector('#app')
const router = new Router(outlet)

router.setRoutes([
    {
        path: "/",
        component: "homepage",
    }
]).then(() => {
    console.log("Routes mapped succesfully!")

})