const formulaire = document.getElementById('formulaire')
const champ = document.getElementById('champ')
const erreur = document.getElementById('erreur')
const liste = document.getElementById('liste')
const resume = document.getElementById('resume')

// Tous les tags ajoutés sont stockés ici
const tags = []

// Redessine la liste de pastilles et le texte du bas à partir du tableau
function afficher() {
  liste.innerHTML = ''

  tags.forEach((tag) => {
    const pastille = document.createElement('li')
    pastille.className = 'pastille'
    pastille.textContent = tag
    liste.appendChild(pastille)
  })

  resume.textContent = 'Tags : ' + tags.join(', ')
}

formulaire.addEventListener('submit', (event) => {
  // On empêche le rechargement de la page
  event.preventDefault()

  const mot = champ.value.trim()

  if (mot === '') {
    erreur.textContent = 'Veuillez saisir un mot.'
    return
  }

  // "chaussette" et "Chaussette" sont considérés comme le même tag
  const existeDeja = tags.some((tag) => tag.toLowerCase() === mot.toLowerCase())

  if (existeDeja) {
    erreur.textContent = `Le tag "${mot}" existe déjà !`
    return
  }

  tags.push(mot)
  erreur.textContent = ''
  champ.value = ''
  champ.focus()
  afficher()
})

// Dès que l'utilisateur retape quelque chose, on efface l'ancienne erreur
champ.addEventListener('input', () => {
  erreur.textContent = ''
})
