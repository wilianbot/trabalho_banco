// Criar uma reserva
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        cliente_cpf: document.querySelector('[name="cpf"]').value,
        voo_id: document.querySelector('[name="numeroVoo"]').value,
        aeronave_id: document.querySelector('[name="numeroAeronave"]').value,
        data: document.querySelector('[name="data"]').value,
        hora: document.querySelector('[name="hora"]').value,
        assento: document.querySelector('[name="numeroAssento"]').value,
        status: document.querySelector('[name="status"]').value === "true",
    };

    if (!data.cliente_cpf || !data.voo_id || !data.aeronave_id || !data.data || !data.hora || !data.assento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Reserva criada com sucesso!');
        } else {
            alert(`Erro: ${result.error}`);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});


// Listar as reservas 
document.getElementById('listarReservas').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/reservas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar reservas');
        }

        const reservas = await response.json();
        const reservasList = document.getElementById('reservasList');
        reservasList.innerHTML = '';

        reservas.forEach(reserva => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${reserva.id},CPF: ${reserva.cliente_cpf}, Voo: ${reserva.voo_id}, Assento: ${reserva.assento}`;
            reservasList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Atualizar uma reserva
const formularioAtualizar = document.getElementById('formularioAtualizar');

    formularioAtualizar.addEventListener('submit', async (event) => {
        event.preventDefault();
    
    const idReserva = document.querySelector('[name="idReserva"]').value;
    if (!idReserva) {
        alert('Por favor, insira o ID da reserva.');
        return;
    }

    const data = {
        cliente_cpf: document.querySelector('[name="cpf"]').value,
        voo_id: document.querySelector('[name="numeroVoo"]').value,
        aeronave_id: document.querySelector('[name="numeroAeronave"]').value,
        data: document.querySelector('[name="data"]').value,
        hora: document.querySelector('[name="hora"]').value,
        assento: document.querySelector('[name="numeroAssento"]').value,
        status: document.querySelector('[name="status"]').value === "true",
    };

    if (!data.cliente_cpf || !data.voo_id || !data.aeronave_id || !data.data || !data.hora || !data.assento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/reservas/${idReserva}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao atualizar reserva');
        }

        alert('Reserva atualizada com sucesso!');
    } catch (error) {
        console.error('Erro:', error);
        alert(`Erro: ${error.message}`);
    }
});


// Deletar uma reserva
const formularioDeletar = document.getElementById('formularioDeletar');

formularioDeletar.addEventListener('submit', async (event) => {
    event.preventDefault();

    const idReserva = document.querySelector('[name="idReservaDeletar"]').value;
    if (!idReserva) {
        alert('Por favor, insira o ID da reserva.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/reservas/${idReserva}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ao deletar reserva: ${errorText}`);
        }

        alert('Reserva deletada com sucesso!');
    } catch (error) {
        console.error('Erro:', error);
    }
});