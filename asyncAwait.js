const displayMessage = (message) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (message == "Message2")
            return reject("Catch Block")
         resolve(message);
      }, 1000);
   });
};

// promises with callback hell.
displayMessage("hello").then((result) => {
   console.log(result);
   displayMessage("GoodBye")
      .then(result => {
         console.log(result)
         displayMessage("What's Up")
            .then(result => console.log(result))
            .catch(error => console.error(error))
      });
}
);

const myFunc = async () => {
   try {
      const result1 = await displayMessage("Message1");
      console.log(result1);
      const result2 = await displayMessage("Message2");
      console.log(result2);
      const result3 = await displayMessage("Message3");
      console.log(result3);
   } catch (error) {
      console.error(error)
   }
};

myFunc();
