import axios from "axios";
import { Note } from "../components/NoteList";
const BASE_URL: string = 'http://localhost:3001/api/';

// Services of CRUD APIs
const userId = localStorage.getItem('userId');
export const getNotes = ()=>{
    return axios.get<Note[]>(`${BASE_URL}notes/${userId}`);
}

export const deleteNote = (id:number)=>{
    return axios.delete(`${BASE_URL}notes/${id}`);
}

export const createNote = (content:string, userId: string | null)=>{
    return axios.post(`${BASE_URL}notes`,{content, userId});
}

export const updateNote = (content:string, userId?: number | null)=>{
    return axios.put(`${BASE_URL}notes/${userId}`,{content});
}