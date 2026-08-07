export type Card = {
  id: string
  term: string
  definition: string
  era: string
}

export const cards: Card[] = [
  {
    id: 'fondation-1608',
    term: 'Fondation de Québec',
    definition:
      'Le 3 juillet 1608, Samuel de Champlain, mandaté par Pierre Dugua de Mons, fonde le premier établissement français permanent avec 26 engagés.',
    era: 'Fondation',
  },
  {
    id: 'champlain',
    term: 'Samuel de Champlain',
    definition:
      'Explorateur et cartographe français, fondateur de Québec (1608). Il administre la colonie jusqu’à sa mort en 1635, sans jamais porter le titre officiel de gouverneur.',
    era: 'Fondation',
  },
  {
    id: 'dugua-de-mons',
    term: 'Pierre Dugua de Mons',
    definition:
      'Noble français détenteur d’un monopole de traite des fourrures; il mandate Champlain pour établir un comptoir permanent à Québec.',
    era: 'Fondation',
  },
  {
    id: 'habitation',
    term: "L’Abitation de Québec",
    definition:
      'Bâtiment de bois construit par Champlain en 1608 sur l’emplacement actuel de Notre-Dame-des-Victoires; résidence, fort, magasin et lieu d’échange avec les Autochtones.',
    era: 'Fondation',
  },
  {
    id: 'stadacone',
    term: 'Stadaconé',
    definition:
      'Village iroquoien visité par Jacques Cartier en 1535. À l’arrivée de Champlain en 1608, sa population a déjà déserté la vallée du Saint-Laurent.',
    era: 'Fondation',
  },
  {
    id: 'cartier-1535',
    term: 'Jacques Cartier (1534–1542)',
    definition:
      'Pilote de Saint-Malo envoyé par François Ier. En 1535, il remonte le Saint-Laurent jusqu’à Stadaconé et Hochelaga; trois voyages sans trouver la route de la Chine.',
    era: 'Fondation',
  },
  {
    id: 'ludovica',
    term: 'Ludovica',
    definition:
      'Projet de grande ville imaginé par Champlain en 1618 sur les rives de la Saint-Charles (Saint-Roch / Saint-Sauveur), en l’honneur de Louis XIII; il ne verra jamais le jour.',
    era: 'Fondation',
  },
  {
    id: 'fort-saint-louis',
    term: 'Fort Saint-Louis',
    definition:
      'Fort construit par Champlain en 1620 sur le cap, près de l’actuel Château Frontenac; marque le début de la Haute-Ville et domine l’Abitation.',
    era: 'Fondation',
  },
  {
    id: 'chateau-saint-louis',
    term: 'Château Saint-Louis',
    definition:
      'Résidence officielle des gouverneurs pendant plus de 200 ans. Quatre forts et deux châteaux se succèdent entre 1620 et 1834 sur le site du pouvoir exécutif.',
    era: 'Nouvelle-France',
  },
  {
    id: 'cote-montagne',
    term: 'Côte de la Montagne',
    definition:
      'Premier chemin reliant l’Abitation (Basse-Ville) au fort Saint-Louis (Haute-Ville). L’escalier Casse-Cou en est le complément piétonnier célèbre.',
    era: 'Fondation',
  },
  {
    id: 'colonie-comptoir',
    term: 'Colonie-comptoir',
    definition:
      'Type de colonie dont le rôle principal est le commerce des matières premières; peuplée temporairement par peu d’Européens administrant le comptoir.',
    era: 'Nouvelle-France',
  },
  {
    id: 'colonie-peuplement',
    term: 'Colonie de peuplement',
    definition:
      'Territoire où l’on exploite les ressources et où l’on établit des colons de façon permanente. Henri IV souhaite ce modèle pour la Nouvelle-France.',
    era: 'Nouvelle-France',
  },
  {
    id: 'monopole-fourrures',
    term: 'Monopole de la traite',
    definition:
      'Exclusivité accordée à une compagnie pour le commerce des fourrures. En échange, elle doit peupler la colonie, distribuer des terres et soutenir les colons.',
    era: 'Nouvelle-France',
  },
  {
    id: 'cent-associes',
    term: 'Compagnie des Cent-Associés',
    definition:
      'Fondée en 1627 sous Richelieu : monopole des fourrures, domaine de la Floride au pôle, obligation d’installer 4 000 colons catholiques en 15 ans.',
    era: 'Nouvelle-France',
  },
  {
    id: 'kirke-1629',
    term: 'Prise de Québec par les Kirke',
    definition:
      'En 1629, les frères Kirke s’emparent de Québec pour l’Angleterre. Champlain quitte la colonie; la France récupère Québec en 1632.',
    era: 'Nouvelle-France',
  },
  {
    id: 'trois-rivieres',
    term: 'Trois-Rivières (1634)',
    definition:
      'Fort permanent fondé au confluent de la Saint-Maurice et du Saint-Laurent, attribué au sieur de Laviolette; important poste de traite des fourrures.',
    era: 'Nouvelle-France',
  },
  {
    id: 'ville-marie',
    term: 'Ville-Marie (1642)',
    definition:
      'Fondée par Paul de Chomedey de Maisonneuve et Jeanne Mance pour évangéliser les Autochtones; future Montréal, sur une île stratégique avant les rapides de Lachine.',
    era: 'Nouvelle-France',
  },
  {
    id: 'montmagny',
    term: 'Charles Huault de Montmagny',
    definition:
      'Premier gouverneur général officiel de la Nouvelle-France (après la mort de Champlain en 1635); responsable des affaires militaires et diplomatiques.',
    era: 'Nouvelle-France',
  },
  {
    id: 'nouvelle-france',
    term: 'Nouvelle-France',
    definition:
      'Territoire colonial français en Amérique du Nord. De 1608 à 1763, la France y contrôle un vaste espace, dont Québec est la capitale.',
    era: 'Nouvelle-France',
  },
  {
    id: 'capitale-nf',
    term: 'Capitale de la Nouvelle-France',
    definition:
      'En 1663, Louis XIV prend en charge la colonie : gouverneur, intendant et Conseil souverain font de Québec la capitale officielle.',
    era: 'Nouvelle-France',
  },
  {
    id: 'conseil-souverain',
    term: 'Conseil souverain',
    definition:
      'Institution mise en place en 1663 avec le gouverneur et l’intendant; elle participe à l’administration de la colonie devenue royale.',
    era: 'Nouvelle-France',
  },
  {
    id: 'role-intendant',
    term: 'L’intendant',
    definition:
      'Décrit par Louis XIV comme « l’œil et la main du roi », il gère finances, justice et développement économique de la colonie.',
    era: 'Nouvelle-France',
  },
  {
    id: 'jean-talon',
    term: 'Jean Talon',
    definition:
      'Premier intendant (1665–1668 et 1670–1672). Il favorise le peuplement, crée un chantier naval sur la Saint-Charles et la première brasserie de la colonie.',
    era: 'Nouvelle-France',
  },
  {
    id: 'ilot-palais',
    term: 'Îlot des Palais',
    definition:
      'Secteur de la Basse-Ville où se trouvaient la brasserie de Jean Talon, puis le Palais de l’Intendant; cœur administratif et économique.',
    era: 'Nouvelle-France',
  },
  {
    id: 'intendant',
    term: 'Palais de l’Intendant',
    definition:
      'Siège de l’administration civile et économique de la Nouvelle-France, situé en Basse-Ville dans le secteur de l’îlot des Palais.',
    era: 'Nouvelle-France',
  },
  {
    id: 'louis-xiv',
    term: 'Colonie royale (1663)',
    definition:
      'Louis XIV retire la colonie aux compagnies et instaure une administration royale directe : Québec devient capitale coloniale renforcée.',
    era: 'Nouvelle-France',
  },
  {
    id: 'frontenac-gouverneur',
    term: 'Louis de Buade de Frontenac',
    definition:
      'Gouverneur célèbre pour sa défense de Québec en 1690 face à Phips; il aurait répondu de ne parler « que par la bouche de [ses] canons ».',
    era: 'Nouvelle-France',
  },
  {
    id: 'phips-1690',
    term: 'Attaque de Phips (1690)',
    definition:
      'William Phips arrive avec ~30 navires et plus de 2 000 hommes. Frontenac refuse la reddition; la flotte est repoussée vers la Nouvelle-Angleterre.',
    era: 'Nouvelle-France',
  },
  {
    id: 'walker-1711',
    term: 'Expédition Walker (1711)',
    definition:
      'L’amiral Hovenden Walker perd huit navires et ~750 hommes sur les récifs de l’île aux Œufs; sa flotte de 70 navires renonce à attaquer Québec.',
    era: 'Nouvelle-France',
  },
  {
    id: 'notre-dame-victoires',
    term: 'Notre-Dame-des-Victoires',
    definition:
      'Église de Place Royale (1688), sur le site de l’Abitation. Renommée après les victoires contre Phips (1690) et Walker (1711).',
    era: 'Nouvelle-France',
  },
  {
    id: 'fortifications',
    term: 'Fortifications de Québec',
    definition:
      'Dès 1690, une enceinte de 11 redoutes reliées par des palissades. En 1745, Chaussegros de Léry ferme définitivement la ville après la chute de Louisbourg.',
    era: 'Nouvelle-France',
  },
  {
    id: 'chaussegros',
    term: 'Chaussegros de Léry',
    definition:
      'Ingénieur militaire dont les plans de 1745 donnent à Québec une enceinte durable, intégrant des ouvrages antérieurs.',
    era: 'Nouvelle-France',
  },
  {
    id: 'louisbourg',
    term: 'Chute de Louisbourg (1745)',
    definition:
      'La capitulation de Louisbourg (île Royale / Cap-Breton) provoque la panique à Québec et accélère la construction d’une nouvelle enceinte.',
    era: 'Nouvelle-France',
  },
  {
    id: 'cap-diamant',
    term: 'Cap Diamant',
    definition:
      'Promontoire rocheux dominant le Saint-Laurent; site stratégique pour observer le fleuve et défendre Québec dès Champlain.',
    era: 'Nouvelle-France',
  },
  {
    id: 'recollets',
    term: 'Les Récollets (1615)',
    definition:
      'Premiers missionnaires à Québec; leur arrivée marque le début d’une vaste entreprise de conversion des Autochtones.',
    era: 'Nouvelle-France',
  },
  {
    id: 'jesuites-college',
    term: 'Collège des Jésuites',
    definition:
      'Fondé en 1635, dix ans après l’arrivée des Jésuites; établissement d’enseignement majeur de la colonie française.',
    era: 'Nouvelle-France',
  },
  {
    id: 'ursulines',
    term: 'Ursulines de Québec',
    definition:
      'Arrivées en 1639 à l’instigation de Madame de La Peltrie, avec Marie de l’Incarnation; elles ouvrent les premières classes pour filles françaises et amérindiennes en Amérique du Nord.',
    era: 'Nouvelle-France',
  },
  {
    id: 'marie-incarnation',
    term: 'Marie de l’Incarnation',
    definition:
      'Ursuline fondatrice du monastère de Québec (1639); figure centrale de l’éducation des filles et de la vie religieuse coloniale.',
    era: 'Nouvelle-France',
  },
  {
    id: 'hotel-dieu',
    term: 'Hôtel-Dieu de Québec',
    definition:
      'Fondé en 1639 par trois Augustines de Dieppe sous le patronage de la duchesse d’Aiguillon; premier hôpital permanent au nord du Mexique.',
    era: 'Nouvelle-France',
  },
  {
    id: 'hopital-general',
    term: 'Hôpital général de Québec',
    definition:
      'Fondé en 1692 sous l’impulsion de Mgr de Saint-Vallier pour soigner pauvres et personnes âgées de la colonie.',
    era: 'Nouvelle-France',
  },
  {
    id: 'mgr-laval',
    term: 'Mgr François de Laval',
    definition:
      'Arrive en 1659 comme vicaire apostolique; fonde le Séminaire (1663) et le Petit Séminaire (1668); premier évêque de Québec (1674).',
    era: 'Nouvelle-France',
  },
  {
    id: 'seminaire',
    term: 'Séminaire de Québec',
    definition:
      'Fondé en 1663 par Mgr de Laval pour recruter et former le clergé; ancêtre de l’Université Laval.',
    era: 'Nouvelle-France',
  },
  {
    id: 'petit-seminaire',
    term: 'Petit Séminaire',
    definition:
      'Fondé en 1668 par Mgr de Laval pour l’éducation des garçons destinés éventuellement au clergé ou aux études.',
    era: 'Nouvelle-France',
  },
  {
    id: 'notre-dame-paix',
    term: 'Notre-Dame-de-la-Paix',
    definition:
      'Église devenue cathédrale lorsque le diocèse de Québec est créé en 1674; aujourd’hui basilique Notre-Dame-de-Québec.',
    era: 'Nouvelle-France',
  },
  {
    id: 'port-quebec',
    term: 'Port de Québec',
    definition:
      'Grande ville portuaire de la Nouvelle-France; échange fourrures et bois contre produits européens et antillais, via Place Royale.',
    era: 'Nouvelle-France',
  },
  {
    id: 'marie-anne-barbel',
    term: 'Marie-Anne Barbel',
    definition:
      'Marchande de la Basse-Ville qui gère et agrandit l’entreprise de son mari; possède plusieurs maisons et terres avant la Conquête.',
    era: 'Nouvelle-France',
  },
  {
    id: 'population-fin-regime',
    term: 'Québec vers 1755',
    definition:
      'À la fin du Régime français, environ 8 000 habitants vivent dans les faubourgs Saint-Roch et Saint-Jean et les seigneuries voisines.',
    era: 'Nouvelle-France',
  },
  {
    id: 'traite-fourrures',
    term: 'Traite des fourrures',
    definition:
      'Moteur économique de la Nouvelle-France pendant près de 250 ans; elle attire compagnies et colons, mais freine parfois le peuplement.',
    era: 'Nouvelle-France',
  },
  {
    id: 'citadelle',
    term: 'La Citadelle',
    definition:
      'Forteresse du XIXe siècle sur Cap Diamant, encore occupée par le Royal 22e Régiment; prolonge la tradition défensive de Québec.',
    era: 'Vieille Capitale',
  },
  {
    id: 'place-royale',
    term: 'Place Royale',
    definition:
      'Pointe de Québec choisie par Champlain; berceau de la Basse-Ville, lieu de l’Abitation puis de Notre-Dame-des-Victoires.',
    era: 'Vieille Capitale',
  },
  {
    id: 'petit-champlain',
    term: 'Quartier Petit-Champlain',
    definition:
      'Plus vieux quartier commercial d’Amérique du Nord, célèbre pour ses rues pavées et ses maisons coloniales.',
    era: 'Vieille Capitale',
  },
  {
    id: 'chateau-frontenac',
    term: 'Château Frontenac',
    definition:
      'Hôtel emblématique inauguré en 1893, conçu par Bruce Price pour le Canadien Pacifique, près de l’ancien fort Saint-Louis.',
    era: 'Vieille Capitale',
  },
  {
    id: 'terrasse-dufferin',
    term: 'Terrasse Dufferin',
    definition:
      'Promenade panoramique construite en 1838, offrant une vue spectaculaire sur le fleuve Saint-Laurent et le Château Frontenac.',
    era: 'Vieille Capitale',
  },
  {
    id: 'haute-basse-ville',
    term: 'Haute-Ville et Basse-Ville',
    definition:
      'Dès 1620 : Haute-Ville défensive et administrative sur le cap; Basse-Ville commerçante autour de l’Abitation et du port.',
    era: 'Vieille Capitale',
  },
  {
    id: 'porte-saint-louis',
    term: 'Porte Saint-Louis',
    definition:
      'Une des portes principales des fortifications, donnant accès à la Haute-Ville depuis la Grande Allée.',
    era: 'Vieille Capitale',
  },
  {
    id: 'bataille-plaines',
    term: 'Bataille des plaines d’Abraham',
    definition:
      'Affrontement décisif du 13 septembre 1759 où les Britanniques de Wolfe défont les Français de Montcalm.',
    era: 'Conquête',
  },
  {
    id: 'wolfe',
    term: 'Général James Wolfe',
    definition:
      'Commandant britannique mortellement blessé lors de la victoire sur les plaines d’Abraham en 1759.',
    era: 'Conquête',
  },
  {
    id: 'montcalm',
    term: 'Marquis de Montcalm',
    definition:
      'Commandant français tué lors de la bataille des plaines d’Abraham; défendit Québec jusqu’à la défaite de 1759.',
    era: 'Conquête',
  },
  {
    id: 'conquete-1760',
    term: 'Conquête britannique',
    definition:
      'Après la chute de Québec (1759) et de Montréal (1760), puis le traité de Paris (1763), la Nouvelle-France passe à l’Angleterre.',
    era: 'Conquête',
  },
  {
    id: 'acte-quebec',
    term: 'Acte de Québec (1774)',
    definition:
      'Loi britannique qui reconnaît le droit civil français et la religion catholique, apaisant les Canadiens français.',
    era: 'Conquête',
  },
  {
    id: 'siege-1775',
    term: 'Siège de Québec (1775)',
    definition:
      'Tentative américaine de prendre Québec durant la Révolution américaine; la ville résiste sous Guy Carleton.',
    era: 'Conquête',
  },
  {
    id: 'plaines-abraham',
    term: 'Plaines d’Abraham',
    definition:
      'Parc urbain historique nommé d’après Abraham Martin; site de la bataille de 1759 et lieu de mémoire national.',
    era: 'Conquête',
  },
  {
    id: 'unesco',
    term: 'Site du patrimoine mondial',
    definition:
      'Le Vieux-Québec est inscrit au patrimoine mondial de l’UNESCO en 1985 pour ses fortifications et son ensemble urbain.',
    era: 'Vieille Capitale',
  },
  {
    id: 'basilique',
    term: 'Basilique-cathédrale Notre-Dame de Québec',
    definition:
      'Ancienne Notre-Dame-de-la-Paix; première paroisse catholique au nord du Mexique et siège de l’Archidiocèse de Québec.',
    era: 'Vieille Capitale',
  },
  {
    id: 'parlement',
    term: 'Hôtel du Parlement',
    definition:
      'Siège de l’Assemblée nationale du Québec, inauguré en 1886, symbole du pouvoir politique québécois.',
    era: 'Vieille Capitale',
  },
  {
    id: 'grande-allee',
    term: 'Grande Allée',
    definition:
      'Artère historique menant au Parlement, connue pour ses restaurants, hôtels particuliers et vie nocturne.',
    era: 'Vieille Capitale',
  },
  {
    id: 'funiculaire',
    term: 'Funiculaire du Vieux-Québec',
    definition:
      'Mis en service en 1879, il relie la Haute-Ville à la Basse-Ville près de Place Royale.',
    era: 'Vieille Capitale',
  },
  {
    id: 'carnaval',
    term: 'Carnaval de Québec',
    definition:
      'Plus grand carnaval d’hiver au monde, créé en 1955; Bonhomme Carnaval en est la mascotte emblématique.',
    era: 'Vieille Capitale',
  },
  {
    id: 'capitale-nationale',
    term: 'Capitale nationale du Québec',
    definition:
      'Québec est la capitale politique de la province et le siège des institutions parlementaires québécoises.',
    era: 'Vieille Capitale',
  },
  {
    id: 'saint-laurent',
    term: 'Fleuve Saint-Laurent',
    definition:
      'À Québec, le fleuve se rétrécit au pied du Cap Diamant : emplacement idéal pour surveiller la navigation et fonder un comptoir.',
    era: 'Fondation',
  },
  {
    id: 'muraille',
    term: 'Remparts de Québec',
    definition:
      'Seules fortifications urbaines intactes au nord du Mexique; héritage des enceintes coloniales classé patrimoine mondial.',
    era: 'Vieille Capitale',
  },
  {
    id: 'conference-1943',
    term: 'Conférence de Québec (1943)',
    definition:
      'Rencontre stratégique de Churchill et Roosevelt au Château Frontenac durant la Seconde Guerre mondiale.',
    era: 'Vieille Capitale',
  },
  {
    id: 'maison-chevalier',
    term: 'Maison Chevalier',
    definition:
      'Résidence-entrepôt de l’armateur Jean-Baptiste Chevalier (1752) en Basse-Ville. Restaurée dans les années 1950, elle devient le modèle du grand projet Place-Royale.',
    era: 'Vieille Capitale',
  },
  {
    id: 'edifice-price',
    term: 'Édifice Price',
    definition:
      'Unique gratte-ciel Art déco dans l’enceinte du Vieux-Québec (1929, 16 étages). Sa construction provoque les premiers règlements de hauteur du quartier.',
    era: 'Vieille Capitale',
  },
  {
    id: 'holy-trinity',
    term: 'Cathédrale Holy Trinity',
    definition:
      'Première cathédrale anglicane hors des îles britanniques (1800–1804), érigée sur l’ancien site des Récollets pour affirmer l’Église d’Angleterre.',
    era: 'Vieille Capitale',
  },
  {
    id: 'casse-cou',
    term: 'Escalier Casse-Cou',
    definition:
      'Escalier célèbre reliant Haute-Ville et Basse-Ville, près de la côte de la Montagne; l’un des plus anciens liens entre les deux niveaux de Québec.',
    era: 'Vieille Capitale',
  },
  {
    id: 'redoute-dauphine',
    term: 'Redoute Dauphine',
    definition:
      'Ouvrage militaire commencé en 1712, achevé après 1745 comme caserne. Aujourd’hui intégrée au Parc-de-l’Artillerie de Parcs Canada.',
    era: 'Nouvelle-France',
  },
  {
    id: 'morrin-centre',
    term: 'Morrin Centre',
    definition:
      'Ancienne prison (1808–1813) reconvertie en Morrin College, puis centre culturel anglophone; témoin de la présence écossaise à Québec.',
    era: 'Vieille Capitale',
  },
  {
    id: 'rue-saint-pierre',
    term: 'Rue Saint-Pierre',
    definition:
      'Ancienne « Wall Street » de Québec au 19e siècle : banques, assurances et même une bourse, à deux pas du port alors le plus important au Canada.',
    era: 'Vieille Capitale',
  },
  {
    id: 'edifice-douane',
    term: 'Édifice de la Douane',
    definition:
      'Monument portuaire vers 1860, symbole de la prospérité du commerce du bois quand Québec est le premier port au Canada.',
    era: 'Vieille Capitale',
  },
  {
    id: 'universite-laval',
    term: 'Université Laval',
    definition:
      'Fondée en 1852 par le Séminaire de Québec; premier établissement d’enseignement supérieur francophone en Amérique du Nord.',
    era: 'Vieille Capitale',
  },
  {
    id: 'cavalier-moulin',
    term: 'Parc du Cavalier-du-Moulin',
    definition:
      'Seul vestige des premières fortifications françaises du 17e siècle (mont Carmel). Frontenac y aménage un cavalier autour d’un moulin dès 1693.',
    era: 'Nouvelle-France',
  },
  {
    id: 'baillairge',
    term: 'Famille Baillairgé',
    definition:
      'Dynastie d’architectes de Québec (François, Thomas, Charles…) qui marque églises, prison, université et façades du patrimoine urbain.',
    era: 'Vieille Capitale',
  },
  {
    id: 'cote-fabrique',
    term: 'Côte de la Fabrique',
    definition:
      'Une des premières grandes rues de Québec, reliant le cœur religieux et commercial de la Haute-Ville.',
    era: 'Vieille Capitale',
  },
  {
    id: 'rue-saint-jean',
    term: 'Rue Saint-Jean',
    definition:
      'Artère commerçante historique du Vieux-Québec, symbole de commerce et de joie de vivre depuis des siècles.',
    era: 'Vieille Capitale',
  },
  {
    id: 'rue-saint-paul',
    term: 'Rue Saint-Paul',
    definition:
      'Rue de la Basse-Ville connue pour près de deux siècles d’activité commerciale; aujourd’hui rue des antiquaires et galeries.',
    era: 'Vieille Capitale',
  },
  {
    id: 'hotel-ville',
    term: 'Hôtel de ville de Québec',
    definition:
      'Siège de l’administration municipale au cœur du Vieux-Québec, témoin des péripéties d’une ville en devenir.',
    era: 'Vieille Capitale',
  },
  {
    id: 'vieux-port',
    term: 'Vieux-Port et bassin Louise',
    definition:
      'Secteur portuaire modernisé au 19e siècle; le bassin Louise illustre le retour de Québec vers le fleuve et le tourisme.',
    era: 'Vieille Capitale',
  },
  {
    id: 'garneau',
    term: 'Maison François-Xavier-Garneau',
    definition:
      'Résidence du premier grand historien canadien-français, auteur d’une Histoire du Canada au 19e siècle.',
    era: 'Vieille Capitale',
  },
  {
    id: 'terrasse-dugua',
    term: 'Terrasse Pierre Dugua-De Mons',
    definition:
      'Belvédère du Cap Diamant honorant le protecteur de Champlain; offre des vues sur le fleuve et la Citadelle.',
    era: 'Vieille Capitale',
  },
  {
    id: 'place-dyouville',
    term: 'Place D’Youville',
    definition:
      'Carrefour culturel du Vieux-Québec, porte d’entrée vers la Haute-Ville et lieu des spectacles en plein air.',
    era: 'Vieille Capitale',
  },
  {
    id: 'musee-civilisation',
    term: 'Musée de la civilisation',
    definition:
      'Musée situé en Basse-Ville, chef-d’œuvre d’intégration architecturale contemporaine dans le tissu historique.',
    era: 'Vieille Capitale',
  },
  {
    id: 'immigration-port',
    term: 'Immigration au port de Québec',
    definition:
      'Au 19e siècle, le port est une porte d’entrée majeure vers l’Amérique pour des milliers d’immigrants, notamment irlandais.',
    era: 'Vieille Capitale',
  },
  {
    id: 'maison-type',
    term: 'Maison type du Vieux-Québec',
    definition:
      'Architecture urbaine qui marie traditions françaises (pierre, murs coupe-feu) et influences anglaises après la Conquête.',
    era: 'Vieille Capitale',
  },
  {
    id: 'rue-remparts',
    term: 'Rue des Remparts',
    definition:
      'Rue longeant les fortifications; elle fait découvrir les charmes d’un héritage militaire unique en Amérique du Nord.',
    era: 'Vieille Capitale',
  },
  {
    id: 'promenade-gouverneurs',
    term: 'Promenade des Gouverneurs',
    definition:
      'Chemin panoramique reliant la terrasse Dufferin à la Citadelle et aux plaines d’Abraham, le long des falaises.',
    era: 'Vieille Capitale',
  },
  {
    id: 'banque-nationale-fondation',
    term: 'Banque Nationale (1859)',
    definition:
      'Première banque à charte francophone au Canada, fondée à Québec; elle occupe longtemps la rue Saint-Pierre.',
    era: 'Vieille Capitale',
  },
  {
    id: 'marie-rollet',
    term: 'Marie Rollet (1617)',
    definition:
      'Avec Louis Hébert et leurs enfants, première famille à s’établir et cultiver la terre en Nouvelle-France. Elle reste pendant l’occupation des Kirke (1629–1632).',
    era: 'Nouvelle-France',
  },
  {
    id: 'helene-boulle',
    term: 'Hélène Boullé (1620)',
    definition:
      'Épouse de Champlain, première femme de haut rang à Québec. Elle y séjourne de 1620 à 1624, puis retourne en France pour toujours.',
    era: 'Nouvelle-France',
  },
  {
    id: 'marguerite-langlois',
    term: 'Marguerite Langlois Martin',
    definition:
      'Arrivée vers 1620, elle serait la première sage-femme de la Nouvelle-France et la mère des deux premiers enfants français nés dans la colonie.',
    era: 'Nouvelle-France',
  },
  {
    id: 'duchesse-aiguillon',
    term: 'Duchesse d’Aiguillon',
    definition:
      'Bienfaitrice qui patronne l’arrivée en 1639 de trois Augustines de Dieppe fondatrices de l’Hôtel-Dieu de Québec.',
    era: 'Nouvelle-France',
  },
  {
    id: 'la-peltrie',
    term: 'Madame de La Peltrie',
    definition:
      'Marie-Madeleine de Chauvigny de La Peltrie instigue la venue des Ursulines et accompagne Jeanne Mance à la fondation de Ville-Marie.',
    era: 'Nouvelle-France',
  },
  {
    id: 'jeanne-mance',
    term: 'Jeanne Mance (1642)',
    definition:
      'Cofondatrice de Montréal à l’égal de Maisonneuve; elle fonde l’Hôtel-Dieu de Ville-Marie, soutenue par Angélique Faure de Bullion.',
    era: 'Nouvelle-France',
  },
  {
    id: 'manitouabeouich',
    term: 'Marie Manitouabeouich',
    definition:
      'Première Algonquine à épouser un Français (Martin Prévost) en Nouvelle-France, en 1644; le couple aura neuf enfants.',
    era: 'Nouvelle-France',
  },
  {
    id: 'eleonore-grandmaison',
    term: 'Éléonore de Grandmaison',
    definition:
      'Première seigneuresse de la Nouvelle-France (1649) et première femme d’origine européenne à habiter l’île d’Orléans.',
    era: 'Nouvelle-France',
  },
  {
    id: 'helene-desportes',
    term: 'Hélène Desportes',
    definition:
      'Réputée première fille née en Nouvelle-France (~1620); sage-femme inscrite à Notre-Dame de Québec, mère de 15 enfants.',
    era: 'Nouvelle-France',
  },
  {
    id: 'marguerite-bourgeoys',
    term: 'Marguerite Bourgeoys',
    definition:
      'Ouvre en 1658 la première école de Ville-Marie dans une étable et fonde la Congrégation de Notre-Dame, première communauté non cloîtrée.',
    era: 'Nouvelle-France',
  },
  {
    id: 'filles-du-roy',
    term: 'Filles du Roy (1663–1673)',
    definition:
      'Près de 800 jeunes femmes envoyées par le roi pour peupler la colonie. Le terme apparaît chez Marguerite Bourgeoys en 1698.',
    era: 'Nouvelle-France',
  },
  {
    id: 'coutume-paris',
    term: 'Coutume de Paris',
    definition:
      'Droit civil de la Nouvelle-France (1664) : communauté de biens gérée par le mari; la femme mariée est juridiquement inapte, sauf la marchande.',
    era: 'Nouvelle-France',
  },
  {
    id: 'ouvroir-providence',
    term: 'Ouvroir de la Providence',
    definition:
      'Première école ménagère de la Nouvelle-France (1668), ouverte par Marguerite Bourgeoys à la Pointe Saint-Charles pour former les Filles du Roy.',
    era: 'Nouvelle-France',
  },
  {
    id: 'madeleine-vercheres',
    term: 'Madeleine de Verchères',
    definition:
      'En 1692, âgée d’environ 14 ans, elle défend pendant huit jours le fort de Verchères contre des attaques iroquoises, avec deux soldats seulement.',
    era: 'Nouvelle-France',
  },
  {
    id: 'marie-morin',
    term: 'Marie Morin',
    definition:
      'Supérieure de l’Hôtel-Dieu de Montréal; première femme écrivaine née en Nouvelle-France, auteure des Annales de l’Hôtel-Dieu (1697–1725).',
    era: 'Nouvelle-France',
  },
  {
    id: 'anne-bourdon',
    term: 'Anne Bourdon (Sainte-Agnès)',
    definition:
      'Première supérieure des Ursulines née à Québec; après l’incendie de 1686, elle reconstitue de mémoire 50 ans d’archives détruites.',
    era: 'Nouvelle-France',
  },
  {
    id: 'fecondite-nf',
    term: 'Fécondité en Nouvelle-France',
    definition:
      'Entre 1700 et 1760, l’un des taux les plus élevés jamais observés : en moyenne 7,8 enfants par femme.',
    era: 'Nouvelle-France',
  },
  {
    id: 'agathe-saint-pere',
    term: 'Agathe de Saint-Père',
    definition:
      'Ouvre la première manufacture d’étoffes (1705) et commercialise le sucre d’érable appris auprès des Autochtones.',
    era: 'Nouvelle-France',
  },
  {
    id: 'femmes-iroquoiennes',
    term: 'Femmes iroquoiennes',
    definition:
      'Dans les sociétés matrilinéaires iroquoiennes, les Mères de clan nomment les sachems et détiennent l’autorité dans les maisons longues.',
    era: 'Nouvelle-France',
  },
  {
    id: 'youville',
    term: 'Marguerite d’Youville',
    definition:
      'Fonde en 1737 les Sœurs de la Charité (Sœurs Grises), première communauté religieuse créée par une Canadienne; canonisée en 1990.',
    era: 'Nouvelle-France',
  },
  {
    id: 'elisabeth-begon',
    term: 'Élisabeth Bégon',
    definition:
      'Première chroniqueuse sociopolitique de Montréal sous le Régime français; ses Lettres au cher fils (dès 1748) dépeignent la colonie sans complaisance.',
    era: 'Nouvelle-France',
  },
  {
    id: 'place-dyouville-nom',
    term: 'Nom de la place D’Youville',
    definition:
      'La place D’Youville de Québec rappelle Marguerite d’Youville, fondatrice des Sœurs Grises et première sainte née au Canada.',
    era: 'Vieille Capitale',
  },
  {
    id: 'catherine-jeremie',
    term: 'Catherine Jérémie-Aubuchon',
    definition:
      'Sage-femme et herboriste de Montréal; elle envoie en France des plantes annotées, faisant connaître la flore québécoise aux naturalistes.',
    era: 'Nouvelle-France',
  },
  {
    id: 'peche-terre-neuve',
    term: 'Pêche à Terre-Neuve',
    definition:
      'Au XVIe siècle, plus de la moitié des navires à Terre-Neuve sont français. La pêche à la morue (mars–septembre) précède la colonisation.',
    era: 'Fondation',
  },
  {
    id: 'morue-seche',
    term: 'Morue sèche',
    definition:
      'Technique où les pêcheurs débarquent et sèchent le poisson sur les côtes (« chaussées de pierre »), ce qui crée les premiers contacts avec les Autochtones.',
    era: 'Fondation',
  },
  {
    id: 'jean-cabot',
    term: 'Jean Cabot (1497)',
    definition:
      'Navigateur vénitien au service de l’Angleterre; son voyage marque le début officiel des venues régulières européennes vers l’Amérique du Nord.',
    era: 'Fondation',
  },
  {
    id: 'verrazano',
    term: 'Giovanni da Verrazano (1524)',
    definition:
      'Florentin financé par François Ier; il reconnaît les côtes orientales de l’Amérique du Nord sans trouver le passage vers l’Asie.',
    era: 'Fondation',
  },
  {
    id: 'tordesillas',
    term: 'Bulle de Tordesillas',
    definition:
      'En 1533, le pape Clément VII la limite aux terres déjà connues, ouvrant la voie à François Ier et aux explorations françaises comme celles de Cartier.',
    era: 'Fondation',
  },
  {
    id: 'hochelaga',
    term: 'Hochelaga',
    definition:
      'Bourgade iroquoienne visitée par Cartier en 1535 sur le site de Montréal; avec Stadaconé, elle révèle le potentiel d’une colonie de peuplement.',
    era: 'Fondation',
  },
  {
    id: 'tadoussac',
    term: 'Tadoussac (1600)',
    definition:
      'Premier comptoir de traite durable fondé sous Henri IV, à l’embouchure du Saguenay; étape clé avant la fondation de Québec.',
    era: 'Fondation',
  },
  {
    id: 'henri-iv-canada',
    term: 'Henri IV et le Canada',
    definition:
      'Après l’édit de Nantes et le traité de Vervins (1598), l’Espagne reconnaît une « ligne d’amitié » au nord du 40e parallèle, autorisant la France au Canada.',
    era: 'Fondation',
  },
  {
    id: 'richelieu-marine',
    term: 'Richelieu et la marine',
    definition:
      'En 1626, Richelieu devient grand maître de la Navigation et du Commerce; il crée des compagnies à monopole et jette les bases du premier empire colonial français.',
    era: 'Nouvelle-France',
  },
  {
    id: 'naturels-francais',
    term: 'Naturels français',
    definition:
      'Sous la Compagnie des Cent-Associés, les Autochtones baptisés peuvent obtenir le statut de « naturels français », égaux aux sujets du roi.',
    era: 'Nouvelle-France',
  },
  {
    id: 'compagnie-saint-sacrement',
    term: 'Compagnie du Saint-Sacrement',
    definition:
      'Réseau de clercs et de laïcs (fondé en 1627) qui soutient les missions au Canada; Gaston de Renty en est un directeur influent.',
    era: 'Nouvelle-France',
  },
  {
    id: 'dauversiere',
    term: 'Jérôme Le Royer de La Dauversière',
    definition:
      'Laïc formé à La Flèche; avec Jean-Jacques Olier, il lance la Société Notre-Dame de Montréal et le projet de Ville-Marie.',
    era: 'Nouvelle-France',
  },
  {
    id: 'olier',
    term: 'Jean-Jacques Olier',
    definition:
      'Prêtre lié à La Dauversière; en 1642, il célèbre à Notre-Dame de Paris une messe consacrant l’île de Montréal à la Sainte Famille.',
    era: 'Nouvelle-France',
  },
  {
    id: 'societe-notre-dame',
    term: 'Société Notre-Dame de Montréal',
    definition:
      'Société laïque d’évangélisation (~1641, ~35 membres) qui finance Ville-Marie : hôpital, écoles et peuplement sous Maisonneuve et Jeanne Mance.',
    era: 'Nouvelle-France',
  },
  {
    id: 'sillery',
    term: 'Village de Sillery',
    definition:
      'Expérience jésuite (1638–1644) près de Québec pour sédentariser Algonquins et Innus; modèle qui inspire ensuite la fondation de Montréal.',
    era: 'Nouvelle-France',
  },
  {
    id: 'truchements',
    term: 'Truchements',
    definition:
      'Interprètes et intermédiaires entre Français et Autochtones. Champlain envoie de jeunes Français hiverner chez les Algonquins ou Hurons pour apprendre les langues.',
    era: 'Nouvelle-France',
  },
  {
    id: 'relations-jesuites',
    term: 'Relations des Jésuites',
    definition:
      'Récits annuels (notamment du père Paul Le Jeune) qui enthousiasment la France et soutiennent le financement des missions au Canada.',
    era: 'Nouvelle-France',
  },
  {
    id: 'nouvelle-jerusalem',
    term: 'Nouvelle Jérusalem',
    definition:
      'Idéal des missionnaires (père Le Jeune) : bâtir en Nouvelle-France une Église pure, à l’image de l’Église primitive des Actes des Apôtres.',
    era: 'Nouvelle-France',
  },
  {
    id: 'champlain-mort',
    term: 'Mort de Champlain',
    definition:
      'Samuel de Champlain meurt à Québec le 25 décembre 1635, après avoir fondé et administré la colonie depuis 1608.',
    era: 'Fondation',
  },
  {
    id: 'guerre-iroquoise',
    term: 'Alliance franco-autochtone',
    definition:
      'De 1600 à 1700, la survie de la Nouvelle-France repose sur l’alliance avec les Autochtones; les autorités insistent pour « maintenir une bonne union ».',
    era: 'Nouvelle-France',
  },
]
