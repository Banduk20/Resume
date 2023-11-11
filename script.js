 document.getElementById('openModalBtn').onclick = function() {
            document.getElementById('myModal').style.display = 'block';
        };

        document.getElementById('closeModalBtn').onclick = function() {
            document.getElementById('myModal').style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = 'none';
            }
};
        
document.getElementById('openModalBtn1').onclick = function() {
            document.getElementById('myModal').style.display = 'block';
        };

        document.getElementById('closeModalBtn2').onclick = function() {
            document.getElementById('myModal').style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = 'none';
            }
};
        
