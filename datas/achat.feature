Feature: Achat de produit
  Scenario: Ajouter un produit au panier
    Given Je suis sur la page du produit
    When Je clique sur "Ajouter au panier"
    Then Le produit devrait être ajouté au panier

  Scenario: Finaliser un achat
    Given J'ai des produits dans mon panier
    When Je clique sur "Passer à la caisse"
    And Je saisis les informations de paiement
    And Je clique sur "Payer"
    Then Un message de confirmation d'achat devrait s'afficher