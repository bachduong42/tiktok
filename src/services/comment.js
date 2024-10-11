import httpRequest from '~/utils/httpRequest';
const getComment = async (id) => {
    try {
        const res = await httpRequest.get(`videos/${id}/comments`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })

        return res.data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export { getComment }