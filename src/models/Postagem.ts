import Tema from './Tema';

interface Postagem{
    id: number;
    titulo: string;
    subTitulo: string;
    autor: string;
    conteudo: string;
    data: string;
    foto: string;
    tema?: Tema| null;
    
}

export default Postagem;