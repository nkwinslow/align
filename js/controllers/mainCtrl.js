angular.module('align')
  .controller('mainCtrl', function(mainService){
    var main = this;

    main.doctors = [

      {
        name: 'Matt Noxon',
        title: 'Criminal Mastermind',
        img: './img/matt.jpg'
      },
      {
        name: 'Nick Winslow',
        title: 'Style Ninja',
        img: './img/nick.jpg'
      },
      {
        name: 'Paige Viehweg',
        title: 'Front-End Master',
        img: './img/paige.jpg'
      },
      {
        name: 'Dr. Walker',
        title: 'The Dopest',
        img: './img/walker.jpg'
      },
      {
        name: 'Dr. Clifford',
        title: 'The Dopestest',
        img: './img/clifford.jpg'
      },
      {
        name: 'Consuela',
        title: 'Cooler than everyone ever.',
        img: './img/consuela.jpg'
      }

    ]

    main.yup = 'aww yiss'
    console.log(main.yup)
  })
