import httpRequest from '~/utils/httpRequest';
const getVideoList = async (typePath, page) => {
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
const getUserVideos = async (id) => {
    try {
        const res = await httpRequest.get(`users/${id}/videos`)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
const getVideo = async (id) => {
    try {
        const res = await httpRequest.get(`videos/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export { getVideoList, getUserVideos, getVideo }


