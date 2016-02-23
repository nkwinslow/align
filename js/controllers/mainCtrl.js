angular.module('align')
  .controller('mainCtrl', function(mainService){
    var main = this;

    main.doctors = [
      {
        name: 'Dr. Walker',
        title: 'The Dopest',
        img: './img/walker.jpg'
      },
      {
        name: 'Dr. Clifford',
        title: 'The Dopestest',
        img: './img/clifford.jpg'
      }

    ]

    main.yup = 'aww yiss'
    console.log(main.yup)
  })
