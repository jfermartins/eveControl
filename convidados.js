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

const tableConvidados = document.querySelector('.table-convidados');

const addConvidados = document.querySelector('.card-body .form');

const editModal = document.querySelector('.modal-body');

const editFuncionarios = document.querySelector('.modal-body .form');

let id;

//create element and render

//getUsers
db.collection('convidados').get().then(querySnapshot => {
   
    querySnapshot.forEach(doc => {
        const tr = `
        <tr data-id='${doc.id}'>
                    <td>
                    ${doc.data().nomeConvidado}
                    </td>
                    <td>
                    ${doc.data().emailConvidado}
                    </td>
                    <td>
                    ${doc.data().dataConvidado}
                    </td>
                    <td class="text-right">
                    ${doc.data().enderecoConvidado}
                    </td>
                    <td class="text-right">
                      <button class="btn btn-info  btn-editar">Editar</button>
                      <button class="btn btn-danger ml-2 btn-delete">Excluir</button>
                    </td>
                  </tr> `;
     tableConvidados.insertAdjacentHTML('beforeend',tr)

     //

     const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-editar`);
     btnEdit.addEventListener('click', () =>{
         $("#myModal").modal({
             show: true
         });
         
         id = doc.id

         editFuncionarios.nomeConvidados.value = doc.data().nomeConvidado
         editFuncionarios.emailConvidados.value = doc.data().emailConvidado
         editFuncionarios.dataConvidados.value  = doc.data().dataConvidado
         editFuncionarios.enderecoConvidados.value  = doc.data().enderecoConvidado
     })


     //Delete
        const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
        btnDelete.addEventListener('click', () =>{
            db.collection('convidados').doc(`${doc.id}`).delete().then(() =>{
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
addConvidados.addEventListener('submit', e =>{
    e.preventDefault();
    db.collection('convidados').add({
        nomeConvidado: addConvidados.nomeConvidado.value,
        emailConvidado: addConvidados.emailConvidado.value,
        dataConvidado: addConvidados.dataConvidado.value,
        enderecoConvidado: addConvidados.enderecoConvidado.value,
    })
    setTimeout(() =>{
        document.location.reload(true);
    },1000)
})

editModal.addEventListener('submit', e =>{
    e.preventDefault();
    
    var nome = document.getElementById('nomeConvidados').value
    var email = document.getElementById('emailConvidados').value
    var nascimento = document.getElementById('dataConvidados').value
    var endereco = document.getElementById('enderecoConvidados').value

    db.collection('convidados').doc(id).update({
        nomeConvidado: nome,
        emailConvidado: email,
        dataConvidado: nascimento,
        enderecoConvidado: endereco,
    });
    setTimeout(() =>{
        document.location.reload(true);
    },1000)
})