//Polyfill example
/*if (browserSupportsAllFeatures()) {
    main();
  } else {
    loadScript('polyfills.js', main);
  }
  
  function main(err) {
    // actual app code goes in here
  }
  
  function loadScript(src, done) {
    const js = document.createElement('script');
    js.src = src;
    js.onload = function() {
      done();
    };
    js.onerror = function() {
      done(new Error('Failed to load script ' + src));
    };
    document.head.appendChild(js);
  }*/

