export const individualCalc = (a,b,c,d,e,f,g)=>{
	const
		prem = 134,
		fpl1808 = 4320,
		fpl18 = [0,
			12140,
			16460,
			20780,
			25100,
			29420,
			33740,
			38060,
			42380
		];
	let
		premium = 0,
		income = 0,
		capitalGainsContribution = 0,
		// householdPremium = 0,
		adjustedGrossIncome = parseInt(a,10),
		spouseAGI = parseInt(b,10),
		capitalGains = parseInt(c,10),
		currentPremium = parseInt(d,10),
		sizeOfHousehold = parseInt(e, 10),
		numberOfAdults = parseInt(f, 10),
		filingStatus = parseInt(g, 10);

	function calc200fpl(size) {
		if (size > 8) {
			let extra = size - 8;
			extra *= fpl1808;
			return (fpl18[8] + extra) * 2;
		} else {
			return fpl18[size] * 2;
		}
	}

	const fpl200 = calc200fpl(sizeOfHousehold);
	if(fpl200 < (adjustedGrossIncome+spouseAGI)){
		if(status == 'joint'){
			premium = ((prem*numberOfAdults)*12);
		} else {premium = ((prem)*12);}
		console.log('multiplying premium by 12');
	}
	console.log(premium);
	if(adjustedGrossIncome < 15000){
		income = 0;
	}else if(adjustedGrossIncome >= 15000){
		income = ((adjustedGrossIncome-15000)*0.01);
	}

	if(capitalGains < 15000){
		capitalGainsContribution = 0;
	}else if(capitalGains >= 15000 && capitalGains < 60000){
		const ltcg = (15000 - (capitalGains*0.25));
		capitalGainsContribution = ((capitalGains - ltcg)*0.085);
	}else if(capitalGains >= 60000){
		capitalGainsContribution = (capitalGains*0.085);
	}

	const totalPersonalContribution = (income + capitalGainsContribution + premium);
	const savings = currentPremium*12 - totalPersonalContribution;
	return { fpl200, income, savings, capitalGainsContribution, premium, totalPersonalContribution, currentPremium, filingStatus, numberOfAdults };
};
