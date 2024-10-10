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
const signupService = async (type, email, password) => {
    try {
        const res = await httpRequest.post(`auth/register`, {
            type,
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
export { loginService, logoutService, signupService }


