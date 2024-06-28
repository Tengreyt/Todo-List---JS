document.addEventListener('DOMContentLoaded', () => {
    const btnOff = document.querySelectorAll('.btnOff');
    const form = document.getElementById('todoForm');
    const cardWrapper = document.getElementById('cardWrapper');

    addEventListeners(btnOff);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = document.getElementById('nme');
        const text = input.value.trim();
        if (text) {
            const newCard = createCard(text);
            cardWrapper.insertAdjacentHTML('beforeend', newCard);
            input.value = ''; 
            const newBtnsOff = cardWrapper.querySelectorAll('.btnOff');
            addEventListeners(newBtnsOff);
        }
    });

    function createCard(text) {
        return `
        <div class="card">
            <p>${text}</p>
            <div>
                <button class="btnOff">Удалить</button>
            </div>
        </div>`;
    }

    function addEventListeners(btnsOff) {
        btnsOff.forEach(btn => {
            btn.addEventListener('click', function() {
                const parentCard = btn.parentElement.parentElement;
                if (parentCard) {
                    parentCard.remove();
                }
            });
        });
    }
});
