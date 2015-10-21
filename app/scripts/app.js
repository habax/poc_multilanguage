'use strict';

/**
 * @ngdoc overview
 * @name multilangApp
 * @description
 * # multilangApp
 *
 * Main module of the application.
 */
angular
  .module('multilangApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
      $translateProvider.translations('en', {
        MAIN_TITLE: '\'Allo, \'Allo!',
        MAIN_FOO: 'This is a paragraph.',
        MAIN_HTML5:'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
        MAIN_ANGULAR:'AngularJS is a toolset for building the framework most suited to your application development.',
        MAIN_KARMA:'Spectacular Test Runner for JavaScript.',

        ABOUT_FOO : 'This is the about view.',

        FOOTER_TITLE : 'From Habacuc with Love',

        NAVPAGE_TITLE: "Language",
        NAVPAGE_HOME: 'Home',
        NAVPAGE_ABOUT: 'About',
        NAVPAGE_CONTACT: 'Contact',

        BUTTON_LANG_EN: 'English',
        BUTTON_LANG_DE: 'German',
        BUTTON_LANG_ES: 'Spanish'
      });
      $translateProvider.translations('de', {
        MAIN_TITLE: 'Hallo',
        MAIN_FOO: 'mit Liebe.',
        MAIN_HTML5:'HTML5 Boilerplate ist eine professionelle Frontend-Template für den Aufbau schnell, robust und anpassungsfähig Web-Anwendungen oder Websites.',
        MAIN_ANGULAR:'Angularjs ist ein Toolset für den Bau der am besten zu Ihren Application Development Framework.',
        MAIN_KARMA:'Spektakuläre Test Runner für JavaScript.',

        ABOUT_FOO : 'Dies ist das zu sehen.',

        FOOTER_TITLE : 'Von Habacuc mit Liebe',

        NAVPAGE_TITLE: "Sprache",
        NAVPAGE_HOME: 'Zuhause',
        NAVPAGE_ABOUT: 'Über',
        NAVPAGE_CONTACT: 'Berührung',

        BUTTON_LANG_EN: 'Englisch',
        BUTTON_LANG_DE: 'Deutsch',
        BUTTON_LANG_ES: 'Spanisch'
      });
      $translateProvider.translations('es', {
        MAIN_TITLE: 'Hola Amigo',
        MAIN_FOO: 'Esto es un párrafo.',
        MAIN_HTML5:'Esta es una plantilla profesional HTML5 para desarrollos rapidos en FrontEnd, es robusta y adaptable a toda aplicacion web. ',
        MAIN_ANGULAR:'Angularjs es un conjunto de herramientas para construir el entorno más adecuado para el desarrollo de su aplicación.',
        MAIN_KARMA:'Espectacular gestor de pruebas unitarias para JavaScript.',

        ABOUT_FOO : 'Esta es la vista Acerca de...',

        FOOTER_TITLE : 'De Habacuc con Amor',

        NAVPAGE_TITLE: "Idioma",
        NAVPAGE_HOME: 'Inicio',
        NAVPAGE_ABOUT: 'Acerca',
        NAVPAGE_CONTACT: 'Contacto',

        BUTTON_LANG_EN: 'Ingles',
        BUTTON_LANG_DE: 'Aleman',
        BUTTON_LANG_ES: 'Español'
      });
      $translateProvider.preferredLanguage('en');
  });
  ;
