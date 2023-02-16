
let serial = 0;
document.getElementById('buy-coffee').addEventListener('click', (e) => {
    serial += 1;

    const obj = nameValueGet(e)
    const totalPrice = parseInt(obj.price) * parseInt(obj.quantity);
    setDetails(serial, obj.name, obj.quantity, totalPrice)

    e.target.setAttribute('disabled', true)

});
document.getElementById('buy-heart').addEventListener('click', (e) => {
    serial += 1;

    const obj = nameValueGet(e)
    const totalPrice = parseInt(obj.price) * parseInt(obj.quantity);
    setDetails(serial, obj.name, obj.quantity, totalPrice)
    e.target.setAttribute('disabled', true)
});
document.getElementById('buy-panda').addEventListener('click', (e) => {
    serial += 1;

    const obj = nameValueGet(e)
    const totalPrice = parseInt(obj.price) * parseInt(obj.quantity);
    setDetails(serial, obj.name, obj.quantity, totalPrice)
    e.target.setAttribute('disabled', true)
});
document.getElementById('buy-umbrella').addEventListener('click', (e) => {
    serial += 1;

    const obj = nameValueGet(e)
    const totalPrice = parseInt(obj.price) * parseInt(obj.quantity);
    setDetails(serial, obj.name, obj.quantity, totalPrice)
    e.target.setAttribute('disabled', true)
});


document.getElementById('buy-vue').addEventListener('click', (e) => {
    serial += 1;

    const obj = vueGetValue(e)
    const totalPrice = parseInt(obj.price) * parseInt(obj.quantity);
    setDetails(serial, obj.name, obj.quantity, totalPrice)
    e.target.setAttribute('disabled', true)
});

function vueGetValue(e) {
    const name = e.target.parentNode.parentNode.children[0].innerText;
    const price = e.target.parentNode.parentNode.children[1].value;
    const quantity = e.target.parentNode.parentNode.children[2].value;

    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        return alert('please select a valid price or quantity ')
    }
    else {
        const total = {
            name: name,
            price: price,
            quantity: quantity
        }
        e.target.setAttribute('disabled', true)
        return total;
    }
}




function nameValueGet(e) {
    const name = e.target.parentNode.parentNode.children[0].innerText;
    const price = e.target.parentNode.parentNode.children[1].children[0].innerText;
    const quantity = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const total = {
        name: name,
        price: price,
        quantity: quantity
    }
    return total;
}

function setDetails(serial, name, quantity, totalP) {
    const tableBody = document.getElementById('t-body');
    document.getElementById('num').innerText = serial;

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${serial}</th>
    <td>${name}</td>
    <td>${quantity}</td>
    <td>${totalP}</td>
    `;
    tableBody.appendChild(tr);
}

