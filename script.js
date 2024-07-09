document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const input = document.getElementById('dataInput');
    const dataList = document.getElementById('dataList');

    // Charger les données existantes
    loadData();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = input.value.trim();
        if (data) {
            saveData(data);
            input.value = '';
        }
    });

    function saveData(data) {
        fetch('save_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'data=' + encodeURIComponent(data)
        })
        .then(response => response.text())
        .then(() => {
            loadData(); // Recharger les données après l'ajout
        })
        .catch(error => console.error('Error:', error));
    }

    function loadData() {
        fetch('get_data.php')
            .then(response => response.json())
            .then(data => {
                dataList.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.data;
                    dataList.appendChild(li);
                });
            })
            .catch(error => console.error('Error:', error));
    }
});