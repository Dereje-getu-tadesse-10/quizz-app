let questions = [

    {
        question: 'Quelle fonction retourne le nombre de secondes écoulées depuis le 1er janvier 1970 ?',
        answers: ['Time', 'Timestamp', 'Mktime', 'Microtime'],
        correctAnswer: 'Time'
    },
    {
        question: 'Quand l\'événement "load" se déclenche-t-il pour une page ?',
        answers: ['Dès que le navigateur charge la page', 'Quand le code HTML a fini d\'être chargé', 'Quand l\'arbre DOM a été construit.', ' Quand l\'arbre DOM a été construit et toutes les ressources chargées (images, ...).'],
        correctAnser: 'Quand l\'arbre DOM a été construit et toutes les ressources chargées (images, ...).'
    },
    {
        question: 'Quelle fonction permet d\'envoyer des en-têtes HTTP au navigateur avant le contenu de la page ?',
        answers: ['parse_url()', 'http_post()', 'header()', 'head()'],
        correctAnswer: 'header()'
    },
    {
        question: 'Lequel de ces codes n’affichera pas 3 ?',
        answers: ['alert(Math.max(-4, 3))', 'let i = 3; alert(i++);', 'alert(parseInt("3"));', 'alert(Math.floor(3.1));'],
        correctAnswer: 'alert(Math.floor(2.9));'
    },
    {
        question: 'Quelle fonction permet de récupérer le contenu d\'un fichier ?',
        answers: ['file_get_contents()', 'file_get()', 'file_get_contents()', 'file_get_contents()'],
        correctAnswer: 'file_get_contents()'
    },
    {
        question: 'Pour des raisons d\'accessibilité, le W3C a supprimé la balise table en HTML.',
        answers: ['C\'est parfaitement Vrai', 'C\'est complètement faux', 'Uniquement le vendredi', 'Le kiwi mange des pommes'],
        correctAnswer: 'C\'est complètement faux'
    },
    {
        question: 'La boucle for ($i=0 ; $i<=3 ; $i++ ) { echo $i; }...',
        anwers: ['Sera executé 4 fois', 'Sera executé 3 fois', 'Sera executé 2 fois', 'Sera executé 1 fois'],
    }

]

export default questions;