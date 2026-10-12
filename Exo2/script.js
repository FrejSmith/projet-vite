const affichage = document.getElementById('affichage')
const bouton = document.getElementById('btn-chrono')

let secondes = 0
// null = le chrono ne tourne pas, sinon on y stocke l'identifiant du setInterval
let intervalle = null

function demarrer() {
  intervalle = setInterval(() => {
    secondes++
    affichage.textContent = secondes
  }, 1000)
  bouton.textContent = 'Pause'
}

function mettreEnPause() {
  clearInterval(intervalle)
  intervalle = null
  bouton.textContent = 'Reprendre'
}

bouton.addEventListener('click', () => {
  if (intervalle === null) {
    demarrer()
  } else {
    mettreEnPause()
  }
})
