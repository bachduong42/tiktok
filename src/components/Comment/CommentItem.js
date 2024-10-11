function CommentItem({ comment }) {
    return (
        <div className="w-full justify-between">
            <div className="flex flex-row">
                <img src={comment.user.avatar} alt="" className="w-[40px] h-[40px] object-cover rounded-full" />
                <div className="flex flex-col">
                
                </div>
            </div>
        </div>
    );
}

export default CommentItem;