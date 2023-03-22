//changing DOM elements using javascript
let body = document.querySelector("body")
body.style.backgroundColor = "lightPink"

function changeTopic(topic) {
    //1.select the target element
    let h2 = document.querySelector("h2")
    h2.textContent = topic
    h2.style.color = "Blue"
}

changeTopic("Welcome Thursday Class!!")

function changeLabels() {
    let form = document.querySelector("#form")
    form.style.fontFamily = "monospace"  
    
    let submitBtn = document.querySelector("#submit")
    submitBtn.style.fontFamily = "monospace"

    let feedbackForm = document.querySelector(".feedback")
    feedbackForm.style.fontFamily = "monospace"
}

changeLabels()

let form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = {
        fullName: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    console.log(formData)
})

function submitFeedback() {
    //grab the feedback form
    let feedbackForm = document.querySelector(".feedback")
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let feedbackInput = e.target.note.value
        let p = document.createElement("p")
        p.textContent = `${feedbackInput} `
        let btn = document.createElement("button")
        btn.addEventListener("click", handleDelete)
        btn.textContent = "x"
        btn.id = "btn"
        p.appendChild(btn)
        let container = document.querySelector(".section")
        container.appendChild(p)
        feedbackForm.reset()
    })
}
submitFeedback()

function handleDelete(e) {
    e.target.parentNode.remove()
}



