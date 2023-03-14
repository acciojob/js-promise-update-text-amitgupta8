function delayedGreeting() {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve("Hello, world!");
          }, 1000);
        });
      }

      delayedGreeting().then(function(greeting) {
        var output = document.getElementById("output");
        output.textContent = greeting;
      });