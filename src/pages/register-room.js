import FormRoom from "../components/FormRoom.js";

export default function RenderRegisterRoom() {
    FormRoom();

    const contentForm = formulario.querySelector('form');

    const nome = contentForm.querySelector('input[type="text"]');
    const numero = contentForm.querySelector('input[type="number"]');
    const qtd_cama_casal = contentForm.querySelector('input[type="number"]');
    const qtd_cama_solteiro = contentForm.querySelector('input[type="number"]');
    const qtd_cama_preco = contentForm.querySelector('input[type="number"]');
    

}   
