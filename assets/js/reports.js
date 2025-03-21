document.addEventListener('DOMContentLoaded', () => {
    const reportForm = document.getElementById('reportForm');
    const newReportBtn = document.getElementById('newReportBtn');
    const createReportForm = document.getElementById('createReportForm');
  
    newReportBtn.addEventListener('click', () => reportForm.classList.toggle('hidden'));
  
    createReportForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const reportData = {
        caseId: document.getElementById('caseId').value,
        description: document.getElementById('description').value,
      };
      try {
        await createReport(reportData);
        reportForm.classList.add('hidden');
        alert('Laudo gerado com sucesso!');
      } catch (error) {
        alert('Erro ao gerar laudo: ' + error.message);
      }
    });
  });