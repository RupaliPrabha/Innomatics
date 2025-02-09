function atmWithdrawal(event) {
  event.preventDefault();
  let pin = parseInt(document.getElementById("pin").value);
  let balance = parseInt(document.getElementById("balance").value);

  let enterPin = parseInt(document.getElementById("Enterpin").value);
  let amount = parseInt(document.getElementById("amount").value);
  let result = document.getElementById("withdraw");

  if (enterPin !== pin && amount > balance && amount % 100 !== 0) {
    result.innerHTML =
      "❌ Incorrect PIN or insufficient balance or it is not a  multiple of 100 ";
  } else if (enterPin !== pin) {
    result.innerHTML = "❌ Incorrect PIN ";
  } else if (amount > balance) {
    result.innerHTML = "❌insufficient balance";
  } else if (amount % 100 !== 0) {
    result.innerHTML = "❌ must be a multiple of 100.";
  } else {
    result.innerText = "✅ Withdrawal successful!";
  }
  console.log(result);
}

//ques2---

function calculateFinalAmount(event) {
  event.preventDefault();

  let orderAmount = parseFloat(document.getElementById("orders").value);
  let discount;
  let shippingCharge;

  if (orderAmount > 1000) {
    discount = 0.2;
  } else if (orderAmount >= 500) {
    discount = 0.1;
  } else {
    discount = 0;
  }

  if (orderAmount >= 50) {
    shippingCharge = 0;
  } else {
    shippingCharge = 10;
  }

  let discountAmount = orderAmount * discount;
  let finalAmount = orderAmount - discountAmount + shippingCharge;

  document.getElementById(
    "discountAmount"
  ).textContent = `$${discountAmount.toFixed(2)}`;
  document.getElementById(
    "shippingCharge"
  ).textContent = `$${shippingCharge.toFixed(2)}`;
  document.getElementById("finalAmount").textContent = `$${finalAmount.toFixed(
    2
  )}`;
}

//ques3..

function calculateGrade(event) {
  event.preventDefault();
  let totalMarks = parseFloat(document.getElementById("marks").value);
  let totalAttendance = parseFloat(document.getElementById("attendance").value);
  let grade;

  if (totalAttendance > 0.9) {
    totalMarks += 5;
  }

  if (totalMarks >= 90) {
    grade = "A";
  } else if (totalMarks >= 80) {
    grade = "B";
  } else if (totalMarks >= 70) {
    grade = "C";
  } else if (totalMarks >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.getElementById("grade").innerHTML = `grade:${grade}`;

  console.log("grade", grade);
}

//question4

function trafficLightControl() {
  let density = document.getElementById("density").value;

  document.getElementById("60").checked = false;
  document.getElementById("40").checked = false;
  document.getElementById("20").checked = false;

  if (density === "Heavy Traffic") {
    document.getElementById("60").checked = true;
  } else if (density === "Moderate Traffic") {
    document.getElementById("40").checked = true;
  } else if (density === "Light Traffic") {
    document.getElementById("20").checked = true;
  } else {
    console.log("no option selected");
  }
}

//ques 5

function calculateTicketPrice(event) {
  event.preventDefault();

  let standardPrice = 12;
  let discount = 0;
  let extraDiscount = 0;
  let yourAge = parseInt(document.getElementById("ages").value);
  let timing = document.getElementById("time").value;

  if (yourAge >= 60) {
    discount = 0.3;
  } else if (yourAge <= 12) {
    discount = 0.4;
  }

  let hour = parseInt(timing.split(":")[0]);


  if (hour < 17) {
    extraDiscount = 0.2;
  } else {
    extraDiscount = 0;
  }
  let finalPrice =
    standardPrice - standardPrice * discount - standardPrice * extraDiscount;
  console.log(finalPrice, "Final Price");
  document.getElementById("final").textContent = finalPrice.toFixed(2);
}

//ques6---->

function isEligibleForJob(event) {
  event.preventDefault();

  let age = document.getElementById("age").value;
  let experience = document.getElementById("experience").value;
  let qualification = document.getElementById("study").value;
  let eligible = document.getElementById("eligible");

  if (
    age >= 21 &&
    age <= 55 &&
    experience >= 2 &&
    qualification === "Bachelor's Degree"
  ) {
    eligible.textContent = "You Are Eleigible for this job !";
  } else {
    eligible.textContent = "You Are  not Eleigible for this job !";
  }

  console.log(eligible.textContent);
}

// ques7--->

function applyCoupon(event) {
  event.preventDefault();

  let orderAmount = parseInt(document.getElementById("totalOrder").value);
  let couponCode = document.getElementById("coupons").value;
  // let discount ;
  let shippingCharge;
  let totalAmount = document.getElementById("cart");

  if (orderAmount >= 500 && couponCode === "DISCOUNT10") {
    orderAmount = orderAmount - orderAmount * 0.1;
  } else if (orderAmount >= 200 && couponCode === "FREESHIP") {
    shippingCharge = 0;
    orderAmount = orderAmount - shippingCharge;
  } else {
    alert("Coupon is not Applicable   on this amount");
  }

  totalAmount.textContent = `Total Amount:$ ${orderAmount.toFixed(2)}`;

  console.log(totalAmount);
}

//question8--->

function choosePlan(event) {
  event.preventDefault();
  let planType = document.getElementById("plan").value;
  let wantsTrainer = document.getElementById("trainer");
  let wantsDietPlan = document.getElementById("diet");
  let finalPlan = document.getElementById("finalPlan");
  let yourPlan;

  if (
    planType === "VIP" &&
    wantsTrainer.checked === true &&
    wantsDietPlan.checked === true
  ) {
    yourPlan =
      " Best plan for you is :'VIP ($80/month) → Gym + Trainer + Diet Plan' ";
  } else if (
    planType === "VIP" &&
    wantsTrainer.checked === true &&
    wantsDietPlan.checked === false
  ) {
    yourPlan =
      " Best plan for you is :'Premium ($50/month) → Gym + Personal Trainer' ";
  } else if (
    planType === "VIP" &&
    wantsTrainer.checked === false &&
    wantsDietPlan.checked === true
  ) {
    yourPlan =
      " Best plan for you is :'VIP ($80/month) → Gym + Trainer + Diet Plan' ";
  } else if (
    planType === "VIP" &&
    wantsTrainer.checked === false &&
    wantsDietPlan.checked === false
  ) {
    yourPlan =
      " Best plan for you is :'VIP ($80/month) → Gym + Trainer + Diet Plan' ";
  } else if (
    planType === "Premium" &&
    wantsTrainer.checked === true &&
    wantsDietPlan.checked === false
  ) {
    yourPlan =
      " Best plan for you is :'Premium ($50/month) → Gym + Personal Trainer'";
  } else if (
    planType === "Premium" &&
    wantsTrainer.checked === false &&
    wantsDietPlan.checked === true
  ) {
    yourPlan =
      " Best plan for you is :VIP ($80/month) → Gym + Trainer + Diet Plan";
  } else if (
    planType === "Premium" &&
    wantsTrainer.checked === true &&
    wantsDietPlan.checked === true
  ) {
    yourPlan =
      " Best plan for you is :VIP ($80/month) → Gym + Trainer + Diet Plan";
  } else if (
    planType === "Premium" &&
    wantsTrainer.checked === false &&
    wantsDietPlan.checked === false
  ) {
    yourPlan =
      " Best plan for you is :'Premium ($50/month) → Gym + Personal Trainer'";
  } else if (
    planType === "Basic" &&
    wantsTrainer.checked === false &&
    wantsDietPlan.checked === false
  ) {
    yourPlan = " Best plan for you is :'Basic ($20/month) → Only gym access'";
  } else if (
    planType === "Basic" &&
    wantsTrainer.checked === true &&
    wantsDietPlan.checked === false
  ) {
    yourPlan =
      " Best plan for you is  Premium ($50/month) → Gym + Personal Trainer";
  } else if (
    planType === "Basic" &&
    wantsTrainer.checked === false &&
    wantsDietPlan.checked === true
  ) {
    alert("Please choose a valid plan");
  } else if (
    planType === "Basic" &&
    wantsTrainer.checked === true &&
    wantsDietPlan.checked === true
  ) {
    yourPlan =
      " Best plan for you is :'VIP ($80/month) → Gym + Trainer + Diet Plan'";
  } else {
    alert("Please choose a valid plan");
  }
  finalPlan.textContent = yourPlan;

  console.log("final plan for you", finalPlan);
}

//ques09-->

function calculateElectricityBill(event){
    event.preventDefault();
    let charge = 0;
    let extraCharge = 0
    let time = document.getElementById("Time").value;
    let units = parseInt(document.getElementById("unit").value);

    let hour = parseInt(time.split(":")[0]); 

    if (units <= 100) {
        charge = units * 5;
    } else if (units <= 300) {
        charge = (100 * 5) + ((units - 100) * 4);
    } else {
        charge = (100 * 5) + (200 * 4) + ((units - 300) * 3);
    }
    
    let isPeakHours = (hour >= 20 || hour < 8);
    if (isPeakHours) {
        charge += charge * 0.10;
    }
    
    console.log(charge ,"total Bill")
    document.getElementById("calculate").textContent= `$ ${charge.toFixed(2)}`
    
}

///ques 10-->
function calculateFlightFare(event) {
    event.preventDefault();
  let Basefare = 300;
  let discount = 0;
  let extraCharge = 0;
  let selectedClass = document.getElementById("class").value;
  let yourAge = parseInt(document.getElementById("yourAge").value);
  let luggageWeight = parseInt(document.getElementById("luggage").value);
  let isStudent = document.getElementById("student");

  if (selectedClass === "Buisness") {
    extraCharge +=  200;
  } else if (selectedClass === "First") {
    extraCharge +=  500;
  }

  if (luggageWeight > 20) {
    let extraWeight = luggageWeight - 20;
    extraCharge = extraCharge +  Math.ceil(extraWeight / 10) * 50;
  }

 
  let finalPrice = Basefare + extraCharge;


  if (isStudent.checked === true) {
    discount = 0.15 ;
  } else if (yourAge > 60) {
    discount = 0.10 ;
  }

  let discountAmount = finalPrice*discount 
  finalPrice= finalPrice - discountAmount;

  console.log(finalPrice);
  
  document.getElementById("finalPrice").textContent=`Total Fare: $ ${finalPrice.toFixed(2)}`
}


