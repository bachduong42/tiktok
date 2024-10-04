import httpRequest from '~/utils/httpRequest';
const getCurrentUser = async (typePath, page) => {
    try {
        const res = await httpRequest.get(`videos`, {
            params: {
                type: typePath,
                page: page
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export default getCurrentUser


