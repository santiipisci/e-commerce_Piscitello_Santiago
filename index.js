let categoria = "Productos"

document.querySelector("h1").innerText = categoria

let data = [{
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 20,
  "storage_capacity": 1463,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 1878.31
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 32,
  "storage_capacity": 953,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1298.66
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 26,
  "storage_capacity": 557,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 2354.77
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 13,
  "storage_capacity": 1700,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 2828.05
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 4,
  "storage_capacity": 1489,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 1594.54
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 26,
  "storage_capacity": 732,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2311.76
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 21,
  "storage_capacity": 944,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1336.01
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 23,
  "storage_capacity": 890,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 897.17
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 21,
  "storage_capacity": 1847,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 746.69
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 22,
  "storage_capacity": 1355,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 1043.96
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 21,
  "storage_capacity": 538,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1685.9
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 11,
  "storage_capacity": 1808,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1142.41
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 23,
  "storage_capacity": 912,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 2031.71
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 10,
  "storage_capacity": 1914,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2699.1
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 26,
  "storage_capacity": 1369,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1158.44
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 29,
  "storage_capacity": 368,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2017.37
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 17,
  "storage_capacity": 1492,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 1815.82
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 23,
  "storage_capacity": 811,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2011.28
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 31,
  "storage_capacity": 597,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 1172.0
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 16,
  "storage_capacity": 1062,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 1770.19
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 24,
  "storage_capacity": 1677,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2621.16
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 5,
  "storage_capacity": 465,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 1064.61
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 1048,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1537.25
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 20,
  "storage_capacity": 706,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2258.01
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 25,
  "storage_capacity": 555,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 924.85
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 23,
  "storage_capacity": 550,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 1272.51
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 26,
  "storage_capacity": 1377,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 2005.5
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 26,
  "storage_capacity": 1300,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 869.79
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 26,
  "storage_capacity": 668,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2899.77
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 20,
  "storage_capacity": 1049,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1676.89
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 17,
  "storage_capacity": 439,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 2280.28
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 491,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 2398.19
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 20,
  "storage_capacity": 973,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 1274.57
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 9,
  "storage_capacity": 559,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2703.9
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 12,
  "storage_capacity": 1797,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2658.29
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 25,
  "storage_capacity": 1945,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 1717.88
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 12,
  "storage_capacity": 1389,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1608.45
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 8,
  "storage_capacity": 1114,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 2989.26
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 19,
  "storage_capacity": 829,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2416.31
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 24,
  "storage_capacity": 957,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 614.71
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 19,
  "storage_capacity": 1843,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1873.34
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 19,
  "storage_capacity": 600,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 1606.28
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 28,
  "storage_capacity": 798,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 711.6
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 29,
  "storage_capacity": 589,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 741.62
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 18,
  "storage_capacity": 1238,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1320.9
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 8,
  "storage_capacity": 1735,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 1679.44
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 10,
  "storage_capacity": 1422,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 2095.87
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 19,
  "storage_capacity": 287,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1943.41
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 5,
  "storage_capacity": 1568,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2391.28
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 15,
  "storage_capacity": 870,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1919.43
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 22,
  "storage_capacity": 1424,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 852.02
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 11,
  "storage_capacity": 1488,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1886.6
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 16,
  "storage_capacity": 1217,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 2712.07
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 6,
  "storage_capacity": 1613,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 1476.09
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 14,
  "storage_capacity": 834,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 1742.75
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 4,
  "storage_capacity": 517,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 800.0
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 32,
  "storage_capacity": 1712,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 2353.16
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 26,
  "storage_capacity": 615,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1274.8
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 7,
  "storage_capacity": 868,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 2613.49
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 9,
  "storage_capacity": 1988,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 1009.08
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 19,
  "storage_capacity": 1751,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 721.22
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 15,
  "storage_capacity": 1769,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1208.55
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 15,
  "storage_capacity": 905,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2710.57
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 15,
  "storage_capacity": 1249,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 964.1
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 29,
  "storage_capacity": 1869,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 918.16
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 5,
  "storage_capacity": 459,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2049.53
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 27,
  "storage_capacity": 1206,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 2083.13
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 6,
  "storage_capacity": 520,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2267.62
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 32,
  "storage_capacity": 638,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2077.77
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 7,
  "storage_capacity": 774,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 2874.6
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 16,
  "storage_capacity": 1643,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 2640.33
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 24,
  "storage_capacity": 1553,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1873.41
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 15,
  "storage_capacity": 1716,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 2352.77
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 26,
  "storage_capacity": 794,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2917.44
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i7",
  "ram_capacity": 15,
  "storage_capacity": 1003,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2000.14
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 28,
  "storage_capacity": 1979,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 1312.4
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 31,
  "storage_capacity": 1355,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 2308.81
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 27,
  "storage_capacity": 893,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2630.14
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 15,
  "storage_capacity": 1785,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 513.0
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 13,
  "storage_capacity": 982,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 2970.82
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 20,
  "storage_capacity": 1576,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 1523.26
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 31,
  "storage_capacity": 804,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 936.46
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 31,
  "storage_capacity": 1548,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1458.13
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 26,
  "storage_capacity": 1180,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 853.76
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 30,
  "storage_capacity": 1111,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Air Cooler",
  "price": 2871.65
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 32,
  "storage_capacity": 1456,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 1550.28
}, {
  "pc_model": "Componentes PC-300",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 19,
  "storage_capacity": 1128,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 2475.01
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 17,
  "storage_capacity": 1566,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Full Tower",
  "cooling_system": "AIO Cooler",
  "price": 1871.0
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 22,
  "storage_capacity": 1814,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 2891.18
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 25,
  "storage_capacity": 497,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 1291.75
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 24,
  "storage_capacity": 263,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Liquid Cooler",
  "price": 731.86
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i7",
  "ram_capacity": 10,
  "storage_capacity": 1537,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "AIO Cooler",
  "price": 1516.7
}, {
  "pc_model": "Componentes PC-200",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 5,
  "storage_capacity": 1139,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "EVGA SuperNOVA 650",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2240.79
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 13,
  "storage_capacity": 1437,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Air Cooler",
  "price": 2067.13
}, {
  "pc_model": "Componentes PC-300",
  "processor": "Intel Core i5",
  "ram_capacity": 8,
  "storage_capacity": 1126,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Full Tower",
  "cooling_system": "Liquid Cooler",
  "price": 1987.86
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 30,
  "storage_capacity": 687,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "Gigabyte B550 AORUS",
  "power_supply": "Corsair RM750x",
  "case_type": "Mini ITX",
  "cooling_system": "Liquid Cooler",
  "price": 1447.51
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i7",
  "ram_capacity": 25,
  "storage_capacity": 469,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2070.01
}, {
  "pc_model": "Componentes PC-100",
  "processor": "AMD Ryzen 5",
  "ram_capacity": 27,
  "storage_capacity": 1499,
  "graphics_card": "NVIDIA RTX 2080",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 961.62
}, {
  "pc_model": "Componentes PC-100",
  "processor": "Intel Core i5",
  "ram_capacity": 23,
  "storage_capacity": 691,
  "graphics_card": "AMD Radeon RX 570",
  "motherboard": "MSI MPG X570",
  "power_supply": "Seasonic Focus GX-650",
  "case_type": "Mini ITX",
  "cooling_system": "AIO Cooler",
  "price": 2721.21
}, {
  "pc_model": "Componentes PC-200",
  "processor": "Intel Core i5",
  "ram_capacity": 21,
  "storage_capacity": 2029,
  "graphics_card": "NVIDIA GeForce GTX 1660",
  "motherboard": "ASUS ROG Strix B450",
  "power_supply": "Corsair RM750x",
  "case_type": "Mid Tower",
  "cooling_system": "Air Cooler",
  "price": 2996.41
}]
  const cards = data.map((product) => {
return `
    <div class="card d-flex flex-column align-items-center" style="width: 18rem">
    <img src="${product.imagen}"
    alt="imagen ${product.titulo}"
    style="object-fit: cover; width: 100%; height: 150px;"
        />
        <div class="card-body d-flex flex-column">
            <p class="card-text">
                ${product.titulo}
            </p>
            <p class="card-text">
               Detalles:  ${product.detalle}
            </p>
            <p class="card-text">
               Precio: ${product.precio}
            </p>
            <p class="card-text">
               Disponibilidad: ${product.disponibilidad}
            </p>
        </div>
        <button class="btn btn-primary" type="button">
              <a href="producto.html" style="color: rgb(49, 43, 43); text-decoration: none;">Ver más</a>
          </button>
    </div>`;
    
  });

document.querySelector(".container").innerHTML = cards.join('');