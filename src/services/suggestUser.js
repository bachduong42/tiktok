import * as request from '~/utils/httpRequest';
const suggestUserList = async (page, per_page) => {
    try {
        const res = await request.get(`users/suggested`, {
            params: {
                page: page,
                per_page: per_page
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export { suggestUserList }