function postuler(poste) {
  const email = "contact@labellapizza.fr";

  const sujet = encodeURIComponent(
    "Candidature - " + poste
  );

  window.location.href =
    `mailto:${email}?subject=${sujet}`;
}


function envoyerMessage(event) {
  event.preventDefault();

  alert(
    "Merci pour votre message ! Nous vous répondrons rapidement."
  );
}
