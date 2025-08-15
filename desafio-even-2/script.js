document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formularioINscroção');
    const registrantsList = document.getElementById('listaDeInnscrição');

  
    let registrants = [];

    
    const renderList = () => {
        registrantsList.innerHTML = '';
        registrants.forEach(person => {
            const li = document.createElement('li');
            li.textContent = `${person.name} - ${person.email}`;
            registrantsList.appendChild(li);
        });
    };

   
    form.addEventListener('submit', (event) => {
        event.preventDefault();

       
        const name = form.name.value.trim();
        const email = form.email.value.trim();


        if (!name || !email || !email.includes('@')) {
            alert('Por favor, preencha todos os campos corretamente. O e-mail deve conter "@"');
            return;
        }

        
        registrants.push({ name, email });

        
        form.reset();

   
        renderList();
    });
});