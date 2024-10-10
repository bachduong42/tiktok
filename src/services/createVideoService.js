import httpRequest from '~/utils/httpRequest';
const createNewVideo = async (formData) => {
    try {
        const res = await httpRequest.post(`videos`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export { createNewVideo }