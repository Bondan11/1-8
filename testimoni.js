// class TestimonialClass {
  //  #quote = ""
    // #img = ""

    // constructor(quote, img) {
      //  this.#quote = quote;
        // this.#img = img;
    //}

    //get quote() {
        return this.#quote
    //}
    //get img() {
      //  return this.#img
    //}
    //get user() {
      //  throw new Error('Testinya mana ')
    //}

    //get dataHatml() {
      //  return `<div class="cardTesti">
        //        <img alt="p" src="${this.img}"/>
          //      <h5>${this.quote}</h5>
            //    <p>${this.user}  </p>
            //</div>
        //`
        //}

        //}

// class userTestimonial extends TestimonialClass {
    //  #user = ""

    // constructor(user, quote, img) {
        //  super(quote, img)
        // this.#user = user
        //}
    //get user() {
      //  return "user : " + this.#user
    //}
//}

//class campeniTestimonial extends TestimonialClass {
  //  #campeni = ""

    //constructor(campeni, quote, img) {
      //  super(quote, img)
        //this.#campeni = campeni
    //}
    //get user() {
      //  return "campeni : " + this.#campeni

    //}
//}

//const testimonialsBondan = new userTestimonial("Bondan", "wah lumayan", "icon/instagram.png")
//const testimonialsAsep = new userTestimonial("Asep", "Agak pusing", "icon/instagram.png")
//const testimonialsUsman = new campeniTestimonial("Usman", "Asyik nih", "icon/instagram.png")

//let dataTestimonial = [testimonialsBondan, testimonialsAsep, testimonialsUsman]
//let dataHatml = ""

//for (let i = 0; i < dataTestimonial.length; i++) {
  //  dataHatml += dataTestimonial[i].dataHatml
//}
//document.getElementById("boxTesti").innerHTML = dataHatml
const dataTestimonial = [
    {
        user: "Bondan",
        quote: "Asik nih",
        img: "https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        rating: 1,

    },
    {
        user: "Wisnu",
        quote: "Keren",
        img: "https://images.unsplash.com/photo-1687360441372-757f8b2b6835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        rating: 2,

    },
    {
        user: "Prayuda",
        quote: "Lumayan",
        img: "intagram.png",
        rating: 2,

    },
    {
        user: "Kadir",
        quote: "Waw, bisa gini ya?",
        img: "intagram.png",
        rating: 4,

    },
    {
        user: "Bagas",
        quote: "Gas",
        img: "intagram.png",
        rating: 4,

    },
    {
        user: "Mita",
        quote: "lucu ",
        img: "intagram.png",
        rating: 5,

    },
    {
        user: "Tasya",
        quote: "Pengen belajar",
        img: "intagram.png",
        rating: 5,

    },
]

function allTestimonial() {
    // alert("ok")
    let testimonualHtml = ""
    dataTestimonial.forEach((d) => {
        testimonualHtml += `<div class="cardTesti">
                 <img alt="p" src="${d.img}"/>
                 <h5>${d.quote}</h5>
                 <p>${d.user}  <i class="fa-solid fa-star"></i> ${d.rating} </p>
             </div>
         `
    })
    document.getElementById("boxTesti").innerHTML = testimonualHtml

}
allTestimonial()


function filterData(rating) {
    let testimonialshtmlfilter = ""

    const datafilter = dataTestimonial.filter((d) => {
        return d.rating === rating
    })

    datafilter.forEach((d) => {
        testimonialshtmlfilter += `<div class="cardTesti">
                <img alt="p" src="${d.img}"/>
                <h5>${d.quote}</h5>
                <p>${d.user}  <i class="fa-solid fa-star"></i> ${d.rating} </p>
            </div>
        `
    })


    document.getElementById("boxTesti").innerHTML = testimonialshtmlfilter

}

function cari() {
    let search = document.getElementById("search").value.toLowerCase();
    // console.log(search)
    testimonialshtmlcari = ""

    const dataCari = dataTestimonial.filter((d) => {
        // mengonversi kata kunci pencarian menjadi huruf kecil
        // cari nilai dalam array
        return d.user.toLowerCase().includes(search);
    })
    dataCari.forEach((d) => {
        testimonialshtmlcari += `<div class="cardTesti">
                <img alt="p" src="${d.img}"/>
                <h5>${d.quote}</h5>
                <p>${d.user}  <i class="fa-solid fa-star"></i> ${d.rating} </p>
            </div>
        `
    })
   
    document.getElementById("boxTesti").innerHTML = testimonialshtmlcari

}