import { PostList } from "../components/PostList";

export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Recent Posts
            </h2>
            <div className="w-full flex-row flex justify-center">
                <div className="flex  justify-center items-center gap-x-6 flex-wrap">
                    <PostList />
                </div>
            </div>
        </div>
    );
};