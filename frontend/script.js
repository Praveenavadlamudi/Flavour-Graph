async function fetchRecipes() {
    const input = document.getElementById("ingredients").value;
    const ingredients = input.split(",").map(i => i.trim()).filter(i => i);

    if (ingredients.length === 0) {
        alert("Please enter at least one ingredient.");
        return;
    }

    try {
        const res = await fetch("http://127.0.0.1:8000/api/suggest", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ ingredients })  // send as object
        });

        const data = await res.json();
        displayRecipes(data.results || []); // backend returns results array
    } catch (err) {
        console.error(err);
        alert("Error fetching recipes. Make sure backend is running.");
    }
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // clear previous results

    recipes.forEach(r => {
        const div = document.createElement("div");
        div.className = "recipe";
        div.innerHTML = `
            <h2>${r.name} (${Math.round((r.match_ratio || 0) * 100)}% match)</h2>
            <p><b>Have:</b> ${(r.ingredients || []).filter(i => !r.missing_list.includes(i)).join(", ") || "None"}</p>
            <p><b>Missing:</b> ${(r.missing_list || []).join(", ") || "None"}</p>
            ${r.substitution_hints ? `<p><b>Substitutions:</b> ${Object.entries(r.substitution_hints)
                .map(([k,v]) => `${k} → ${v.candidates.join("/")}`).join(", ")}</p>` : ""}
        `;
        resultsDiv.appendChild(div);
    });
}
