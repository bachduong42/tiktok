import httpRequest from '~/utils/httpRequest';
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
// signupService()

export default signupService

