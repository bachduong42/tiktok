// import routes config
import config from "~/config"
// Layouts
import { HeaderOnly } from "~/layouts"
import Home from "~/pages/Home/Home"
import Upload from "~/pages/Upload"
// import MyProfile from "~/pages/Profile"
import MyProfile from "~/pages/Profile/MyProfile"
import Following from "~/pages/Following"
import Live from "~/pages/Live"
import Explore from "~/pages/Explore"
import DetailUpload from "~/pages/Upload/DetailUpload"
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.follow, component: Following },
    { path: config.routes.myinfo, component: MyProfile },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.detailupload, component: DetailUpload, layout: HeaderOnly }
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }