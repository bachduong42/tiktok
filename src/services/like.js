import httpRequest from '~/utils/httpRequest';
const likeVideo = async (id) => {
    try {
        const res = await httpRequest.post(`videos/${id}/like`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })

        console.log("like thanh cong", res.data.data);
        return res.data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
const unLikeVideo = async (id) => {
    try {
        const res = await httpRequest.post(`videos/${id}/unlike`, {},
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            })
        console.log("unlike thanh cong", res.data.data);

        return res.data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
const likeComment = async (id) => {
    try {
        const res = await httpRequest.post(`comments/${id}/like`, {},
            {
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
const unLikeComment = async (id) => {
    try {
        const res = await httpRequest.post(`comments/${id}/unlike`, {},
            {
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
export { likeVideo, unLikeVideo, likeComment, unLikeComment }