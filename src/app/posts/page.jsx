import { getPosts } from "@/services/postApi";
import Link from "next/link";


export default async function postPage() {
    const posts = await getPosts();
  return (
    <div>post Page {posts.length}
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl">
        {
            posts.slice(0,20).map((post) => (
                <div key={post.id} className="border-2 border-blue-600 w-96 rounded-lg p-2">
                    <h2 className="font-bold uppercase">Title: {post.title}</h2>
                    <p>Description: {post.body}</p>
                    <div className="flex justify-end p-2">
                    <button className="btn btn-ghost bg-blue-500 text-white rounded-lg">
                        <Link href={`/posts/${post.id}`}>View Post</Link>
                    </button>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}
