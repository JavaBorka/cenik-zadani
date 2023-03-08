// CVIČENÍ 3

const selectPlan = (planNumber) => {
    const plan1 = document.querySelector("#plan1")
    const plan2 = document.querySelector("#plan2")
    const plan3 = document.querySelector("#plan3")

    if (planNumber === 1) {
        plan1.classList.add("plan--selected")
    }
    if (planNumber === 2) {
        plan2.classList.add("plan--selected")
        plan1.classList.remove("plan--selected")

    }
    if (planNumber === 3) {
        plan3.classList.add("plan--selected")
        plan1.classList.remove("plan--selected")
    }
}

selectPlan(3)
