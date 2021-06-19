import React, { useState, useEffect }  from 'react'
import DateRange from './DateRange'
import Welkin from './Welkin'
import BattlePass from './BattlePass'
import CurrentPrimo from './CurrentPrimo'
import Calculate from './Calculate'

function App() {
	const [start_date, setStartDate] = useState();
	const [end_date, setEndDate] = useState();
	const [welkin, setWelkin] = useState(false);
	const [bp, setBp] = useState(false);
	const [current_primogems, setCurrentPrimogems] = useState(0);
	// const [isLoaded, setIsLoaded] = useState(false);
	const [show, setShow] = useState(false);
	const [paimongems, setPaimongems] = useState({})

	useEffect(
		() => {
		  let timer1 = setTimeout(() => setShow(true), 500);
		  return () => {
			clearTimeout(timer1);
		  };
		},
		[]
	  );

	// async function fetchUserData() {
	// 	const response = await fetch("/api/v1/primogems");
	// 	setCalculation(await response.json());
	// }
	
	// useEffect(() => {
	// 	fetchUserData();
	// 	console.log(calculation)
	// },[calculation.current_primogems]);


	async function postPaimonData(params) {
		try {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json','Accept': 'application/json' },
				body: JSON.stringify(params)
			};
			const response = await fetch("/api/v1/primogems", requestOptions)
    		const data = await response.json();
			setPaimongems(data)
		  } catch (err) {
			console.error('err', err);
		  }
		
		// setIsLoaded(true);
	
		
		
	}

	useEffect(() => {
		postPaimonData()
	},[paimongems]);


	const onClickWelkin = (event) => {
		setWelkin(!welkin)
		// console.log(`Welkin: ${event.target.checked}`);
	}

	const onClickBp = (event) => {
		setBp(!bp)
		// console.log(`BP: ${event.target.checked}`);
	}

	const onPrimogemChange = (event) => {
		let temp_primos = Number(event.target.value)
		setCurrentPrimogems(temp_primos)
		// console.log(`Calculate: ${event.target.value}`);
	}


	function onCalculateClick(event) {
		const s_date = formatDate(new Date(document.getElementById('start_date').value))
		const e_date = formatDate(new Date(document.getElementById('end_date').value))
		
		event.preventDefault()
		const paimon_data = {
			date_from: s_date,
			date_to: e_date,
			welkin: welkin,
			bp: bp,
			current_primogems: current_primogems
		}
	
		postPaimonData(paimon_data)
		// console.log(paimon_data)
    }
	
	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
	
		if (month.length < 2) 
			month = '0' + month;
		if (day.length < 2) 
			day = '0' + day;
	
		return [year, month, day].join('-');
	}


	
	return show ? (
		<div className="main">
		 	<div>
		 		<DateRange />
		 	</div>
		 	<div className="container">
		 		<div className="row">
		 			<div className="col">
		 				<Welkin welkinClick={onClickWelkin}/>
		 				<BattlePass bpClick={onClickBp} />
		 			</div>
		 		</div>
		 	</div>
		 	<div className="container">
		 		<div className="row">
		 			<div className="col">
		 			<CurrentPrimo primogemChange={onPrimogemChange}/>
		 			</div>
		 			<div className="col">
		 			<Calculate
		 				calculateClick={onCalculateClick}
		 			/>
		 			</div>
		 		</div>
		 	</div>	 
			<div className="container my-4">
		 		<div className="row">
		 			<div className="col">
						<div className="card border-light mb-3">
							<div className="card-header">Primogems</div>
							<div className="card-body">
								<p className="card-title">No. of Days: {paimongems.number_of_days}</p>
								<p className="card-text">Daily Check-in: <small className="text-danger">Beta</small></p>
								<p className="card-text">Daily Primos: {paimongems.daily_primos}</p>
								<p className="card-text">Abyss: {paimongems.abyss}</p>
								<p className="card-text">Battle Pass: {paimongems.battle_pass}</p>
								<p className="card-text text-primary"><strong>Acquaint Fate: {paimongems.a_fates}</strong></p>
								<p className="card-text" style={{color: "#C06AB5"}}><strong>Intertwined Fate: {paimongems.i_fates}</strong></p>

								{/* {(paimongems.total_primogems) === 0 ? `Fate: ${(paimongems.i_fates)}` : ""} */}
								
								
								<h6 className="card-text text-success"><strong>Total: {(paimongems.total_primogems) ? (paimongems.total_primogems) : 0}</strong></h6>
								<h6 className="card-text text-warning"><strong>Pulls: {(paimongems.total_primogems) ? ~~((paimongems.total_primogems)/160) : 0} </strong>(Does not include fates)</h6>
							</div>
							<div>
								<br />
								<h6 className="card-text">
									<small><em>The project is currently in Beta. Calculations are not final.</em></small>
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) :  <div className="loader"></div>
}

export default App