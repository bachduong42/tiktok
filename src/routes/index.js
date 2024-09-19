// import routes config
import routesConfig from "~/config/routes"
// Layouts
import { HeaderOnly } from "~/components/Layout"
import Home from "~/pages/Home"
import Upload from "~/pages/Upload"
import Profile from "~/pages/Profile"
import Following from "~/pages/Following"
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly }

]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }