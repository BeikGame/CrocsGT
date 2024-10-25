document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const street = document.getElementById('street').value;
    const zone = document.getElementById('zone').value;
    const city = document.getElementById('city').value;
    const houseNumber = document.getElementById('house-number').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const references = document.getElementById('references').value;
    
    if (street && zone && city && houseNumber && phoneNumber && references) {
      const addressOutput = `
        Dirección ingresada:
        Calle: ${street}
        Zona: ${zone}
        Ciudad: ${city}
        Número de Casa: ${houseNumber}
        Número de Teléfono: ${phoneNumber}
        Referencias: ${references}
      `;
      document.getElementById('address-output').innerHTML = addressOutput;
    } else {
      document.getElementById('address-output').innerHTML = 'Por favor, completa todos los campos de la dirección y el número de teléfono.';
    }
  });
  const whatsappUrl = `https://wa.me/50232790692?text=${encodeURIComponent(whatsappMessage)}`;
