$(document).ready(function () {

    $("#submitBtn").on("click", function calculate() {
        const filingStatus = $("#filingStatus").find(":selected").text()
        const AGI = $("#agi").val()
        const child0to5 = $("#child0to5").val()
        const child6to17 = $("#child6to17").val()
        const totalChildCredit = child0to5*3600 + child6to17*3000
        const totalCTC = $("#totalCTC")
        // const totalCTCtext = (totalChildCredit - phaseoutTotal)

        if (filingStatus == "Married Filing Jointly" && (AGI >= 150000)) {
            const AGIdiff = AGI - 150000
            const per1000 = AGIdiff/1000
            var phaseoutTotal = per1000*50
            console.log(phaseoutTotal)
        }
        else if (filingStatus == "Married Filing Jointly" && (AGI < 150000)) {
            var phaseoutTotal = 0
        }


            console.log(totalChildCredit - phaseoutTotal)
            totalCTC.append("<h3>" + (totalChildCredit - phaseoutTotal) + "</h3>" )
    }


    )
}

)
