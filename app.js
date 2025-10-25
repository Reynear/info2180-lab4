searchbtn = document.getElementById("Search");
search_input = document.getElementById("query");

searchbtn.addEventListener("click", async () => {
    const baseUrl = "superheroes.php";
    const query = search_input.value.trim();
    const url = new URL("superheroes.php", window.location.href);

    url.searchParams.set("query", query);

    const response = await fetch(url.toString());
    const html = await response.text();
    document.getElementById("result").innerHTML = `${html}`;
});
