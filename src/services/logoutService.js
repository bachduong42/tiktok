import httpRequest from '~/utils/httpRequest';
const logoutService = async () => {
    try {
        const res = await httpRequest.post(`auth/logout`, {
        })
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export default logoutService


