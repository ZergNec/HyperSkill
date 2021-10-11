// let's get started


let txtArea = document.getElementById("text-area");

document.getElementById("upper-case").addEventListener("click", function() {
    txtArea.value = txtArea.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    txtArea.value = txtArea.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let words = txtArea.value.split (" ");
    for (let i =0; i<words.length; i++) {words[i] = words[i][0].toUpperCase() + words[i].substr(1);}
    txtArea.value=words.join(" ");
});


document.getElementById("sentence-case").addEventListener("click", function() {
    txtArea.value=txtArea.value[0].toUpperCase()+txtArea.value.substr(1).toLowerCase();
    let sentences = txtArea.value.split (". ");
    for (let i =0; i<sentences.length; i++) {sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substr(1);}
    txtArea.value=sentences.join(". ");
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function() {
// Start file download.
    download("text.txt",txtArea.value);

});
