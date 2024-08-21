import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import Navbar from "../components/Navbar";
import BlogPost from "./BlogPost";
import { useParams } from "react-router-dom";
import { posts } from "../utils/constants";

export default function BlogPostPage() {
    const { postId } = useParams();
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className='dark:bg-[#2D2E32] min-h-screen'>
            <Helmet>
                <title>projects;</title>
            </Helmet>
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar clicked="misc;" />
                </div>
            </div>

            <div className={`${styles.flexStart} w-full`}>
                <div className={`${styles.boxWidth}`}>
                    <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
                        <BlogPost title={post.title} category={post.category} content={post.content} date={post.date} />
                    </div>
                </div>
            </div>
        </div>
    )
}
