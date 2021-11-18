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

const tableEventos = document.querySelector('.table-evento');

const addEvento = document.querySelector('.card-body .form');

const editModal = document.querySelector('.modal-body');

const editFuncionarios = document.querySelector('.modal-body .form');

let id;

//create element and render

//getUsers
db.collection('eventos').get().then(querySnapshot => {
   
    querySnapshot.forEach(doc => {
        const tr = `
        <tr data-id='${doc.id}'>
        <td>${doc.data().nomeEventos}</td>
        <td>${doc.data().localEventos}</td>
        <td>${doc.data().dataEventos}</td>
        <td class="text-right">${doc.data().capMaxConvidado}</td>
        <td class="text-right">${doc.data().capMaxFuncionario}</td>
        <td class="text-right">
            <button class="btn btn-info btn-editar">Editar</button>
            <button class="btn btn-danger ml-2 btn-delete">Excluir</button>
        </td>
        </tr>
     `;
     tableEventos.insertAdjacentHTML('beforeend',tr)
     
        //
        const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-editar`);
            btnEdit.addEventListener('click', () =>{
                $("#myModal").modal({
                    show: true
                });
                
                id = doc.id

                editFuncionarios.nomeEvento.value = doc.data().nomeEventos
                editFuncionarios.localEvento.value = doc.data().localEventos
                editFuncionarios.dataEvento.value  = doc.data().dataEventos
                editFuncionarios.capMaxConvidado.value  = doc.data().capMaxConvidado
                editFuncionarios.capMaxFuncionario.value  = doc.data().capMaxFuncionario
            })

     //Delete
        const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
        btnDelete.addEventListener('click', () =>{
            db.collection('eventos').doc(`${doc.id}`).delete().then(() =>{
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
addEvento.addEventListener('submit', e =>{
    e.preventDefault();
    db.collection('eventos').add({
        nomeEventos: addEvento.nomeEventos.value,
        localEventos: addEvento.localEventos.value,
        dataEventos:addEvento.dataEventos.value,
        capMaxConvidado:addEvento.capMaxConvidados.value,
        capMaxFuncionario:addEvento.capMaxFuncionarios.value,
    })
    setTimeout(() =>{
        document.location.reload(true);
    },1000)
})

editModal.addEventListener('submit', e =>{
    e.preventDefault();
    
    var nomeEvento = document.getElementById('nomeEvento').value
    var localEvento = document.getElementById('localEvento').value
    var dataEvento = document.getElementById('dataEvento').value
    var capMaxConvidado = document.getElementById('capMaxConvidado').value
    var capMaxFuncionario = document.getElementById('capMaxFuncionario').value


    db.collection('eventos').doc(id).update({
        nomeEventos: nomeEvento,
        localEventos: localEvento,
        dataEventos: dataEvento,
        capMaxConvidado: capMaxConvidado,
        capMaxFuncionario: capMaxFuncionario
    });
    setTimeout(() =>{
        document.location.reload(true);
    },1000)
})




