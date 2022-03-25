let serviceBtn = document.querySelectorAll('.services_block_description'),
    block2 = document.querySelector('.block2'),
    logo = document.querySelector('#logo');

for(let Btn of serviceBtn) {
    Btn.addEventListener('click', event => {
        serviceBtn.forEach(block =>{
            if(block !== Btn) {
                block.closest('.services_block_description').classList.remove('active');
                let Block2Num1 = block.querySelector('.services_block_description_header').getAttribute('data-num')
                block2.classList.remove('block2Background' + Block2Num1)
            };
        })
        let Block2Num = Btn.querySelector('.services_block_description_header').getAttribute('data-num')
        Btn.classList.toggle('active')
        block2.classList.toggle('block2Background' + Block2Num)

        if(Btn.classList.contains('active')) {
            block2.classList.add('active')
            document.querySelector('header').classList.add('active');
            logo.setAttribute('src', 'assets/img/Logo1.png')
        } else {
            block2.classList.remove('active');
            document.querySelector('header').classList.remove('active');
            logo.setAttribute('src', 'assets/img/Logo.png')
        }

    })
}

