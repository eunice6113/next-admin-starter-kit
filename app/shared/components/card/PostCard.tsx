"use client";

import { Post } from '@/app/api/models/post';
import { Card } from 'primereact/card';
import useBasePage from '../../hooks/base-page.hook';

const PostCard:React.FC<Post> = ({
    id,
    title,    
    body,
    userId,
    mode
}) => {

    const { goPage } = useBasePage()

    return (
        <Card 
            onClick={(e) => {
                goPage(`/ssr-post/detail/${id}`)
            }}
            key={id} 
            title={title} 
            className={`mb-6 postCard ${mode === 'list' ? 'canHover' : ''}`}
        >
          <p>{body}</p>
        </Card>
    )
}
export default PostCard