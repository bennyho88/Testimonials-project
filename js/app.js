(function() {

    const customerImg = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');
    console.log(customerImg.src)

    const btns = document.querySelectorAll('.btn');

    let counter = 0;

    const customers =[
        {
            name: 'john',
            text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugi aspernatur harum aperiam, aezrokiaze`
        },
        {
            name:'bob',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, tyjrtytr`
        },
        {
            name: 'peter',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiataspernatur harum aperiam, 854663`
        },
        {
            name: 'arnold',
            text:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, vhibzsrilgzbl`
        }
    ];

    
    
    btns.forEach(btn => {
        btn.addEventListener('click', function() {

            if(btn.classList.contains('prevBtn')) {

                counter--;

                if(counter < 0) {
                    counter = customers.length -1
                }

                customerImg.src = `img/customer-${counter}.jpg`
                customerName.textContent = customers[counter].name;
                customerText.textContent = customers[counter].text;

                



            }

            if(btn.classList.contains('nextBtn')) {

                counter++;

                if(counter > customers.length - 1) {
                    counter = 0;
                }

                
                customerImg.src = `img/customer-${counter}.jpg`
                customerName.textContent = customers[counter].name;
                customerText.textContent = customers[counter].text;
            }
        })
    })

    
})();

