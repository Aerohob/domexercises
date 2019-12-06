const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];


const linkHolder = document.querySelector(".js-link-container");


function linkTest(anArray) {
    anArray.forEach((x) => {
        console.log(x);
        const website = document.createElement('a')
        website.setAttribute('href', x);
        website.textContent = x;
        //console.log(website)
        linkHolder.appendChild(website);
        //console.log(linkHolder)
    });

}

/*addresses.forEach((x) => {
   let websiteSplit = x;
    console.log(websiteSplit);
})
/*
function testing123() {
    addresses.forEach((x) => {
        function linkTest() {
            const website = document.createElement('a')
            website.setAttribute('href', x);
            website.textContent = 'yes';
            //console.log(website)
            linkHolder.appendChild(website);
            //console.log(linkHolder)
        }
    })
}
*/
/*
document.querySelector('.js-link-container').forEach((x) => {
    var l = document.createElement('div');
    l.textContent = "Hello World";
    x.appendChild(l);
  });
  */


function makeElement(type, text) {
    const el = document.createElement(type);
    const textNode = document.createTextNode(text);

    el.appendChild(textNode);
    return el;
}


function appendLinktoContainer(el) {
    linkHolder.appendChild(el);
}



/*const h1 = (text) => makeElement(`h1`, text);
  
  // and then
  document.querySelector("js-link-container");


/*
function makeElement(type, text) {
    const el = document.createElement(type);
    const textNode = document.createTextNode(text);
    
    el.appendChild(textNode);
    
    return el;
  }
  
  const h1 = (text) => makeElement(`h1`, text);
  
  // and then
  document.body.appendChild(h1(`Hello, world.`));

  */