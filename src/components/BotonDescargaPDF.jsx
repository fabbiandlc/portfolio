const BotonDescargaPDF = () => {
  const handleDownload = () => {
    const url = "/public/CV.pdf"; // Ruta correcta desde public
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV.pdf"; // Nombre con el que se descargará el archivo
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="transition-colors text-base px-6 py-1 bg-purple-950 text-w font-mono rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Descargar CV
    </button>
  );
};

export default BotonDescargaPDF;
