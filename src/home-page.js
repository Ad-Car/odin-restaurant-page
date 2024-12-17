export const homePage = () => {
		const h1 = document.createElement("h1");
		h1.textContent = "Urban Cuisine";
		const p = document.createElement("p");
		p.textContent = "Five star eats in the centre of town";
		content = document.getElementById("content");
		content.appendChild(h1);
		content.appendChild(p);
}
