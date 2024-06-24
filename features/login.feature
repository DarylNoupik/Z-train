 @login
 Feature: Connexion
  Scenario: Connexion réussie
    Given Je suis sur l'onglet connexion
    When Je saisis des identifiants valides
    And Je clique sur connexion
    Then Je devrais être redirigé vers HomePage en tant utilisateur connecte apres la connexion

  Scenario: Connexion échouée avec des identifiants invalides
    Given Je suis sur l'onglet connexion
    When Je saisis des identifiants invalides
    And Je clique sur connexion
    Then Un message d'erreur devrait s'afficher sur l'onglet connexion