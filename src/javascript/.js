document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(document.location.search);
    const destinationId = parseInt(params.get("destination_id"));
    console.log(destinationId)
    let mainElement = document.querySelector(".main__section");
    
    const productsJson = fetch('./assets/json/slideshowprodukt.json')
        .then(function (response) {
            return response.json();
            
        })
        .then((resultat) => {
                 const produkt = resultat.produkter.find(function(destinationE){
                     return destinationE.id == destinationId;
                 })
                    mainElement.innerHTML = `
                    <p class="main__home">Home / Amplifiers / ${produkt.title}</p>
                    <img class="large__img" src="./assets/img2/WEBSHOP_BANNER.png" alt="">
            
                    <aside class="flex__container">
                        <img class="product__img" src="${produkt.image}" alt="">
                    </aside>
                    <section class="main__text">
                        <h1 class="main__h1">${produkt.title}</h1>
                        <p class="main__other">See other ${produkt.brand} products</p>
                        <p class="main__text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio quisquam, nostrum amet 
                            quis magni modi, quae inventore ipsum neque dicta! Nihil labore reiciendis incidunt 
                            aliquid atque! Vero, unde sit.
                        </p>
                        <div class="btn__container">
                          <button class="btn1">ASK A QUESTION</button> <button class="btn1">PART EXCHANGE</button> 
                          <button class="btn1">PAY BY FINANCE</button> <button class="btn1">SEEN A BETTER PRICE?</button>
                        </div>
                    </section>
            
                    <section class="main__more">
                        <h2 class="more__views-sub">More Views</h2>
                        <img class="sub__img" src="./assets/img/forforstaerkere/parasound_halop3.jpg" alt="">
                        <img class="sub__img" src="./assets/img/forforstaerkere/parasound_halop3.jpg" alt="">   
                    </section>
                    
                    <section class="main__checkout">
                        <form class="checkout__form">
                            <div class="form__select">
                                <h5 class="select__title">Finish<label>*</label> <label class="select__subtitle">* Required Fields</label></h5>
                                <form class="select__form" action="/action_page.php">
                                    <select class="form__select1" name="cars" size="4" multiple>
                                      <option value="black">Black</option>
                                      <option value="silver">Silver</option>
                                    </select>
                                </form>
                            </div>
                            <div class="form__card">
                                <label class="card__qty"> Qty: <input type="text" value="1" class="qty__input"> <button class="qty__button">Add To Cart</button></label>
                                <p class="card__subtitle">-OR-</p>
                                <img class="card__image" src="./assets/img2/paypal-checkout.png"> 
                            </div>
                        </form>
                    </section>
            
                    <section class="main__table">
                        <h2 class="table__title">Additional Information</h2>
                        <table class="table__tabel">
                            <tr>
                                <th class="tr__links">Manufacturer</th>
                                <th>${produkt.brand}</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Manufacturer Link</th>
                                <th class="tr__golden">${produkt.brand}</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Free Warranty</th>
                                <th>3 years</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Delivery Charges</th>
                                <th>Free</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Delivery Time</th>
                                <th>1 - 5 days</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Card Subcharges</th>
                                <th>no</th>
                            </tr>
                        </table>
                    </section>
            
                    <section class="main__desc">
                        <h2 class="desc__title">DESCRIPTION</h2>
                        <table class="desc__table">
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">${produkt.brand}</th>
                            </tr>
                        </table>
                    </section>`
        });
});