function updateText() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Hello, world!");
                }, 1000);
            })
            .then(message => {
                const outputDiv = document.getElementById("output");
                outputDiv.innerText = message;
            });
        }

        // Example usage:
        updateText();