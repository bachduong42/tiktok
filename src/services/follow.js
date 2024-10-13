import httpRequest from '~/utils/httpRequest';
const followService = async (id) => {
    try {
        const res = await httpRequest.post(`users/${id}/follow`, null, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        console.log("follow", res.data.data)
        return res.data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
const unFollowService = async (id) => {
    try {
        const res = await httpRequest.post(`users/${id}/unfollow`, null, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        console.log("unfollow", res.data.data)
        return res.data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
const getFollowingList = async (page) => {
    try {
        const res = await httpRequest.get(`me/followings`,
            {
                params: {
                    page: page,
                }
                ,
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
export { followService, unFollowService, getFollowingList }