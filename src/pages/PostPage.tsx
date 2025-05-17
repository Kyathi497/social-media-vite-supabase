import { useParams } from "react-router"
import { PostDetail } from "../components/PostDetail"




export const PostPage = () => {

    
    const {id} = useParams<{id: string}>();
    if (!id || isNaN(Number(id))) {
        return <p className="text-center text-red-500">Invalid Post ID</p>;
    }
    return (
        <div className="pt-10">
            <PostDetail postId={Number(id)}/>
        </div>
    )
}