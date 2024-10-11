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
const createComment = async (comment, id) => {
    try {
        const res = await httpRequest.post(`videos/${id}/comments`,
            {
                comment: comment
            }, {
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
const deleteComment = async (id) => {
    try {
        const res = await httpRequest.delete(`comments/${id}`,
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
export { getComment, createComment, deleteComment }