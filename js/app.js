
(function() {

    const btn = document.querySelector('#btn');

    const array = ['yellow', 'red', 'blue', 'green', 'purple', 'orange', 'rose']

    btn.addEventListener('click', function() {

        let random = Math.floor(Math.random() * array.length);
        
        document.body.style.backgroundColor = array[random]
    })

})();
