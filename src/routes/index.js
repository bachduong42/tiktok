// Layouts
import { HeaderOnly } from "~/components/Layout"
import Home from "~/pages/Home"
import Upload from "~/pages/Upload"
import Profile from "~/pages/Profile"
import Following from "~/pages/Following"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly }

]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }