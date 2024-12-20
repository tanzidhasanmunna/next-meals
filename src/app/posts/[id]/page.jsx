
const getPostDetails = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    const data = await response.json()
    return data
}

// export const metadata = {
//   title: "Post Details",
//   description: "This is the page that will give us the About directive",
//   keywords: ['about', 'about Page']
// };

export const generateMetadata = async ({params}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await response.json()
  return {
    title: `${data.title}`,
    description: data.body,
    keywords: data.body.split(' ')
  }

}
export default async function pageDetails({params}) {
  const id = await params.id
    const postDetails = await getPostDetails(id);

    return (
      <div className="p-4">
        <h1 className="font-bold uppercase">Title{postDetails.title}</h1>
        <p>{postDetails.body}</p>
      </div>
    )

}
