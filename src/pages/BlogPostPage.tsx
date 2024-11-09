import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { posts } from "../utils/constants";
import GoBack from "../components/GoBack";
import Theme from "../components/Theme";
import styles from "../utils/style";
import BlogPost from "../components/blog/BlogPost";

export default function BlogPostPage() {
    const { postId } = useParams();
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className='dark:bg-[#2D2E32] min-h-screen overflow-hidden'>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <div className="flex justify-between relative mx-[6%] sm:mx-[4%] mt-4">
                <GoBack back="/blog" />
                <Theme isBlog={true} />
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
