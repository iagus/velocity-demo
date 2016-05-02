function animateSVGPyramids () {

  var
    objs = [
      // $element ID, tnaslate, duration
      ['i-pyramid-medium',     '-50px',  2800],
      ['pyramid-medium',       '-50px',  2800],
      ['i-pyramid-small-left', '-30px',  1500],
      ['i-pyramid-small-right','-100px', 3800],
      ['red-pyramid-big',      '-30px',  2500],
      ['red-pyramid-medium',   '-30px',  1800],
      ['pyramid-small-1',      '-20px',  1400],
      ['pyramid-small-2',      '-20px',  1800],
      ['small-cube-top',       '-50px',  1200],
      ['small-cube-left',      '-60px',  2500],
      ['small-cube-right',     '-30px',  1800],

      // The squares are animated below, but here their shadow animations
      // are initialized here
      ['squares-small',        '0',      1800],
      ['squares-medium',       '0',      4500]
    ],
    t_intro = 3000;

  for (var i = 0, len = objs.length; i < len; i++) {

    $('#'+objs[i][0])
      // Set Initial position
      .velocity({ translateY: '-150px', opacity: 0 }, { duration: 0 })
      // Set destination
      .velocity({ translateY: '0', opacity: 1 }, { duration: t_intro })
      // Oscillations animation loop
      .velocity({ translateY: objs[i][1] }, { duration: objs[i][2], loop: true });

    // Shadows
    $('#'+objs[i][0]+'-shadow')
        .velocity({ opacity: 0 }, { duration: 0 })
        .velocity({ opacity: 1 }, { duration: t_intro })
        .velocity({ opacity: 0.35 }, { duration: objs[i][2], loop: true });

  }

  // squares anomations
  // starts when drop animations ends ( t_intro )
  setTimeout( function() {
    var
      t_default = 1800;
      squares = [
        ['#XMLID_58_', '-60px', t_default],
        ['#XMLID_57_', '-30px', t_default],
        ['#XMLID_56_', '-10px', t_default],
        ['#XMLID_41_', '-80px',  4500],
        ['#XMLID_40_', '-120px', 3500],
        ['#XMLID_39_', '-40px',  2600]
      ];

    for (var i = 0, len = squares.length; i < len; i++) {
      $( squares[i][0] ).velocity({ translateY: squares[i][1] }, { duration: squares[i][2], loop: true } );
    }
  }, t_intro);

}
