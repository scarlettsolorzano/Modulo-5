//busca botón y la lista para poder usarlos desde js 
const orderList = document.getElementById('orderList'); 
const addOrderBtn = document.getElementById('addOrderBtn');

// Inicializa el contador de pedidos
//se inicializa el contador de pedidos en 1 para que cada pedido tenga un id único
let orderId = 1;

//cuando se hace clic en el botón de agregar pedido.
addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' }; //se asigna un id único al pedido y se le asigna el estado "En Proceso"
    //se agrega el pedido a la lista de pedidos y se procesa el pedido
    addOrder(order); 
    processOrder(order);
});

//crea un elemento de lista para mostrar el pedido en pnatalla con su estado actual
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

//actualiza el estado del pedido en la lista de pedidos
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Simula la preparación del pedido con un retraso de 2 segundos
function simulatePreparation(order) {
    return new Promise((resolve) => {
        const preparationTime = Math.floor(Math.random() * 3000) + 2000; //tiempo de entre 2 y 5 segundos
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
}
// Procesa el pedido y actualiza su estado a "Completado" después de la simulación
//se usa la función async para poder usar await dentro de ella
async function processOrder(order) {
    await simulateOrderPreparation(order); 
    updateOrderStatus(order, 'Completado'); 
}

