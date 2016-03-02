angular.module('align')
  .controller('mainCtrl', function(mainService){
    var main = this;

    main.doctors = mainService.getDoctors();

    main.pages = [

      {
        id: 1,
        link: '#/home',
        text: 'Home'
      },
      {
        id: 2,
        link: '#/staff',
        text: 'Staff'
      },
      {
        id: 3,
        link: '#/mission',
        text: 'Mission'
      },
      {
        id: 4,
        link: '#/model',
        text: 'Model'
      },
      {
        id: 5,
        link: '#/contact',
        text: 'Contact'
      }

    ]

    main.selectedIndex = 0;

    main.setActive = function(page) {
      main.selectedIndex = page;
    }

  })
