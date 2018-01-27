/**
* Nearset Bike Function
* @param {number} currentlat current latitude
* @param {number} currentlon current longitude
* @returns {string}
*/
module.exports = (currentlat, currentlon, context, callback) => {
    var lat = parseInt(currentlat);
    var lon = parseInt(currentlon);
    var shortestIndex = Number.MAX_SAFE_INTEGER;
    let shortestDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < bikes.items.length; i++) {
        let hub = bikes.items[i];
        if (hub.available_bikes <= 0) {
            continue;
        }
        let hublat = hub.current_position.coordinates[0];
        let hublon = hub.current_position.coordinates[1];
        let distance = Math.sqrt(Math.pow((lat - hublat), 2) + Math.pow((lon - hublon), 2))
        if (distance < shortestIndex) {
            shortestDistance = distance;
            shortestIndex = i;
        }
    }

    let retlat = bikes.items[shortestIndex].current_position.coordinates[0];
    let retlon = bikes.items[shortestIndex].current_position.coordinates[1];

    let retobj = {
        lat: retlat,
        lon: retlon
    }

    callback(null, JSON.stringify(retobj));
};
    
bikes = {
    "current_page":1,
    "per_page":999,
    "total_entries":42,
    "items":[
       {
          "id":2080,
          "name":"317-Abraham",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"27, Crooks Street, Hess Village, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.88055666666666,
                43.26544
             ]
          }
       },
       {
          "id":2238,
          "name":"476-Senaida",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"195 Wellington Street South, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86191666666667,
                43.24748666666667
             ]
          }
       },
       {
          "id":14206,
          "name":"763-Defendor",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"200 Longwood Road South, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.90210333333333,
                43.255763333333334
             ]
          }
       },
       {
          "id":1913,
          "name":"188-I See Bike People",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"26 Steven Street, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85149666666666,
                43.253190000000004
             ]
          }
       },
       {
          "id":2060,
          "name":"299-Bridgid",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"155 Cannon Street East, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86045833333333,
                43.25926666666667
             ]
          }
       },
       {
          "id":1978,
          "name":"218-Georgia",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"499 King Street East, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85334166666667,
                43.252691666666664
             ]
          }
       },
       {
          "id":2046,
          "name":"286-Nobuko",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"32 Mill Street, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.87549666666666,
                43.26316833333333
             ]
          }
       },
       {
          "id":4300,
          "name":"731-Travis",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"85, Oak Knoll Drive, Westdale, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.90869,
                43.26535333333333
             ]
          }
       },
       {
          "id":2242,
          "name":"480-Humble Bee",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"183-185 Wentworth Street South, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85128333333333,
                43.24659166666667
             ]
          }
       },
       {
          "id":3204,
          "name":"700-Jon Snow",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"40 Wellington Street North, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85869666666666,
                43.254585
             ]
          }
       },
       {
          "id":14232,
          "name":"789-Wicked Sight",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"155, Park Street South, Corktown, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.87400666666667,
                43.25306833333333
             ]
          }
       },
       {
          "id":2058,
          "name":"297-Mariella",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"124 Parkview Drive, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.90107333333333,
                43.269225
             ]
          }
       },
       {
          "id":1990,
          "name":"235-Kraig",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"83, Macklin Street North, Westdale, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.89589166666667,
                43.26429666666667
             ]
          }
       },
       {
          "id":14266,
          "name":"823-Clean Team",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"215 Sherman Avenue North, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.83538166666666,
                43.25851
             ]
          }
       },
       {
          "id":2237,
          "name":"475-Beatson",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"204, Bond Street North, Westdale, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.89854333333334,
                43.269435
             ]
          }
       },
       {
          "id":1968,
          "name":"209-Muscle Powered",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"50, Barnesdale Avenue South, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.83595666666666,
                43.24958
             ]
          }
       },
       {
          "id":854,
          "name":"037-O's Clothes",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"140 Emerald Street North, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85228333333333,
                43.256985
             ]
          }
       },
       {
          "id":3162,
          "name":"660-Tary",
          "network_id":24,
          "hub_id":2869,
          "inside_area":true,
          "address":"49, Cootes Drive, Cootes Paradise, Dundas, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.94543833333333,
                43.26527166666666
             ]
          }
       },
       {
          "id":2245,
          "name":"484-Jaclyn",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"25-31 Barnesdale Avenue North, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.83475,
                43.252095
             ]
          }
       },
       {
          "id":1998,
          "name":"238-Arlyne",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"133 Stinson Street, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.855355,
                43.24842833333334
             ]
          }
       },
       {
          "id":1862,
          "name":"123-Cooke Family",
          "network_id":24,
          "hub_id":2869,
          "inside_area":true,
          "address":"50 Cootes Drive, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.945295,
                43.2653
             ]
          }
       },
       {
          "id":841,
          "name":"017-J.H. Gordon Books",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"201 Wellington Street North, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.856945,
                43.259365
             ]
          }
       },
       {
          "id":2230,
          "name":"468-Liza",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"374-406 King Street East, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85719166666667,
                43.25315833333333
             ]
          }
       },
       {
          "id":14242,
          "name":"799-Hagelslag Power",
          "network_id":24,
          "hub_id":2869,
          "inside_area":true,
          "address":"Cootes Drive, Cootes Paradise, Dundas, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.94519833333334,
                43.265303333333335
             ]
          }
       },
       {
          "id":2225,
          "name":"463-Conchita",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"36 Bristol Street, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.84397333333334,
                43.257803333333335
             ]
          }
       },
       {
          "id":2165,
          "name":"397-Carlos",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"383 Cannon Street East, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.8504,
                43.25678
             ]
          }
       },
       {
          "id":2004,
          "name":"244-Rolland",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"139, Stinson Street, Inch Park, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85537166666667,
                43.248533333333334
             ]
          }
       },
       {
          "id":1928,
          "name":"112-Travellin' Trixie",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"407 Charlton Avenue West, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.89070166666667,
                43.25420166666667
             ]
          }
       },
       {
          "id":1981,
          "name":"222-Kathe",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"627-639 Hamilton Regional Road 8, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.85031166666667,
                43.252345
             ]
          }
       },
       {
          "id":830,
          "name":"006-Speedy Gonzales",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"21 Hunter Street East, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86879166666667,
                43.253193333333336
             ]
          }
       },
       {
          "id":835,
          "name":"002-Jack Straw",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"120 Catharine Street North, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86338666666667,
                43.259095
             ]
          }
       },
       {
          "id":3103,
          "name":"418-Freddy",
          "network_id":24,
          "hub_id":2869,
          "inside_area":true,
          "address":"49, Cootes Drive, Cootes Paradise, Dundas, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.94539666666667,
                43.265295
             ]
          }
       },
       {
          "id":2099,
          "name":"336-Augustina",
          "network_id":24,
          "hub_id":2868,
          "inside_area":true,
          "address":"6, King Street West, Cootes Paradise, Ancaster, Dundas, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.95419833333334,
                43.26606666666667
             ]
          }
       },
       {
          "id":2108,
          "name":"344-Jessica Rabbit",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"155 Cannon Street East, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86046,
                43.25926833333333
             ]
          }
       },
       {
          "id":3101,
          "name":"410-Fay",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"17 Jackson Street West, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.87045,
                43.25452666666666
             ]
          }
       },
       {
          "id":1997,
          "name":"237-Catrice",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"48-50 Barnesdale Avenue South, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.83593,
                43.249741666666665
             ]
          }
       },
       {
          "id":3208,
          "name":"704-Natalie",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"39 King William Street, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86853,
                43.25764
             ]
          }
       },
       {
          "id":14253,
          "name":"810-Hessy's Stretch",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"30-34 Proctor Boulevard, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.84097333333334,
                43.250031666666665
             ]
          }
       },
       {
          "id":890,
          "name":"063-Stella Bella",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"11 Burris Street, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.84349333333333,
                43.25110166666666
             ]
          }
       },
       {
          "id":893,
          "name":"076-Moe",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"193 Wentworth Street South, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.851485,
                43.246116666666666
             ]
          }
       },
       {
          "id":14205,
          "name":"762-McCarry",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"108, Cannon Street East, Beasley, Hamilton, Ontario",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86307833333333,
                43.258963333333334
             ]
          }
       },
       {
          "id":2360,
          "name":"602-Fugia",
          "network_id":24,
          "hub_id":null,
          "inside_area":true,
          "address":"206 Wellington Street South, Hamilton",
          "sponsored":false,
          "current_position":{
             "type":"Point",
             "coordinates":[
                -79.86191166666667,
                43.247925
             ]
          }
       }
    ]
 }