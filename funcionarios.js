// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAyIoGNwviaHvJhwr0U5fw5sQ1xJjCK63Q",
    authDomain: "evecon-3ab3d.firebaseapp.com",
    databaseURL: "https://evecon-3ab3d-default-rtdb.firebaseio.com",
    projectId: "evecon-3ab3d",
    storageBucket: "evecon-3ab3d.appspot.com",
    messagingSenderId: "1058126570658",
    appId: "1:1058126570658:web:fadc4c315726eddcbae3fb",
    measurementId: "G-8SV096XN8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.firestore()

const tableFuncionario = document.querySelector('.table-funcionario');

const addFuncionarios = document.querySelector('.card-body .form');

const editModal = document.querySelector('.modal-body');

const editFuncionarios = document.querySelector('.modal-body .form');

let id;

//create element and render

//getUsers
db.collection('funcionarios').get().then(querySnapshot => {
   
    querySnapshot.forEach(doc => {
        const tr = `
    <tr data-id='${doc.id}'>
        <td>${doc.data().nome}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().nascimento}</td>
        <td class="text-right">${doc.data().endereco}</td>
        <td class="text-right">${doc.data().departamento}</td>
        <td class="text-right">
            <button class="btn btn-info btn-editar">Editar</button>
            <button class="btn btn-danger ml-2 btn-delete">Excluir</button>
        </td>
        </tr>
     `;
     tableFuncionario.insertAdjacentHTML('beforeend',tr)
     
        //
        const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-editar`);
            btnEdit.addEventListener('click', () =>{
                $("#myModal").modal({
                    show: true
                });
                
                id = doc.id

                editFuncionarios.nomeFuncionarios.value = doc.data().nome
                editFuncionarios.emailFuncionarios.value = doc.data().email
                editFuncionarios.dataFuncionarios.value  = doc.data().nascimento
                editFuncionarios.enderecoFuncionarios.value  = doc.data().endereco
                editFuncionarios.departamentoFuncionarios.value  = doc.data().departamento
            })

     //Delete
        const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
        btnDelete.addEventListener('click', () =>{
            db.collection('funcionarios').doc(`${doc.id}`).delete().then(() =>{
                setTimeout(() =>{
                    document.location.reload(true);
                },1000)
            }).catch(err =>{
                console.log('erro')
            })
        })

    })
})

//Cadastrar Funcionarios
addFuncionarios.addEventListener('submit', e =>{
    e.preventDefault();
    db.collection('funcionarios').add({
        nome: addFuncionarios.nomeFuncionario.value,
        email: addFuncionarios.emailFuncionario.value,
        nascimento:addFuncionarios.dataFuncionario.value,
        endereco:addFuncionarios.enderecoFuncionario.value,
        departamento:addFuncionarios.departamentoFuncionario.value,
    })
    setTimeout(() =>{
        document.location.reload(true);
    },1000)
})

editModal.addEventListener('submit', e =>{
    e.preventDefault();
    
    var nome = document.getElementById('nomeFuncionarios').value
    var email = document.getElementById('emailFuncionarios').value
    var nascimento = document.getElementById('dataFuncionarios').value
    var endereco = document.getElementById('enderecoFuncionarios').value
    var departamento = document.getElementById('departamentoFuncionarios').value

    db.collection('funcionarios').doc(id).update({
        nome: nome,
        email: email,
        nascimento: nascimento,
        endereco: endereco,
        departamento: departamento
    });
    setTimeout(() =>{
        document.location.reload(true);
    },1000)
})