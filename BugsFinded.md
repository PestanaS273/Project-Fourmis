Numéro test:

| ID  | Fonctionnalité  | Étapes à faire | Résultat attendu| Bug Present v1.0.8 ? | Bug Present V1.0.9 ? |
|-----|-----------------|----------------|-----------------|-----------------------|---------------------|
| 001 F| Modifier addresss  | Cree utilisateur, modifier la deuxieme ligne de l'addresse | Deux fois la meme ligne | Yes | Yes |
| 002 F | Date Contrat    | creer utilisateur, mettre une date future| Pas d'erreur déclanché | Yes | ... |
| 003 F| Delete User  | Creer utilisateur, essayer de l'effacer | Pas d'affichage sur l'utilisateur | Yes | ... |
| 004 F| Modification Date  | creer utlisateur, update contract, update date |impossible de modif la date| Yes | ... |
| 005 F| Promote User  | Promote un utilisateur | On peut plus le rendre un user normal, il faut reset la database | Yes | ... |
| 006 F| Delete Team     | Cree un groupe, rajotuer un utilisateur, essayer d'effacer le groupe | Page Error 500 | Yes | ... |
| 007 F| Rajouter deux fois dans un groupe  | Creer un utilisateur, le rajotuer dans un equipe plusieurs fois | Pas de message ou erreur qui indique que l'utilisateur est deja dans le groupe | Yes | ... |
| 008 F| Address City  | Au moment de créer un utilisateur, mettre que des numéros | Pas d'erreur déclanché| Yes | ... |
| 009 F| Deux Fois meme email  | Si on crée deux user identiques, y a pas d'erreur | apparition deux fois du mail dans les user, on peut pas avoir deux fois le meme email | Yes | ... |
| 010 F| Caracteres speciaux nom  | Creer un utilisateur avec des caracteres comme @, ! $... | Pas d'erreur déclanché | Yes | ... |
| 011 F| Plusieurs managers dans une équipe  | Creer un groupe et rajouter plusieurs managers a l'interieur | Pas d'erreur, on peut avoir plusieurs managers au sein d'une equipe, ce qui est pas normal | Yes | ... |
| 012 | Un user par team  | Utiliser la foncion "Add user to Team" dans deux teams differentes | Le nom de la fonction est "add", pas "move", le user devrait apparaitre dans les 2 teams | Yes | ... |
| 013 | Functionnalité  | .... | ...|

