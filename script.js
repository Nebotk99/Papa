const missions = [
  `J'ai entendu dire que tu avais la main verte. À l'occasion de la Fête des Pères, je te lance donc un défi !

Je t'offre ces graines prise aleatoirement. Si tu acceptes cette mission, plante-les et fais-les pousser avec soin.

Si tu réussis, je viendrai moi-même cuisiner un repas à partir des ingrédients récoltés. Bien évidemment, tu auras le droit d'inviter ta femme à ce repas si tu le souhaites.

Alors, relèveras-tu le défi ?`
];

const button = document.getElementById("missionBtn");
const text = document.getElementById("missionText");

button.addEventListener("click", () => {
  text.textContent = missions[0];
});
