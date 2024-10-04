import httpRequest from '~/utils/httpRequest';
const loginService = async (email, password) => {
    try {
        const res = await httpRequest.post(`auth/login`, {
            email,
            password

        })
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
// loginService()
export default loginService


