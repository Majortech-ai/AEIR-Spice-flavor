function orderOnWhatsApp(foodItem) {
    let phoneNumber = "08130822151"; // Your mom's WhatsApp number
    let message = `Hello, I would like to order: ${foodItem}`;
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
}
