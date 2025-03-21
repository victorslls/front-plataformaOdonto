document.addEventListener('DOMContentLoaded', () => {
    const compareBtn = document.getElementById('compareBtn');
    const dentalFile = document.getElementById('dentalFile');
    const results = document.getElementById('results');
  
    compareBtn.addEventListener('click', async () => {
      const file = dentalFile.files[0];
      if (!file) return alert('Selecione um arquivo!');
      try {
        const data = await compareDentalRecords(file);
        results.innerHTML = '<p>Resultados da comparação: ' + JSON.stringify(data) + '</p>';
      } catch (error) {
        alert('Erro ao comparar: ' + error.message);
      }
    });
  });