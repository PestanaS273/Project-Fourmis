Numéro test:

| ID  | Fonctionnalité  | Étapes à faire | Résultat attendu|
|-----|-----------------|----------------|-----------------|
| 001 F| Modifier addresss  | Cree utilisateur, modifier la deuxieme ligne de l'addresse | Deux fois la meme ligne |
| 002 F | Date Contrat    | creer utilisateur, mettre une date future| Pas d'erreur déclanché |
| 003 F| Delete User  | Creer utilisateur, essayer de l'effacer | Pas d'affichage sur l'utilisateur |
| 004 F| Modification Date  | creer utlisateur, update contract, update date |impossible de modif la date|
| 005 F| Promote User  | Promote un utilisateur | On peut plus le rendre un user normal, il faut reset la database |
| 006 F| Delete Team     | Cree un groupe, rajotuer un utilisateur, essayer d'effacer le groupe | Page Error 500 |
| 007 F| Rajouter deux fois dans un groupe  | Creer un utilisateur, le rajotuer dans un equipe plusieurs fois | Pas de message ou erreur qui indique que l'utilisateur est deja dans le groupe |
| 008 F| Address City  | Au moment de créer un utilisateur, mettre que des numéros | Pas d'erreur déclanché|
| 009 F| Deux Fois meme email  | Si on crée deux user identiques, y a pas d'erreur | apparition deux fois du mail dans les user, on peut pas avoir deux fois le meme email |
| 010 f| Caracteres speciaux nom  | Creer un utilisateur avec des caracteres comme @, ! $... | Pas d'erreur déclanché |
| 011 | Plusieurs managers dans une équipe  | Creer un groupe et rajouter plusieurs managers a l'interieur | Pas d'erreur, on peut avoir plusieurs managers au sein d'une equipe, ce qui est pas normal |
| 012 | Functionnalité  | .... | ...|
| 013 | Functionnalité  | .... | ...|

