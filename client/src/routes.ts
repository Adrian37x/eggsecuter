import AboutSvelte from "./pages/About.svelte";
import Error404 from "./pages/Error404.svelte";
import HomeSvelte from "./pages/Home.svelte";

export const routes = [
    {
        name: "/",
        component: HomeSvelte
    },
    {
        name: "/about",
        component: AboutSvelte
    },
    {
        name: "404",
        path: "404",
        component: Error404
    }
]
