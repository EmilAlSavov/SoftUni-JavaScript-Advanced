async function solve(){
    let id = sessionStorage.getItem('lastBearId')


    let result = await fetch('http://localhost:3030/jsonstore/bear/' + id);
    let bear = await result.json();
    console.log(bear);

    let bearOuterEyeWidth = bear.outerEyeSize[0] / 2;
    let bearInnerEyeWidth = bear.innerEyeSize[0] / 2;

    let bearOuterEyeHaight = bear.outerEyeSize[1] / 2;
    let bearInnerEyeHaight = bear.innerEyeSize[1] / 2;


    let ul = document.getElementById('bears');

    let items = ul.getElementsByTagName('li');

    let bearsrc = bear.body;

    let data = await fetch('http://localhost:3030/jsonstore/bear').then((res) => res.json());
    
    let bears = Object.entries(data).reverse();


    
    let counter = 0;
    for (const item of items) {
        let div = item.getElementsByTagName('div')[0];
        div.innerHTML += `<p class="name">${bears[counter][1].name}</p>
        <nav id="leftouter" class="outer" style="width:${bearOuterEyeWidth}px;height:${bearOuterEyeHaight}px;"><nav id="leftinner" class="inner" style="width:${bearInnerEyeWidth}px;height:${bearInnerEyeHaight}px;">  </nav></nav>
        <nav id="rightouter" class="outer" style="width:${bearOuterEyeWidth}px;height:${bearOuterEyeHaight}px;"><nav id="rightinner" class="inner" style="width:${bearInnerEyeWidth}px;height:${bearInnerEyeHaight}px;">  </nav></nav>
        <img src=${bears[counter][1].body} class="image">`
        counter++;
    }
    
    // let ref = localStorage.getItem('firstDiv');

    // for (let i = 1; i < items.length; i++) {
    //     items[i].getElementsByTagName('div')[0].innerHTML = ref;
    //     let lastRef = localStorage.getItem(i);
    //     localStorage.setItem(i, items[i].getElementsByTagName('div')[0].innerHTML);
    //     ref = lastRef;
    // }
    // let div1 = items[0].getElementsByTagName('div')[0];
    // div1.innerHTML += `<p class="name">${bear.name}</p><nav id="leftouter" class="outer" style="width:${bearOuterEyeWidth}px;height:${bearOuterEyeHaight}px;"><nav id="leftinner" class="inner" style="width:${bearInnerEyeWidth}px;height:${bearInnerEyeHaight}px;">  </nav></nav><nav id="rightouter" class="outer" style="width:${bearOuterEyeWidth}px;height:${bearOuterEyeHaight}px;"><nav id="rightinner" class="inner" style="width:${bearInnerEyeWidth}px;height:${bearInnerEyeHaight}px;">  </nav></nav><img src=${bearsrc} class="image">`
    // localStorage.setItem('firstDiv', div1.innerHTML);
    
}