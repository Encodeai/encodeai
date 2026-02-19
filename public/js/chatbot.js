import { courseFlows } from './flowData.js';

export class Chatbot {
  constructor(messagesEl, inputEl, sendBtnEl) {
    this.chatMessages = messagesEl;
    this.userInput = inputEl;
    this.sendBtn = sendBtnEl;
    this.currentCourse = 'mainMenu';
    this.leadType = '';
    this.leadStep = 0; // for multi-step form
    this.leadData = {};
  }

  addMessage(msg, sender = 'bot') {
  // If message is array → show each line separately
  if (Array.isArray(msg)) {
    msg.forEach(line => this.addMessage(line, sender));
    return;
  }

  const div = document.createElement('div');
  div.className = sender === 'bot' ? 'bot-msg' : 'user-msg';

  // IMPORTANT: preserve line breaks
  div.style.whiteSpace = 'pre-line';
  div.textContent = msg;

  this.chatMessages.appendChild(div);
  this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
}



  showOptions(options) {
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.textContent = opt;
      btn.onclick = () => this.handleOption(opt);
      this.chatMessages.appendChild(btn);
    });
  }

  startFlow(courseKey = 'mainMenu') {
    this.chatMessages.innerHTML = '';
    this.currentCourse = courseKey;
    this.leadStep = 0;
    const flow = courseFlows[courseKey];
    this.addMessage(flow.message);
    this.showOptions(flow.options);
  }

  handleOption(option) {
    this.addMessage(option, 'user');
    document.querySelectorAll('.btn-option').forEach(b => b.remove());

    const courseFlow = courseFlows[this.currentCourse];

    if(this.currentCourse === 'mainMenu'){
      if(option === 'Book Demo Class' || option === 'Talk to Counsellor'){
        this.leadType = option;
        this.leadStep = 1;
        this.leadData = {};
        this.askLeadDetails();
      } else if(courseFlows[option]){
        this.startFlow(option);
      } else {
        this.addMessage(`You selected ${option}.`);
      }
      return;
    }

    const subFlow = courseFlow.subFlows && courseFlow.subFlows[option];
    if(subFlow){
      if(subFlow.leadType){
        this.leadType = subFlow.leadType;
        this.leadStep = 1;
        this.leadData = {};
        this.askLeadDetails();
      } else {
        this.addMessage(subFlow.message);
        this.showOptions(subFlow.options);
      }
    } else if(option === 'Back to Menu'){
      this.startFlow(this.currentCourse);
    } else if(option === 'Back to Main Menu'){
      this.startFlow('mainMenu');
    } else {
      this.addMessage('Please select a valid option.');
    }
  }

  askLeadDetails(){
    const steps = ['name', 'mobile', 'city', 'email'];
    const labels = ['Please enter your Name:', 'Enter your Mobile Number:', 'Enter your City:', 'Enter your Email:'];
    
    if(this.leadStep <= 4){
      this.addMessage(labels[this.leadStep - 1]);
      this.userInput.disabled = false;
      this.sendBtn.disabled = false;
    }
  }

//   async submitLead(){
//     const val = this.userInput.value.trim();
//     if(!val) return;

//     const fields = ['name', 'mobile', 'city', 'email'];
//     const currentField = fields[this.leadStep -1];
    
//     // Validate basic
//     if(currentField === 'mobile' && !/^\d{10}$/.test(val)){
//       this.addMessage('Please enter a valid 10-digit mobile number');
//       return;
//     }
//     if(currentField === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){
//       this.addMessage('Please enter a valid email');
//       return;
//     }

//     this.leadData[currentField] = val;
//     this.addMessage(val,'user');
//     this.userInput.value = '';

//     // if(this.leadStep === 4){ // Last step, submit to server
//     //   try{
//     //     const res = await fetch('/api/chatbot/lead',{
//     //       method:'POST',
//     //       headers:{ 'Content-Type': 'application/json' },
//     //       body: JSON.stringify({...this.leadData, type: this.leadType})
//     //     });
//     //     const data = await res.json();
//     //     this.addMessage(data.message);
//     //   }catch(err){
//     //     this.addMessage('Server error. Try again later.');
//     //     console.error(err);
//     //   }
//     //   this.userInput.disabled = true;
//     //   this.sendBtn.disabled = true;
//     //   this.leadStep = 0;
//     //   this.startFlow(this.currentCourse === 'mainMenu'? 'mainMenu': this.currentCourse);
//     // } 
    
//     if(this.leadStep === 4){

//   // 🔒 lock input immediately
//   this.userInput.disabled = true;
//   this.sendBtn.disabled = true;

//   try{
//     const res = await fetch('/api/chatbot/lead',{
//       method:'POST',
//       headers:{ 'Content-Type': 'application/json' },
//       body: JSON.stringify({...this.leadData, type: this.leadType})
//     });
//     const data = await res.json();
//     this.addMessage(data.message);
//   }catch(err){
//     this.addMessage('Server error. Try again later.');

//     // 🔓 unlock only if error
//     this.userInput.disabled = false;
//     this.sendBtn.disabled = false;
//   }

//   this.leadStep = 0;
//   this.startFlow(this.currentCourse === 'mainMenu' ? 'mainMenu' : this.currentCourse);
// }else {
//       this.leadStep++;
//       this.askLeadDetails();
//     }
//   }

async submitLead(){
  const val = this.userInput.value.trim();
  if(!val) return;

  const fields = ['name', 'mobile', 'city', 'email'];
  const currentField = fields[this.leadStep - 1];

  // 🔎 Basic validation
  if(currentField === 'mobile' && !/^\d{10}$/.test(val)){
    this.addMessage('Please enter a valid 10-digit mobile number');
    return;
  }
  if(currentField === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){
    this.addMessage('Please enter a valid email');
    return;
  }

  // ✅ Store value
  this.leadData[currentField] = val;
  this.addMessage(val, 'user');
  this.userInput.value = '';

  // 🧠 LAST STEP (email)
  if(this.leadStep === 4){

    // 🔒 LOCK input immediately
    this.userInput.disabled = true;
    this.sendBtn.disabled = true;

    // ⏳ Show processing message
    this.addMessage("Submitting your details... please wait ⏳");

    try{
      const res = await fetch('/api/chatbot/lead',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...this.leadData,
          type: this.leadType
        })
      });

      const data = await res.json();

      // ✅ SUCCESS message
      this.addMessage("✅ Your response has been added successfully!");
      if(data.message){
        this.addMessage(data.message);
      }

      // ⏱️ Give user time to read success message
      setTimeout(() => {
        this.leadStep = 0;
        this.startFlow('mainMenu');
      }, 2000);

    }catch(err){
      console.error(err);

      // ❌ Error message
      this.addMessage("❌ Server error. Please try again.");

      // 🔓 Allow retry
      this.userInput.disabled = false;
      this.sendBtn.disabled = false;
    }

  } else {
    // ➡️ Go to next question
    this.leadStep++;
    this.askLeadDetails();
  }
}

}
