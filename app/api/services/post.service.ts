// https://jsonplaceholder.typicode.com/

import { GET, POST, PUT } from "../route";
import { Post } from "../models/post";

const path = '/posts';

const getPostList = (params: any) => GET(path, params);

const getPostDetail = (id: number, params: any) => GET(`${path}/${id}`, params);

const createPost = (body: Post) => POST(path, body);

const modifyPost = (id: number, body : any) => PUT(`${path}/${id}`, body);


export {
    getPostList,
    getPostDetail,
    createPost,
    modifyPost
}
