searchbtn = document.getElementById("Search");

searchbtn.addEventListener("click", async () => {
    const response = await fetch("superheroes.php", {
        method: 'GET',
    });
    const html = await response.text();
    alert(html);
});
