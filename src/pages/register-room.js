import FormRoom from "../components/FormRoom.js";

export default function RenderRegisterRoom(){
    const DivRoot = document.getElementById('root');
    DivRoot.innerHTML = '';

    const room = FormRoom();
    DivRoot.appendChild(room);


    
}