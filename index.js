function matchProfile() {
    let hobbiesA = [];
    let hobbiesB = [];
    let hobbiesCommon = [];

    inputsA = document.getElementById('personA').querySelectorAll('input');
    inputsB = document.getElementById('personB').querySelectorAll('input');
    inputsA.forEach(input => hobbiesA.push(input.value));
    inputsB.forEach(input => hobbiesB.push(input.value));


    hobbiesCommon = hobbiesA.filter(hobby => hobbiesB.includes(hobby));

    document.getElementById('output').innerHTML = null;
    hobbiesCommon.forEach(hobby => {
        let li = document.createElement('li');
        li.innerText = hobby;
        li.style.color = "green"
        document.getElementById('output').appendChild(li)
    })

}

document.getElementById('find').addEventListener('click', matchProfile);
















/*let a = [1, 2, 5, 6, 3, 2];
for (let i = 0; i < a.length; i++) {
if (a[i] % 2 != 0) {
    console.log(a[i]);
}

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        console.log(a[i]);
    }
}*/
