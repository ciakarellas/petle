function choinka(n) {
  for (var k = 0; k < n; k++) {
    var star =  '';
    for ( var x = 0; x < k*2-1; x++)
      star += '*';
      console.log(star);  
  };
};

choinka(5);