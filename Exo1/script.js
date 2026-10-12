const bouton = document.getElementById('btn-like')
const message = document.getElementById('message')

// On garde l'identifiant du minuteur pour pouvoir l'annuler au clic suivant
let minuteur = null

bouton.addEventListener('click', () => {
  message.classList.add('visible')

  // Si un compte à rebours tourne déjà, on l'annule : il repart de zéro à chaque clic
  clearTimeout(minuteur)

  // Le message disparaît 3 secondes après le DERNIER clic
  minuteur = setTimeout(() => {
    message.classList.remove('visible')
  }, 3000)
})
