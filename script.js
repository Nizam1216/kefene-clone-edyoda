var orders =[
    {
        "id": "714-69-5617",
        "customerName": "Sally Whebell",
        "orderDate": "07-Aug-2020",
        "orderTime": "2:29 AM",
        "amount": 634.2,
        "orderStatus": "Delivered"
    },
    {
        "id": "752-42-3160",
        "customerName": "Emmery Grizard",
        "orderDate": "11-Mar-2020",
        "orderTime": "3:14 PM",
        "amount": 518.23,
        "orderStatus": "New"
    },
    {
        "id": "671-99-4274",
        "customerName": "Alano Carnaman",
        "orderDate": "09-Oct-2020",
        "orderTime": "11:41 AM",
        "amount": 400.34,
        "orderStatus": "New"
    },
    {
        "id": "359-13-4724",
        "customerName": "Huey Coombes",
        "orderDate": "16-Nov-2020",
        "orderTime": "6:35 PM",
        "amount": 559.06,
        "orderStatus": "Delivered"
    },
    {
        "id": "302-50-0415",
        "customerName": "Rex Pilsworth",
        "orderDate": "26-Feb-2020",
        "orderTime": "2:02 PM",
        "amount": 347.03,
        "orderStatus": "Delivered"
    },
    {
        "id": "332-24-5988",
        "customerName": "Lou Udale",
        "orderDate": "25-Jun-2020",
        "orderTime": "11:41 PM",
        "amount": 645.82,
        "orderStatus": "InTransit"
    },
    {
        "id": "239-32-6080",
        "customerName": "Penni Blight",
        "orderDate": "30-May-2020",
        "orderTime": "8:15 PM",
        "amount": 472.53,
        "orderStatus": "Packed"
    },
    {
        "id": "579-80-0751",
        "customerName": "Elberta Farress",
        "orderDate": "25-Jun-2020",
        "orderTime": "4:42 PM",
        "amount": 774.63,
        "orderStatus": "InTransit"
    },
    {
        "id": "494-62-5297",
        "customerName": "Danya Regan",
        "orderDate": "27-May-2020",
        "orderTime": "6:33 AM",
        "amount": 785.02,
        "orderStatus": "New"
    },
    {
        "id": "373-65-1146",
        "customerName": "Alexandros Fiddyment",
        "orderDate": "15-Mar-2020",
        "orderTime": "12:42 AM",
        "amount": 461.99,
        "orderStatus": "Packed"
    },
    {
        "id": "649-95-4216",
        "customerName": "Nissy Dalglish",
        "orderDate": "22-Dec-2019",
        "orderTime": "5:08 AM",
        "amount": 252.63,
        "orderStatus": "InTransit"
    }
]
var orderdetails = "";
if(orders.length>0){
    var keys  = Object.keys(orders[0])

    orderdetails +="<tr>";
       
    for(var i=0; i < keys.length;i++){
        orderdetails += "<th>"+keys[i]+"  "+"</th>";

    }
    orderdetails +="</tr>";
    for(var j=0;j<orders.length;j++){
        orderdetails += "<tr>";
        for(var k=0;k<keys.length;k++)
        {
          
            orderdetails +=   "<td>" + orders[j][keys[k]]+ "</td>";
            console.log(orders[j][keys[k]])
        }
        orderdetails +="</tr>";
    }

}
else{
    orderdetails += "no orders found.";
}
document.getElementById("orderinfo").innerHTML=orderdetails;