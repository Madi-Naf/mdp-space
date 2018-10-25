import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tradFrench(){
    document.getElementById('para1').innerHTML="A propos de MDP.Space";
    document.getElementById('para2').innerHTML="MDP.Space, \"M\", \"D\" and \"P\" comme Madi, Damien et Patrice.";
    document.getElementById('para3a').innerHTML="Nous sommes trois élèves de la Wild Code School ";
    document.getElementById('para3b').innerHTML="et en ce mois d'octobre 2018, pour notre apprentissage,\
     nos formateurs nous ont confiés la mission de créer une application qui traite du sujet de l'espace.";
    document.getElementById('para4').innerHTML="Pour cela, nous avions deux contraintes: ";
    document.getElementById('para5').innerHTML="Notre application doit être développée en JavaScript, avec le framework Angular.";
    document.getElementById('para6a').innerHTML="Notre application doit utiliser des ressources de la ";
    document.getElementById('para6b').innerHTML="NASA";
    document.getElementById('para6c').innerHTML=", via leur API (Application Programming Interface).";
    document.getElementById('para7').innerHTML="Après avoir étudier l'API de la NASA, nous avons choisi de traiter le sujet des astéroïdes.";
    document.getElementById('para8').innerHTML="Bonne visite à vous! ";
    
    }  
  

  tradEnglish(){
    document.getElementById('para1').innerHTML="About MDP.Space";
    document.getElementById('para2').innerHTML="MDP.Space, \"M\", \"D\" and \"P\" like Madi, Damien and Patrice.";
    document.getElementById('para3a').innerHTML="We are three students of the Wild Code School";
    document.getElementById('para3b').innerHTML="and in this month of October 2018, for our learning,\
     our teachers entrusted us with the mission of creating an application that deals with the subject of space. ";
    document.getElementById('para4').innerHTML="For that, we had two constraints:";
    document.getElementById('para5').innerHTML="Our application must be developed in JavaScript, with the Angular framework.";
    document.getElementById('para6a').innerHTML="Notre application doit utiliser les ressources de la";
    document.getElementById('para6b').innerHTML="NASA";
    document.getElementById('para6c').innerHTML=", via their API (Application Programming Interface).";
    document.getElementById('para7').innerHTML="After studying the NASA API, we chose to treat the subject of asteroids.";
    document.getElementById('para8').innerHTML="Have a nice visit!";
  
  }

}
