import { redirect } from "next/navigation"

export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    // if(posts){
    //     redirect(`/posts/${posts[0].id}`)
    // }
    return posts
}