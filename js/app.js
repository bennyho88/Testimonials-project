(function() {

    // customers
    let customers = [];
    let index = 0;

    // object constructor function

    function Customer (name, img, text) {

        this.name = name;
        this.img = img;
        this.text = text;
    }

    // create customer function

    function createCustomer(name, img, text) {

        // full img
        let fullImg = `img/customer-${img}.jpg`;

        // create a new customer instance

        const customer = new Customer(name, fullImg, text);
        // add to all customers

        customers.push(customer);
    }

    createCustomer('john', 1,  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugi aspernatur harum aperiam, quis eos officia.`);
    createCustomer('bob', 2,  `4654 dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugi aspernatur harum aperiam, quis eos officia.`);
    createCustomer('peter', 3,  ` ger54g94 9ae4r 9Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugi aspernatur harum aperiam, quis eos officia.`);
    createCustomer('arnold', 4,  ` oiajp hj JHOHJ ZODHEFH MPH PLorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugi aspernatur harum aperiam, quis eos officia.`);

    // console.log(customers)

    document.querySelectorAll('.btn').forEach(btn => {

        btn.addEventListener('click', function(event) {

            event.preventDefault();
            
           if(event.target.parentElement.classList.contains('prevBtn')) {

            if(index === 0) {
                index = customers.length;
            }

            index--;
            console.log(index)
            document.querySelector('#customer-img').src = customers[index].img;
            document.querySelector('#customer-name').textContent = customers[index].name;
            document.querySelector('#customer-text').textContent = customers[index].text;

           }

           if(event.target.parentElement.classList.contains('nextBtn')) {

            if(index === (customers.length - 1)) {
                index = -1;
            }

            index++;
            console.log(index)
            document.querySelector('#customer-img').src = customers[index].img;
            document.querySelector('#customer-name').textContent = customers[index].name;
            document.querySelector('#customer-text').textContent = customers[index].text;
           }
        })

    })
    */
})();




















































/*
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
*/
