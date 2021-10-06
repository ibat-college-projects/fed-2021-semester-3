function GetPriceOfItem(item) {

    console.log(`Get Price of Item: ${item}`)

    let priceOfItem = 0;

    switch (item.toUpperCase()) {
        case 'A':
            priceOfItem = .60;
            break;
        case 'O':
            priceOfItem = .25;
            break;
        default:
            priceOfItem = -1;


    }

    return priceOfItem;

}

function ScanItemsAtTill(shopItems) {
    let runningTotal = 0;

    for (const currentItem of shopItems) {

        runningTotal += GetPriceOfItem(currentItem);
    }

    console.log(`Scanning Items at till: total is ${runningTotal}`)

}

let customerShop1 = ['A', 'O', 'A', 'A', 'O'];

ScanItemsAtTill(customerShop1)

let customerShop2 = ['A', 'O', 'A', 'A', 'O','A', 'O', 'A', 'A', 'O'];
ScanItemsAtTill(customerShop2)