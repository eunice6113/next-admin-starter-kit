import { getPostList } from "@/app/api/services/post.service"
import PostCard from "@/app/shared/components/card/PostCard"

export default async function PostList() {
  const params = {}
  const data = await getPostList(params)

  return <main className="page">
    <h1 className="mb10">Post List</h1>
    { 
      data.map((item:any, index:any) => 
        <PostCard 
          mode='list'
          key={`card-${index}`} 
          id={index} 
          userId={item.userId} 
          title={item.title} 
          body={item.body} />
      )
    }
  </main>
}