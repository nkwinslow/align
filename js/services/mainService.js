angular.module('align')
  .service('mainService', function(){

    var doctors = [

      {
        name: 'Dr. Walker',
        shortName: 'walker',
        title: 'The Dopest',
        img: './img/walker.jpg',
        description: 'One of the best dang darn doctors you ever did see. Young, talented, detail-oriented, and on the rise. This doctor will fix you up, align your spine, and make you cry. Ok he wont do that last part.'
      },
      {
        name: 'Dr. Clifford',
        shortName: 'clifford',
        title: 'The Dopestest',
        img: './img/clifford.jpg',
        description: 'The dopest of the dope. A giant of a man. A master of the trade. Sometimes he needs a little bit of his own help/medicine because he likes to crash his bike a lot.'
      },
      {
        name: 'Matt Noxon',
        shortName: 'noxon',
        title: 'Criminal Mastermind',
        img: './img/matt.jpg',
        description: 'He does the things. He does the things with the stuff. He makes the things with the stuff happen when the things and the stuff need to happen. Also has the body-health of a 40 year old man.'
      }

    ]

    this.getDoctors = function () {
      return doctors;
    }

    this.getBio = function (name) {
      for (var i of doctors) {
        if (i.shortName === name) {
          return i;
        }
      }
      return null;
    }

  })
