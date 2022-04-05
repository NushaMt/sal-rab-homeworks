function sendRequest(name, phone, address, goods, sum) {
    let objectData = {data: {
                        client: `${name} ${phone}`,
                        order: {address, sum},
                        goods: []
                    }
                };

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i++) {
        let product = {title: goods[i].title, count: goods[i].count};
        objectData.data.goods.push(product);
        }
    
    objectData.data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
    objectData.data.order.sum = sum;
    
    let jsonData = JSON.stringify(objectData);
    
    return jsonData;
};
