# ToastNotification
Recevoir des notifications (error, success, info etc .) coté client.
# Dépendance
- animate css : https://daneden.github.io/animate.css/
- jquery : https://code.jquery.com
- font awesome : https://use.fontawesome.com/releases/v5.7.0/css/all.css .

# Utilisation
- inclure les fichiers toastNotif.css et toastNotif.js dans le fichier html
- Initialiez ensuite les parametres des alertes selon vos préférences (se qui est facultatif) en appelant la fonction init.
  Alert.init({})
  - isRing: true  //Par defaut a false
  - song: "" //Prends le chemin relatif de la sonnerie de notification
  - time: 5000 // Defini la durée de la notification
  - transitionShow: "fadeInDown" // Par defaut a fadeInDown mais possibilité d'utiliser tous les effets de animateCss
  - transitionHide: "fadeOutUp" // Par defaut a fadeOutUp mais possibilité d'utiliser tous les effets de animateCss
  - typeSelected : "normal"  // Par defaut a normal possibilité d'inverser les couleurs en mettant a la place **inverted**
  - position: 'bottom-right' // Par defaut a bottom-right possibilité de mettre la notification a top-left ou top-right, bottom-left ou bottom right

- Faire appelle a la notification avec la fonction Alert.toast({})
  il  prend en parametre
  - text : "Le texte de la notification"
  - type: "error, info, success ou warning"
  - link: "un lien si necessaire"

Enjoy!
