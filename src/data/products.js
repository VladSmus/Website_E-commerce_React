const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://www.perfectstock.ru/files/preview/1280x854/2156992588326509eevqgtrglexa1kbchsqe06yyi8doki6bmdkwr9hazdjt6fetmargrfmzlzr9xh2rg1ylt1kaxvwzui4uj9qpocqdstj1c1f.jpg",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://www.perfectstock.ru/files/preview/1280x853/11091696233485lxtg0k9li3khaiew5abo6n0vcpgcpn3yb6gg8vm28820sd8o8yfnuekzq3ddduysncvriqfvdcimprrodktzmztcs7ykqaebvjqb.jpg",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://avatars.mds.yandex.net/get-mpic/5218438/2a00000197bba3174dff123a6c0bf94795fc/optimize",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/775cef3105b04e64b3130614e64636e5/bfe5cbf3bba7720e8ea640e654b9d0a6fd86064c36d2b0e65c883da488f79320.jpg.webp",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/razvetviteli-i-adaptery/5024832/560x504/64890060.jpg",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://leonardo3.osnova.io/8be7b4a2-2add-5785-931f-7c9c8bb62837",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image: "https://ir-8.ozone.ru/s3/multimedia-1-d/wc1000/8171109013.jpg",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image: "https://static.chipdip.ru/lib/983/DOC058983232.jpg",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "NVIDIA RTX 6000 Ada 48GB 900-5G133-2550-000",
    price: 11499.99,
    image:
      "https://avatars.mds.yandex.net/get-mpic/9737239/2a0000019073b80f42cb1db82f760d2aefc6/optimize",
    description:
      "The NVIDIA RTX 6000 Ada 48GB 900-5G133-2550-000 professional graphics card is designed to handle resource-intensive tasks such as 3D modeling, rendering, machine learning, and others.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
