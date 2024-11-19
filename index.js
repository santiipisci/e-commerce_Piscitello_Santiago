let categoria = "Productos"

document.querySelector("h1").innerText = categoria

let data = [{
  "id": 1,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Walker & Dunlop, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 32,
  "storage_capacity": 1772,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 648,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2633.83,
  "category": "Discos HDD/SSD"
}, {
  "id": 2,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "The Chefs' Warehouse, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 30,
  "storage_capacity": 2000,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 908,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 1133.63,
  "category": "Procesadores"
}, {
  "id": 3,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Capital One Financial Corporation",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 5,
  "storage_capacity": 500,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 568,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 749.78,
  "category": "Perifericos"
}, {
  "id": 4,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Alico, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 8,
  "storage_capacity": 1112,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 722,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 899.06,
  "category": "Discos HDD/SSD"
}, {
  "id": 5,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "MEI Pharma, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 5,
  "storage_capacity": 1774,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 498,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2096.37,
  "category": "Memorias"
}, {
  "id": 6,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Prudential Financial, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 29,
  "storage_capacity": 1240,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 962,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1090.17,
  "category": "Tarjetas Graficas"
}, {
  "id": 7,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Take-Two Interactive Software, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 28,
  "storage_capacity": 390,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 558,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1834.55,
  "category": "Memorias"
}, {
  "id": 8,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "PartnerRe Ltd.",
  "processor": "Intel Core i7",
  "ram_capacity": 32,
  "storage_capacity": 672,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 659,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2160.68,
  "category": "Procesadores"
}, {
  "id": 9,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "QAD Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 13,
  "storage_capacity": 1573,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 465,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2440.78,
  "category": "Perifericos"
}, {
  "id": 10,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "PriceSmart, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 24,
  "storage_capacity": 1403,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 620,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 2184.02,
  "category": "Discos HDD/SSD"
}, {
  "id": 11,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "SharpSpring, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 13,
  "storage_capacity": 2031,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 911,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 2863.93,
  "category": "Procesadores"
}, {
  "id": 12,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "VWR Corporation",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 14,
  "storage_capacity": 1543,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 947,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 673.32,
  "category": "Discos HDD/SSD"
}, {
  "id": 13,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "TAT Technologies Ltd.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 547,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 907,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2547.77,
  "category": "Procesadores"
}, {
  "id": 14,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Stage Stores, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 4,
  "storage_capacity": 803,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 947,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1771.12,
  "category": "Discos HDD/SSD"
}, {
  "id": 15,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "NF Energy Saving Corporation",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 22,
  "storage_capacity": 390,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 785,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2787.28,
  "category": "Memorias"
}, {
  "id": 16,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Atomera Incorporated",
  "processor": "Intel Core i5",
  "ram_capacity": 11,
  "storage_capacity": 1697,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 725,
  "case_type": "Micro ATX",
  "cooling_system": "Liquid Cooler",
  "price": 2427.15,
  "category": "Discos HDD/SSD"
}, {
  "id": 17,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "EnPro Industries",
  "processor": "Intel Core i7",
  "ram_capacity": 28,
  "storage_capacity": 1480,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 603,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1484.91,
  "category": "Perifericos"
}, {
  "id": 18,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "PrimeEnergy Corporation",
  "processor": "Intel Core i5",
  "ram_capacity": 11,
  "storage_capacity": 1293,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 732,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1832.05,
  "category": "Procesadores"
}, {
  "id": 19,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "JM Global Holding Company",
  "processor": "Intel Core i7",
  "ram_capacity": 27,
  "storage_capacity": 1219,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 651,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1276.92,
  "category": "Discos HDD/SSD"
}, {
  "id": 20,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "LegacyTexas Financial Group, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 18,
  "storage_capacity": 568,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 441,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2443.08,
  "category": "Procesadores"
}, {
  "id": 21,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "SEACOR Holdings, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 30,
  "storage_capacity": 1272,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 567,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 876.36,
  "category": "Procesadores"
}, {
  "id": 22,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Henry Schein, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 8,
  "storage_capacity": 440,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 905,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2920.11,
  "category": "Perifericos"
}, {
  "id": 23,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Merrill Lynch Depositor, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 32,
  "storage_capacity": 1126,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 649,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1801.75,
  "category": "Procesadores"
}, {
  "id": 24,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Public Storage",
  "processor": "Intel Core i7",
  "ram_capacity": 10,
  "storage_capacity": 1469,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 721,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2425.8,
  "category": "Perifericos"
}, {
  "id": 25,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Astec Industries, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 17,
  "storage_capacity": 1274,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 686,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2954.06,
  "category": "Discos HDD/SSD"
}, {
  "id": 26,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Micronet Enertec Technologies, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 18,
  "storage_capacity": 553,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 943,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1666.2,
  "category": "Memorias"
}, {
  "id": 27,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Apollo Tactical Income Fund Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 4,
  "storage_capacity": 1376,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 881,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2772.19,
  "category": "Discos HDD/SSD"
}, {
  "id": 28,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Janus Henderson Small Cap Growth Alpha ETF",
  "processor": "Intel Core i5",
  "ram_capacity": 30,
  "storage_capacity": 987,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 734,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 2728.73,
  "category": "Tarjetas Graficas"
}, {
  "id": 29,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Cubic Corporation",
  "processor": "Intel Core i5",
  "ram_capacity": 14,
  "storage_capacity": 1985,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 668,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 620.59,
  "category": "Perifericos"
}, {
  "id": 30,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "America's Car-Mart, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 25,
  "storage_capacity": 1248,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 729,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2312.17,
  "category": "Memorias"
}, {
  "id": 31,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "EQT Midstream Partners, LP",
  "processor": "Intel Core i5",
  "ram_capacity": 4,
  "storage_capacity": 1393,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 850,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1713.29,
  "category": "Perifericos"
}, {
  "id": 32,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Splunk Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 5,
  "storage_capacity": 1086,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 587,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 845.31,
  "category": "Perifericos"
}, {
  "id": 33,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "China Information Technology, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 21,
  "storage_capacity": 1025,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 826,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 938.94,
  "category": "Perifericos"
}, {
  "id": 34,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Independent Bank Corporation",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 29,
  "storage_capacity": 1638,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 513,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 960.89,
  "category": "Tarjetas Graficas"
}, {
  "id": 35,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Quaker Chemical Corporation",
  "processor": "Intel Core i7",
  "ram_capacity": 27,
  "storage_capacity": 398,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 652,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2873.57,
  "category": "Discos HDD/SSD"
}, {
  "id": 36,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Amedica Corporation",
  "processor": "Intel Core i5",
  "ram_capacity": 30,
  "storage_capacity": 1799,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 512,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2946.01,
  "category": "Discos HDD/SSD"
}, {
  "id": 37,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Square, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 2004,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 606,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 2351.35,
  "category": "Memorias"
}, {
  "id": 38,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "PetroChina Company Limited",
  "processor": "Intel Core i7",
  "ram_capacity": 15,
  "storage_capacity": 996,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 455,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 1597.3,
  "category": "Perifericos"
}, {
  "id": 39,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Assured Guaranty Ltd.",
  "processor": "Intel Core i5",
  "ram_capacity": 14,
  "storage_capacity": 954,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 944,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 1075.99,
  "category": "Procesadores"
}, {
  "id": 40,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Idera Pharmaceuticals, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 18,
  "storage_capacity": 699,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 407,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1335.79,
  "category": "Discos HDD/SSD"
}, {
  "id": 41,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Pentair plc.",
  "processor": "Intel Core i7",
  "ram_capacity": 27,
  "storage_capacity": 469,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 451,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1277.51,
  "category": "Tarjetas Graficas"
}, {
  "id": 42,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Allied World Assurance Company Holdings, AG",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 24,
  "storage_capacity": 1041,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 494,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 744.26,
  "category": "Discos HDD/SSD"
}, {
  "id": 43,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Gores Holdings II, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 8,
  "storage_capacity": 744,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 473,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1630.36,
  "category": "Procesadores"
}, {
  "id": 44,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "The Ultimate Software Group, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 1765,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 631,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1540.95,
  "category": "Procesadores"
}, {
  "id": 45,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Penn Virginia Corporation",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 24,
  "storage_capacity": 1676,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 869,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1086.27,
  "category": "Perifericos"
}, {
  "id": 46,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Andina Acquisition Corp. II",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 773,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 889,
  "case_type": "Micro ATX",
  "cooling_system": "Liquid Cooler",
  "price": 784.85,
  "category": "Tarjetas Graficas"
}, {
  "id": 47,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Navios Maritime Partners LP",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 29,
  "storage_capacity": 814,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 982,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2632.18,
  "category": "Tarjetas Graficas"
}, {
  "id": 48,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "U.S. Bancorp",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 23,
  "storage_capacity": 1052,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 620,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1690.83,
  "category": "Memorias"
}, {
  "id": 49,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Chesapeake Utilities Corporation",
  "processor": "Intel Core i7",
  "ram_capacity": 30,
  "storage_capacity": 1545,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 466,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2301.3,
  "category": "Tarjetas Graficas"
}, {
  "id": 50,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Netflix, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 25,
  "storage_capacity": 1312,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 595,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1890.03,
  "category": "Discos HDD/SSD"
}, {
  "id": 51,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Nuveen Municipal Credit Income Fund",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 1346,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 486,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2184.58,
  "category": "Memorias"
}, {
  "id": 52,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Innodata Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 6,
  "storage_capacity": 1969,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 890,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 729.4,
  "category": "Memorias"
}, {
  "id": 53,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Sundance Energy Australia Limited",
  "processor": "Intel Core i5",
  "ram_capacity": 30,
  "storage_capacity": 580,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 659,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1660.97,
  "category": "Discos HDD/SSD"
}, {
  "id": 54,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "SilverSun Technologies, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 15,
  "storage_capacity": 1759,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 791,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1383.03,
  "category": "Tarjetas Graficas"
}, {
  "id": 55,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "PT Telekomunikasi Indonesia, Tbk",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 26,
  "storage_capacity": 1016,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 664,
  "case_type": "Micro ATX",
  "cooling_system": "Liquid Cooler",
  "price": 1910.26,
  "category": "Procesadores"
}, {
  "id": 56,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Schweitzer-Mauduit International, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 23,
  "storage_capacity": 638,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 685,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1705.63,
  "category": "Tarjetas Graficas"
}, {
  "id": 57,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Ares Management L.P.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 13,
  "storage_capacity": 644,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 800,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 2330.53,
  "category": "Procesadores"
}, {
  "id": 58,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Marvell Technology Group Ltd.",
  "processor": "Intel Core i5",
  "ram_capacity": 19,
  "storage_capacity": 624,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 986,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1907.85,
  "category": "Procesadores"
}, {
  "id": 59,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Baker Hughes Incorporated",
  "processor": "Intel Core i5",
  "ram_capacity": 17,
  "storage_capacity": 352,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 450,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2607.59,
  "category": "Procesadores"
}, {
  "id": 60,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Allstate Corporation (The)",
  "processor": "Intel Core i5",
  "ram_capacity": 9,
  "storage_capacity": 339,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 984,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1053.05,
  "category": "Tarjetas Graficas"
}, {
  "id": 61,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Easterly Government Properties, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 22,
  "storage_capacity": 642,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 770,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2368.77,
  "category": "Memorias"
}, {
  "id": 62,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "SunCoke Energy Partners, L.P.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 30,
  "storage_capacity": 500,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 625,
  "case_type": "Micro ATX",
  "cooling_system": "Liquid Cooler",
  "price": 2591.51,
  "category": "Tarjetas Graficas"
}, {
  "id": 63,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "New Ireland Fund, Inc. (The)",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 1409,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 876,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 711.67,
  "category": "Memorias"
}, {
  "id": 64,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Radcom Ltd.",
  "processor": "Intel Core i7",
  "ram_capacity": 18,
  "storage_capacity": 1388,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 405,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2265.71,
  "category": "Tarjetas Graficas"
}, {
  "id": 65,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Murphy USA Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 16,
  "storage_capacity": 1326,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 565,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 670.2,
  "category": "Tarjetas Graficas"
}, {
  "id": 66,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "NV5 Global, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 1192,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 663,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1040.25,
  "category": "Procesadores"
}, {
  "id": 67,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Jones Energy, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 6,
  "storage_capacity": 929,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 669,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2953.07,
  "category": "Procesadores"
}, {
  "id": 68,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Kitov Pharmaceuticals Holdings Ltd.",
  "processor": "Intel Core i5",
  "ram_capacity": 21,
  "storage_capacity": 373,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 689,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1417.07,
  "category": "Memorias"
}, {
  "id": 69,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Western Asset Global High Income Fund Inc",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 14,
  "storage_capacity": 501,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 517,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1407.89,
  "category": "Tarjetas Graficas"
}, {
  "id": 70,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Costamare Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 30,
  "storage_capacity": 1501,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 936,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 2895.06,
  "category": "Memorias"
}, {
  "id": 71,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Fortress Transportation and Infrastructure Investors LLC",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 17,
  "storage_capacity": 2035,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 811,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1891.53,
  "category": "Discos HDD/SSD"
}, {
  "id": 72,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Navios Maritime Partners LP",
  "processor": "Intel Core i7",
  "ram_capacity": 9,
  "storage_capacity": 1840,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 994,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1665.6,
  "category": "Discos HDD/SSD"
}, {
  "id": 73,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Golden Entertainment, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 5,
  "storage_capacity": 1607,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 726,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1615.76,
  "category": "Procesadores"
}, {
  "id": 74,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Phillips 66",
  "processor": "Intel Core i5",
  "ram_capacity": 9,
  "storage_capacity": 271,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 978,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1000.41,
  "category": "Perifericos"
}, {
  "id": 75,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "SJW Group",
  "processor": "Intel Core i5",
  "ram_capacity": 20,
  "storage_capacity": 1989,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 431,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1403.25,
  "category": "Discos HDD/SSD"
}, {
  "id": 76,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Alimera Sciences, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 28,
  "storage_capacity": 1338,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 733,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1747.84,
  "category": "Discos HDD/SSD"
}, {
  "id": 77,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "NewLink Genetics Corporation",
  "processor": "Intel Core i7",
  "ram_capacity": 23,
  "storage_capacity": 485,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 758,
  "case_type": "Micro ATX",
  "cooling_system": "Liquid Cooler",
  "price": 1080.92,
  "category": "Procesadores"
}, {
  "id": 78,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "PNC Financial Services Group, Inc. (The)",
  "processor": "Intel Core i5",
  "ram_capacity": 9,
  "storage_capacity": 1671,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 685,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1222.5,
  "category": "Discos HDD/SSD"
}, {
  "id": 79,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "L.B. Foster Company",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 22,
  "storage_capacity": 1230,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 638,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 1142.67,
  "category": "Procesadores"
}, {
  "id": 80,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Arthur J. Gallagher & Co.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 518,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 809,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 509.09,
  "category": "Memorias"
}, {
  "id": 81,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "NVIDIA Corporation",
  "processor": "Intel Core i5",
  "ram_capacity": 29,
  "storage_capacity": 1983,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 598,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2258.87,
  "category": "Memorias"
}, {
  "id": 82,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Delta Air Lines, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 1963,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 911,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 651.1,
  "category": "Memorias"
}, {
  "id": 83,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "ServiceNow, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 17,
  "storage_capacity": 1213,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 793,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1983.87,
  "category": "Tarjetas Graficas"
}, {
  "id": 84,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Grupo Aeroportuario del Sureste, S.A. de C.V.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 20,
  "storage_capacity": 997,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 752,
  "case_type": "Micro ATX",
  "cooling_system": "Liquid Cooler",
  "price": 918.32,
  "category": "Memorias"
}, {
  "id": 85,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "MEDIFAST INC",
  "processor": "Intel Core i7",
  "ram_capacity": 26,
  "storage_capacity": 260,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 938,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1113.41,
  "category": "Procesadores"
}, {
  "id": 86,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "RPC, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 26,
  "storage_capacity": 2020,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 570,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1574.55,
  "category": "Tarjetas Graficas"
}, {
  "id": 87,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "DelMar Pharmaceuticals, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 22,
  "storage_capacity": 1725,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 509,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 1115.25,
  "category": "Procesadores"
}, {
  "id": 88,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Preformed Line Products Company",
  "processor": "Intel Core i7",
  "ram_capacity": 32,
  "storage_capacity": 1539,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 627,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1081.02,
  "category": "Procesadores"
}, {
  "id": 89,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "First Trust Latin America AlphaDEX Fund",
  "processor": "Intel Core i7",
  "ram_capacity": 28,
  "storage_capacity": 1551,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 552,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Fan Cooler",
  "price": 2568.84,
  "category": "Discos HDD/SSD"
}, {
  "id": 90,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Littelfuse, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 23,
  "storage_capacity": 1950,
  "graphics_card": "NVIDIA GeForce RTX 2080",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 943,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2183.83,
  "category": "Tarjetas Graficas"
}, {
  "id": 91,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "First South Bancorp Inc",
  "processor": "Intel Core i5",
  "ram_capacity": 29,
  "storage_capacity": 610,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 868,
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 622.64,
  "category": "Procesadores"
}, {
  "id": 92,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "ABAXIS, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 19,
  "storage_capacity": 1910,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 726,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2430.7,
  "category": "Perifericos"
}, {
  "id": 93,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Biomerica, Inc.",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 12,
  "storage_capacity": 1998,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 547,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 2701.69,
  "category": "Memorias"
}, {
  "id": 94,
  "img": "https://compucordoba.com.ar/img/Public/1078-producto-pc-r7-06-23-8933.jpg",
  "pc_model": "Payment Data Systems, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 9,
  "storage_capacity": 471,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 902,
  "case_type": "Micro ATX",
  "cooling_system": "Fan Cooler",
  "price": 1181.96,
  "category": "Perifericos"
}, {
  "id": 95,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Atlantic Alliance Partnership Corp.",
  "processor": "Intel Core i5",
  "ram_capacity": 17,
  "storage_capacity": 300,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 698,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2712.55,
  "category": "Procesadores"
}, {
  "id": 96,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "Steel Partners Holdings LP",
  "processor": "Intel Core i7",
  "ram_capacity": 20,
  "storage_capacity": 2035,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 943,
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 620.17,
  "category": "Perifericos"
}, {
  "id": 97,
  "img": "https://http2.mlstatic.com/D_NQ_NP_891392-MLA52853947999_122022-O.webp",
  "pc_model": "Ritter Pharmaceuticals, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 16,
  "storage_capacity": 311,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 511,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1303.87,
  "category": "Discos HDD/SSD"
}, {
  "id": 98,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "General Mills, Inc.",
  "processor": "Intel Core i5",
  "ram_capacity": 11,
  "storage_capacity": 1487,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS Elite",
  "power_supply_wattage": 621,
  "case_type": "Micro ATX",
  "cooling_system": "Air Cooler",
  "price": 2372.02,
  "category": "Discos HDD/SSD"
}, {
  "id": 99,
  "img": "https://electropc.com.ar/wp-content/uploads/diseno-5-jpg.webp",
  "pc_model": "ViewRay, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 1882,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG Z490",
  "power_supply_wattage": 714,
  "case_type": "ATX Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2170.0,
  "category": "Perifericos"
}, {
  "id": 100,
  "img": "https://http2.mlstatic.com/D_NQ_NP_898509-MLA76371323185_052024-O.webp",
  "pc_model": "Dominion Energy, Inc.",
  "processor": "Intel Core i7",
  "ram_capacity": 10,
  "storage_capacity": 511,
  "graphics_card": "NVIDIA GeForce GTX 1650",
  "motherboard": "ASUS ROG Strix B450-F",
  "power_supply_wattage": 758,
  "case_type": "Mini ITX",
  "cooling_system": "Fan Cooler",
  "price": 833.7,
  "category": "Memorias"
}]

function cards(categorySearch) {
let cardss
  if (categorySearch){
     cardss = data.map((producto) => {if(categorySearch === producto.category){
      return`<div class="card" style="width: 18rem; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); overflow: hidden; display: flex; flex-direction: column; padding-left: 10px; padding-right: 10px"; padding-bottom:10px;>
    <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: cover; width: 100%; height: 300px;" />
    <div class="card-body d-flex flex-column" style="flex-grow: 1;">
        <p class="card-text">${producto.pc_model}</p>
        <p class="card-text">Procesador: ${producto.processor}</p>
        <p class="card-text">Gráfica: ${producto.graphics_card}</p>
        <p class="card-text">Memoria RAM: ${producto.ram_capacity}</p>
        <p class="card-text">Categoría: ${producto.category}</p>
        <p class="card-text">Precio: ${producto.price}</p>
        <p class="card-text">Disponibilidad: ${producto.storage_capacity}</p>
    </div>
    <button class="btn btn-primary" type="button" style="margin-top: auto;">
        <a href="producto.html?prod=${producto.id}" style="color: rgb(49, 43, 43); text-decoration: none;">Ver más</a>
    </button>
</div>`
     }
     });
     document.querySelector(".container").innerHTML = cardss.join("");
  }else{
     cardss = data.map((producto) => `<div class="card" style="width: 18rem; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); overflow: hidden; transition: transform 0.2s; padding-left: 10px; padding-right: 10px; padding-bottom: 10px; ">
    <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: cover; width: 100%; height: 300px;"/>
       <div class="card-body d-flex flex-column">
            <p class="card-text">
                ${producto.pc_model}
            </p>
            <p class="card-text">
               Procesador: ${producto.processor}
            </p>
            <p class="card-text">
               Gráfica: ${producto.graphics_card}
            </p>
            <p class="card-text">
               Memoria RAM: ${producto.ram_capacity}
            </p>
            <p class="card-text">
           Categoría: ${producto.category}
        </p>
            <p class="card-text">
               Precio: ${producto.price}
            </p>
            <p class="card-text">
               Disponibilidad: ${producto.storage_capacity}
            </p>
        </div>
        <button class="btn btn-primary" type="button">
              <a href="producto.html?prod=${producto.id}" style="color: white; text-decoration: none;">Ver más</a>
          </button>
  </div>`);
  document.querySelector(".container").innerHTML = cardss.join("");
  }
}

document.querySelector(".container").innerHTML = "Cargando..."
const loadingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(cards())
  }, 3000)
})

function buscador1() {
  let input = document.querySelector(".input")
  console.log(input)
  let filterData = data.filter((producto) => producto.pc_model == input.value);
  let cards = filterData.map((producto) => `<div class="card" style="width: 18rem;">
<img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: cover; width: 100%; height: 150px;"/>
<div class="card-body d-flex flex-column">
            <p class="card-text">
                ${producto.pc_model}
            </p>
            <p class="card-text">
               Procesador:  ${producto.processor}
            </p>
            <p class="card-text">
               Precio: ${producto.price}
            </p>
            <p class="card-text">
               Disponibilidad: ${producto.storage_capacity}
            </p>
            <button class="btn btn-primary" type="button">
              <a href="producto.html?prod=${producto.id}" style="color: rgb(49, 43, 43); text-decoration: none;">Ver más</a>
          </button>
        </div>`);
  document.querySelector(".container").innerHTML = cards.join("");
}

let btnBusqueda = document.querySelector(".search");
btnBusqueda.addEventListener("click", buscador1)

let btnDelete = document.querySelector(".reset");
btnDelete.addEventListener("click", cards)

let btnCategorias = document.querySelectorAll(".btncategorias");
for (const category of btnCategorias) {
  category.addEventListener("click", () => {
    console.log((category.innerText))
    cards(category.innerText)
  })
}