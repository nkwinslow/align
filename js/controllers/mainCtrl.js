angular.module('align')
  .controller('mainCtrl', function(mainService){
    var main = this;
    main.doctors = mainService.getDoctors();

    main.pages = [

      {
        id: 1,
        link: '#/home',
        name: 'home',
        text: 'Home'
      },
      {
        id: 2,
        link: '#/staff',
        name: 'staff',
        text: 'Staff'
      },
      {
        id: 3,
        link: '#/mission',
        name: 'mission',
        text: 'Mission'
      },
      {
        id: 4,
        link: '#/model',
        name: 'model',
        text: 'Model'
      },
      {
        id: 5,
        link: '#/contact',
        name: 'contact',
        text: 'Contact'
      }

    ]

    main.setActive = function(page) {
      main.selectedIndex = page;
    }

  })
