import { getPostDetail } from "@/app/api/services/post.service";
import NoData from "@/app/shared/components/ui/NoData";

export default async function PostDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const pageParam = Number(params.slug) + 1

  const bodyParams = {}
  const data = await getPostDetail(pageParam, bodyParams)

  return <main>
    <h1 className="mb10">Post Detail {pageParam}</h1>
    {
      data 
      ? 
      <div className="p-card p-component pa20">
        <h2>{data?.title}</h2>
        <hr className="mb20 mt20"/>
        <p>{data?.body}</p>
      </div>
      :
      <NoData message="Data Not Found" />
    }
    
  </main>
}