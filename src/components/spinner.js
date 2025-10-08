export default function Spinner(){
    const spinner = document.createElement('div');
    spinner.innerHTML = `
    <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>`;
    return spinner;
}