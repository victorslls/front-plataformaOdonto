document.addEventListener('DOMContentLoaded', () => {
    const caseForm = document.getElementById('caseForm');
    const newCaseBtn = document.getElementById('newCaseBtn');
    const createCaseForm = document.getElementById('createCaseForm');
    const caseList = document.getElementById('caseList');
  
    newCaseBtn.addEventListener('click', () => caseForm.classList.toggle('hidden'));
  
    createCaseForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const caseData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        type: document.getElementById('type').value,
        status: document.getElementById('status').value,
      };
      try {
        await createCase(caseData);
        caseForm.classList.add('hidden');
        loadCases();
      } catch (error) {
        alert('Erro ao criar caso: ' + error.message);
      }
    });
  
    async function loadCases() {
      try {
        const cases = await getCases();
        caseList.innerHTML = cases.map(c => `
          <li class="bg-white p-2 rounded shadow">${c.title} - ${c.status} (${c.type})</li>
        `).join('');
      } catch (error) {
        alert('Erro ao carregar casos: ' + error.message);
      }
    }
  
    loadCases();
  });