export const contact = () => {
		const h1 = document.createElement("h1");
		h1.textContent = "Contact Us";
		const p = document.createElement("p");
		p.textContent = "Dolor optio rerum repudiandae amet ipsa Ratione tempora illum nobis aut dolore autem veritatis vero magni? Rem placeat voluptatum porro vero repellendus Neque dicta sequi consequatur dolorum voluptatem! Repellat illo?";
		p.style.setProperty('width', '200px');
		content = document.getElementById("content");
		content.appendChild(h1);
		content.appendChild(p);
}
