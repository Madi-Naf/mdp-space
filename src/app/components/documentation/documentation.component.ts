import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tradFrench(){
    document.getElementById('title').innerHTML="Les asteroïdes";
    document.getElementById('para1').innerHTML=" En janvier 1801, Giussepe Piazi a decouvert un objet \
     qui, en premier lieu, lui fit penser qu'il avait découvert une nouvelle comète. Mais, aprés avoir \
     determiner son orbite, il se rendit compte que ce n'était pas une comète mais une petite planète.\
     Piazi l'a nomma Cérès. Puis trois autres petis corps furent découverts au cours des années suivantes\
     : Pallas, Vest et Junon. A la fin du 19e, on en avait découvert plusieurs centaines, et on nomma\
     alors cette famille d 'objets gravitant entre Mars et Jupiter les astéroïdes.";
    document.getElementById('para2').innerHTML="Ils sont des milliards et leur nombre croit proportionnellement\
     à leur petitesse. En effet, lorsque la taille diminue d'un facteur 10, leur nombre augmente d'un facteur 100.\
     Il n'en existe pas deux identiques, ils sont tous différents de par leur taille, leur forme,\
     leur période de rotation et surtout leur composition.";
    document.getElementById('para3').innerHTML="Près de 550 000 ont été répertoriés. Il existe environ 400 000 \
     astéroïdes dont la taille dépasse le kilomètre et on en connait 26 dont la taille est supérieure à 200 km.\
     Le plus grand d'entre eux est Cérès avec un diamètre de 900 km. Malgré leur nombre, ils ont chacun un \
     espace vital de plusieurs millions de kilomètres.";
    document.getElementById('para4').innerHTML="La masse totale de tous les atéroïdes est inférieure à celle de la lune.";
    document.getElementById('para5').innerHTML="Ida et Gaspra ont été photographiés par la sonde Galileo lors de son voyage pour Jupiter.\
     La mission Near-Shoemaker a survolé Mathilde le 27 Juin 1997 puis s'est mise  en orbite autour de eros le 12 février 2000 avant de se\
      poser à sa surface le 12 février 2001.La sonde Hayabusa s'est posée sur l'astéroïde Itokawa le 19 novembre 2005. ";   
    document.getElementById('para6').innerHTML="Leurs formes sont trés irrégulières, elles peuvent être de forme planétaire  \
     ou trés insolites, comme celle de cacahuètes ou patatoïdes.";
    document.getElementById('para7').innerHTML="Certains astéroïdes semblent même être formés de deux blocs réunis par accrétion.";
    document.getElementById('para8').innerHTML="Les astéroïdes sont classés dans plusieurs catégories d'après leur spectre \
     (et donc de leur composition chimique) et de leur albédo:";
    document.getElementById('para9').innerHTML="Les astéroïdes de type C, qui incluent plus de 75% des astéroïdes. \
     Ils sont très sombres (albédo de 0,03), ils sont semblables aux météorites de type chondrite carbonée.";
    document.getElementById('para10').innerHTML="Les astéroïdes de type S, qui incluent 17% des astéroïdes. \
     Ils sont relativement clairs (albédo entre 10 et 22). Ils sont composés de fer, de nickel et de silicates de magnésium.";
    document.getElementById('para11').innerHTML="Il existe aussi une douzaine d'autres types beaucoup plus rares.";
    document.getElementById('para12').innerHTML="Les astéroïdes sont aussi classés par catégories en fonction de leur place dans le système solaire:";
    document.getElementById('para13').innerHTML="La Ceinture principale: localisée entre Mars et Jupiter entre 2 et 4 UA du Soleil. Ils sont divisés en sous-groupes: Hungarias, Floras, Phocaea, Konoris, \
     Eos, Themis, Cybeles et Hildas (lesquels sont nommés d'après l'astéroïde principal dans le groupe). ";
    document.getElementById('para14').innerHTML="Les géocroiseurs: des astéroïdes proches de la terre, divisés en trois groupes:";
    document.getElementById('para15').innerHTML="- Les Atens: dont le demi-grand axe est plus grand que 1,0 UA et l'aphélie plus grand que 0,983 UA.";
    document.getElementById('para16').innerHTML="- Les Appolos: dont le demi grand axe est plus grand que 1,0 UA et la périhélie d'au moins de 1,017 UA.";
    document.getElementById('para17').innerHTML="- Les Amors: dont le périhélie est compris entre 1,017 et 1,3 UA.";
    document.getElementById('para18').innerHTML="Les astéroïdes troyens localisés proches des points de Lagrange de Jupiter (60 degrés  \
     devant et derrière Jupiter sur son orbite). Il existe aussi quelques astéroïdes aux points de Lagrange de la Terre, Mars et de Neptune.";
    document.getElementById('para19').innerHTML="Les Centaures, qui sont localisés dans le système solaire externe comme Chiron, Damoclès et Pholus. ";
    document.getElementById('para20').innerHTML="Deux théories sont avancées quant à leur formation:";
    document.getElementById('para21').innerHTML="La première affirme que les astéroïdes pourraient être les restes d'une planète qui aurait explosé il y a 16 millions d'années.";
    document.getElementById('para22').innerHTML="La deuxième qu'il s'agirait de restes de la nébuleuse primitive qui n'auraient pas pu s'échapper des perturbations gravitationnelles de Jupiter.";
     
  }

  tradEnglish(){
    document.getElementById('title').innerHTML="Asteroids";
    document.getElementById('para1').innerHTML="In January 1801, Giussepe Piazi discovered an object \
     who, in the first place, thinks he has had a new comet. But, after having \
     determine its orbit, he realized that it was not a comet but a small planet \
     Piazi named it Ceres. Then three other small bodies were discovered in the following years \
     : Pallas, Vest et Junon. At the end of the 19th century, several hundred had been discovered, and\
     then this family of objects gravitating between Mars and Jupiter asteroids.";
    document.getElementById('para2').innerHTML="They are billions and their number increases proportionally to\
     their small size. Indeed, when the size decreases by a factor of 10, their number increases by a factor of 100.\
     There are not two identical, they are all different in size, shape,their period of rotation and especially \
     their composition.";
    document.getElementById('para3').innerHTML="Nearly 550,000 have been listed. There are around 400,000\
     asteroids larger than one kilometer and 26 larger than 200 km.\
     The largest of them is Ceres with a diameter of 900 km. Despite their numbers, they each have a\
     living space of several million kilometers.";
    document.getElementById('para4').innerHTML="The total mass of all the ateroids is less than that of the moon.";
    document.getElementById('para5').innerHTML="Ida and Gaspra were photographed by the Galileo spacecraft during\
     his trip to Jupiter. The Near-Shoemaker mission flew over Mathilde on June 27th, 1997 and then went into orbit\
     around eros on February 12th, 2000 before landing on its surface\
     on February 12th, 2001. The Hayabusa probe landed on the Itokawa asreroid on November 19, 2005.";
    document.getElementById('para6').innerHTML="Their shapes are very irregular, they can be planetary \
     or very unusual, like that of peanuts or potatoides.";
    document.getElementById('para7').innerHTML="Some asteroids even seem to be formed of two blocks joined together by accretion.";
    document.getElementById('para8').innerHTML="Asteroids are classified in several categories according to their spectrum\
     (and therefore their chemical composition) and their albedo:";
    document.getElementById('para9').innerHTML="Type C asteroids, which include more than 75% of the asteroids.\
     They are very dark (albedo of 0.03), they are similar to meteorites of the carbonaceous chondrite type.";
    document.getElementById('para10').innerHTML="Type S asteroids, which include 17% of the asteroids. \
     They are relatively clear (albedo between 10 and 22). They are composed of iron, nickel and magnesium silicates.";
    document.getElementById('para11').innerHTML="There are also a dozen other types that are much rarer.";
    document.getElementById('para12').innerHTML="Asteroids are also categorized according to their place in the solar system:";
    document.getElementById('para13').innerHTML="The Main Belt: Located between Mars and Jupiter between 2 and 4 AU of the Sun. They are divided into subgroups: Hungarias, Floras, Phocaea, Konoris, \
     Eos, Themis, Cybeles and Hildas (which are named after the main asteroid in the group).";
    document.getElementById('para14').innerHTML="NEOs: asteroids close to the earth, divided into three groups:";
    document.getElementById('para15').innerHTML="- The Atens: whose half-major axis is greater than 1.0 AU and the aphelion greater than 0.983 AU.";
    document.getElementById('para16').innerHTML="- The Appolos: whose half major axis is greater than 1.0 AU and the perihelion of at least 1.017 AU.";
    document.getElementById('para17').innerHTML="- The Amors: whose perihelion is between 1.017 and 1.3 AU.";
    document.getElementById('para18').innerHTML="Trojan asteroids located near Lagrange points of Jupiter (60 degrees\
     in front of and behind Jupiter on its orbit). There are also some asteroids at the Lagrange points of the Earth, Mars and Neptune.";
    document.getElementById('para19').innerHTML="The Centaurs, which are located in the outer solar system like Chiron, Damocles and Pholus.";
    document.getElementById('para20').innerHTML="Two theories are advanced as to their formation:";
    document.getElementById('para21').innerHTML="The first states that asteroids could be the remains of a planet that exploded 16 million years ago.";
    document.getElementById('para22').innerHTML="The second would be remnants of the primitive nebula that could not have escaped the gravitational disturbances of Jupiter.";
  }


}
