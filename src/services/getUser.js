import httpRequest from '~/utils/httpRequest';
const getCurrentUser = async () => {
    try {
        const res = await httpRequest.get(`auth/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        return res.data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getAnUserById = async (id) => {
    try {
        const res = await httpRequest.get(`/users/@${id}`);
        return res.data.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}
export { getCurrentUser, getAnUserById }


