const listaUsuarios = document.getElementById('listaUsuarios');
const info = 'https://jsonplaceholder.typicode.com/users';
const age = [25, 45, 33, 28, 48, 53, 37, 31, 22, 19];


const users = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error('No se obtuvo respuesta exitosa.')
        }
        return response.json();
        
    })
    .then(users => {
        console.log(users)

        for (const user of users) {
            //console.log(user);
            
            const userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            const userInfo = document.createElement('li');
            userInfo.classList.add('userInfo');
    
            listaUsuarios.appendChild(userDiv);
            userDiv.appendChild(userInfo);

            userInfo.innerHTML = `
                    <div class="info">
                        <p><span>Nombre:</span> ${user.name}</p> 
                        <p><span>Edad:</span> ${age[Math.floor(Math.random() * age.length)]}</p> 
                        <p><span>Username:</span> ${user.username}</p> 
                        <p><span>Teléfono:</span> ${user.phone}</p> 
                        <p><span>Email:</span> ${user.email}</p> 
                    </div>
                    
                    <img src="../assets/img/${user.id}.jpeg" alt="Foto de perfil" />
                    
                    <div class="other-info">
                    <p><span>Compañía:</span> ${user.company.name}</p> 
                    <p><span>Dirección:</span> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p> 
                    </div>
                 `
        }
    })
    .catch(error => alert('No se pudo obtener la información solicitada.'))
}

users();