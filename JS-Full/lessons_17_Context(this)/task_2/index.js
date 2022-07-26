const callbackPromt = {
  message: 'Write your phone',
  showPrompt(){
    console.log(this);
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },

  showDefrrentPromt(ms){
    console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  }
};

callbackPromt.showDefrrentPromt(2500);