// {
//     "name": "order",
//     "type": "document",
//     "fields":
//     { "name": "buyer", "type": "reference", "to": [{ "type": "user" }] },
//     { "name": "items", "type": "array", "of": [{ "type": "reference", "to": [{ "type": "product" }] }] },
//     { "name": "total", "type": "number" },
//     { "name": "status", "type": "string", "options": ["pending", "shipped", "delivered", "cancelled"]
//    }
//     ]
//    }