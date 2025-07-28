export const handleCopyEmail = () => {
  const email = "josemasia2004@gmail.com";

  try {
    const tempInput = document.createElement("textarea");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Correo copiado al portapapeles 📋");
  } catch (err) {
    alert("No se pudo copiar el correo automáticamente.");
  }
};
