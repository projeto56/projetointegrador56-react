import Tema from './Tema';
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    subTitulo: string;
    autor: string;
    conteudo: string;
    data: string;
    foto: string;
    tema?: Tema| null;
    usuario?: User| null;
}

export default Postagem;