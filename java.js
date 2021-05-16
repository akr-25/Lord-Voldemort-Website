var search = document.querySelector("#search")
var scam = document.querySelector("#scam")
var poor = document.querySelector("#Poor")
var secret = document.querySelector("#secretswitch")
var h1 = document.querySelector("#sec5h1")
var h2 = document.querySelector("#sec5h2")
var p = document.querySelector("#sec5p")
var about = document.querySelector("#about")
var tom = document.querySelector("#tom")


search.addEventListener('click',function(){
    alert("Developer ko itna nahi aata \nCute Emojis :)")
})

scam.addEventListener('click',function(){
    alert("Please first pay $10,000 at scam@upi.\nThank you ;)")
})

poor.addEventListener('click',function(){
    alert("You are broke!!!!\nPlease clear your dues first, then I'll steal.")
})

secret.addEventListener('click', function(){
    h1.textContent = "Secret Message"
    h2.textContent = "Smile! Smile!! Smile!!!"
    p.textContent = "Next time you are feeling down, try putting on a smile. There's a good chance your mood will change for the better. The physical act of smiling actually activates pathways in your brain that influence your emotional state—meaning that by adopting a happy facial expression, you can trick your mind into entering a state of happiness. This holds true whether or not your smile is real."
})

about.addEventListener('click', function(){
    h1.textContent = "Aman Kumar"
    h2.textContent = "I am always serious. I lie a lot."
    p.textContent = "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "
})

tom.addEventListener('click', function(){
    h1.textContent = "Our Moto"
    h2.textContent = "One Life, One Goal, One Kill"
    p.textContent = "We don't believe in mass killings. Choose your target, study him, and done! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus magni suscipit dicta modi, exercitationem magnam praesentium et. Autem animi eum placeat officiis quaerat a quo aliquam impedit eaque ipsum!"
})