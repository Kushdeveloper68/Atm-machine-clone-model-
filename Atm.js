const divOne = document.getElementById('div-one')
const divTwo = document.getElementById('div-two')
const divThree = document.getElementById('div-three')
const divFour = document.getElementById('div-four')
const divFive = document.getElementById('div-five')
document.getElementById('create-btn').addEventListener("click",() => {
  let e = document.getElementById('phone-number');
  let f = document.getElementById('new-pincode');
  // new pincode !!
  window.phone = e.value
  window.pincode = f.value;
  if (e.value == '' || f.value == '') {
    alert('please enter you phone number and  new pincode' );
  } else {
    divOne.style.display = 'none';
    divTwo.style.display = 'block';
  }
  })
  
  document.getElementById('deposit-btn').addEventListener('click' , () => {
      divTwo.style.display = 'none';
      divThree.style.display = 'block';
    })
    
  document.getElementById('widraw-btn').addEventListener('click' ,() => {
      divTwo.style.display = 'none';
      divFour.style.display = 'block';
  })
  
  document.getElementById('blance-btn').addEventListener('click', () => {
      divTwo.style.display = 'none';
      divFive.style.display = 'block';
  })
   window.rupees = 0;
  document.getElementById('deposit-rup-btn').addEventListener("click", () => {
    let a = document.getElementById('deposit-account-number');
    let b = document.getElementById('deposit-pincode');
    if(a.value == window.phone || b.value == window.pincode) {
      let amount = document.getElementById('deposit-rup-input');
      let p = document.getElementById('deposit-rup-para');
       rupees += Number(amount.value);
      p.innerText = `your amount ₹${amount.value} is deposited..`;
    } else {
      alert('please enter right number and pin');
    }
    })
    
    document.getElementById('widraw-rup-btn').addEventListener('click', () => {
      let q = document.getElementById('widraw-account-number');
      let f = document.getElementById('widraw-pincode');
      if(q.value != window.phone || f.value != window.pincode) {
        alert('please enter number and pin properly');
      } else if (q.value == window.phone || f.value == window.pincode) {
      let o = document.getElementById('rup-widraw');
      let r = document.getElementById('widraw-para');
       rupees -= o.value;
      r.innerText = `please take you ${o.value}rupees form bottom `;
      }
    })
    
    document.getElementById('blance-rup-btn').addEventListener('click' , () => {
      let u = document.getElementById('blance-account-number');
      let v = document.getElementById('blance-pincode')
      if (u.value == window.phone || v.value == window.pincode) {
     document.getElementById('blance-show-para').innerText = `your blance is ${window.rupees} `
      } else {
        alert('please enter right pin and number');
      }
    })
    // reverse button 
    document.getElementById('reverse-div-two').addEventListener("click",() => {
      divTwo.style.display = 'none';
      divOne.style.display = 'block'
      })
      
      document.getElementById('reverse-div-three').addEventListener('click', () => {
        divThree.style.display = 'none';
        divTwo.style.display = 'block';
      })
      document.getElementById('reverse-div-four').addEventListener('click' , () => {
        divFour.style.display = 'none'
        divTwo.style.display = 'block';
      })
      document.getElementById('reverse-div-five').addEventListener("click", () => {
        divFive.style.display = 'none';
        divTwo.style.display = 'block';
        })