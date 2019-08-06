import businesses from "./data.js"

const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.

const propertyZIP = "addressZipCode"

// forEach() Method
// businesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//         ${business.addressFullStreet}
//     </section>
//         ${business.addressCity},
//         ${business['addressStateCode']}
//         ${business[propertyZIP]}
//     <section>

//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// })

const renderBusinesses = (businessesArray) => {
    businessesArray.forEach(business => {
        outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
        ${business.addressFullStreet}
    </section>
        ${business.addressCity},
        ${business['addressStateCode']}
        ${business[propertyZIP]}
    <section>

    </section>
  `
        outEl.innerHTML += "<hr/>"
    })
}

/* -------------------------------------------------------------------------------------------------
        Filter() Method
   --------------------------------------------------------------------------------------------------*/

// const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY")
// renderBusinesses(newYorkBusinesses)

// const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")
// renderBusinesses(manufacturingBusinesses)

/* -------------------------------------------------------------------------------------------------
        Map() Method
   --------------------------------------------------------------------------------------------------*/

// outEl.innerHTML += "<h1>Purchasing Agents</h1>"
// Using map(), you extract the purchasing agent object from each business and store it in a new array

// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
//   outEl.innerHTML += "<hr/>";
// })

// Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

// const agents = businesses.map(business => {
//     return {
//         fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//         company: business.companyName,
//         phoneNumber: business.phoneWork
//     }
// })

// agents.forEach(agent => {
//     outEl.innerHTML += `<h2>${agent.fullName}</h2>`
//     outEl.innerHTML += `<p>${agent.company}</p>`
//     outEl.innerHTML += `<p>${agent.phoneNumber}</p>`
//     outEl.innerHTML += "<hr/>";
// })

/* -------------------------------------------------------------------------------------------------
        Find() Method
   --------------------------------------------------------------------------------------------------*/
// outEl.innerHTML = "<h1>Active Businesses</h1>"
   document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `
        }
    })

