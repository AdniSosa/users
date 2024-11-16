const listaUsuarios = document.getElementById('listaUsuarios');
const info = 'https://jsonplaceholder.typicode.com/users';
const age = [25, 45, 33, 28, 48, 53, 37, 31, 22, 19];


const users = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error('No se obtuvo respuesta exitosa.')
        }
        //console.log(response)
        return response.json();
        
    })
    .then(users => {
        //console.log(users)

        for (const user of users) {
            //console.log(user);
            const userInfo = document.createElement('li');
            const userOtherInfo = document.createElement('li');
            //const userDiv = Document.createElement('div');
            //userDiv.classList.add('userDiv');
            
            //listaUsuarios.appendChild(userDiv);
            listaUsuarios.appendChild(userInfo);
            listaUsuarios.appendChild(userOtherInfo);

            userInfo.innerHTML = `
                    Nombre: ${user.name}
                    Edad: ${age[Math.floor(Math.random() * age.length)]}
                    Username: ${user.username}
                    Teléfono: ${user.phone}
                    Email: ${user.email}
                    <img 
                    src= '../assets/img/${user.id}.jpeg' 
                    alt='Foto de perfil'
                />
            `
            userOtherInfo.innerHTML = `
                Compañía: ${user.company.name}
                Dirección: ${user.address.street}, ${user.address.suite}, ${user.address.city}
            `
            
        
        }
    })
    .catch(error => {
        alert('No se pudo obtener la información solicitada.')
    })
}

users();