// import routes config
import config from "~/config"
// Layouts
import { HeaderOnly } from "~/layouts"
import Home from "~/pages/Home"
import Upload from "~/pages/Upload"
import Profile from "~/pages/Profile"
import Following from "~/pages/Following"
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.follow, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }