const listaUsuarios = document.getElementById('listaUsuarios');
const info = 'https://jsonplaceholder.typicode.com/users';


const usersFunction = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error('No se obtuvo respuesta exitosa.')
        }
        return response.json();
        
    })
    .then(users => {
        //console.log(users)

        for (const user of users) {
            //console.log(user);
            
            const userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            const userInfo = document.createElement('li');
            userInfo.classList.add('userInfo');
    
            listaUsuarios.appendChild(userDiv);
            userDiv.appendChild(userInfo);

            const maxAge = 55;
            const minAge = 20;
            const userAge = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
            
            const {name, username, phone, email, id, company: {name: companyName}, address: {street, suite, city}} = user;
            const userImg = `../assets/img/${id}.jpeg`;
            const userAddress = `${street}, ${suite}, ${city}`;

            const usersArray = [{
                ...user,
                userAge,
                userImg,
                company: companyName,
                address: userAddress,
            }]

            //console.log(usersArray)

            userInfo.innerHTML = `
                    <div class="info">
                        <p><span>Nombre:</span> ${name}</p> 
                        <p><span>Edad:</span> ${userAge}</p> 
                        <p><span>Username:</span> ${username}</p> 
                        <p><span>Teléfono:</span> ${phone}</p> 
                        <p><span>Email:</span> ${email}</p> 
                    </div>
                    
                    <img src="${userImg}" alt="Foto de perfil" />
                    
                    <div class="other-info">
                    <p><span>Compañía:</span> ${companyName}</p> 
                    <p><span>Dirección:</span> ${userAddress}</p> 
                    </div>
                 `
        }
    })
    .catch(error => alert('No se pudo obtener la información solicitada', error))
}

usersFunction();