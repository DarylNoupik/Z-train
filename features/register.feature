Feature: Inscription
  Scenario: Inscription réussie
    Given Je suis sur l'onglet "inscription"
    When Je saisis des informations valides
    And Je clique sur inscription
    Then Je devrais être redirigé vers HomePage en tant utilisateur connecte

  Scenario: Inscription échouée avec des informations invalides
    Given Je suis sur l'onglet "inscription"
    When Je saisis des informations invalides
    And Je clique sur inscription
    Then Un message d'erreur devrait s'afficher sur la page
