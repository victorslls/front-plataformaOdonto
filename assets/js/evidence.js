async function uploadEvidence(caseId, file, type) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('caseId', caseId);
    formData.append('type', type); // Deve ser Radiografia, Odontograma ou Outro
  
    try {
      const response = await fetch('http://localhost:5000/api/evidences', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${getToken()}` },
        body: formData,
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
  
      alert(data.message); // "Evidência enviada com sucesso"
      window.location.href = `cases.html?caseId=${data.evidence.caseId}`; // Redireciona para cases.html
    } catch (error) {
      alert('Erro ao enviar evidência: ' + error.message);
    }
  }
  
  // Exemplo de uso em um formulário
  document.getElementById('evidenceForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const caseId = document.getElementById('caseId').value;
    const file = document.getElementById('fileInput').files[0];
    const type = document.getElementById('type').value; // Deve corresponder à enum
    await uploadEvidence(caseId, file, type);
  });