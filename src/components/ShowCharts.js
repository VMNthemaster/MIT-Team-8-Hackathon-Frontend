import React from 'react'
import Chart from './Chart'
import useState from 'react-usestateref'
import HalfYearChart from './HalfYearChart'
import QuarterlyChart from './QuarterlyChart'

const ShowCharts = () => {
  const [currency, setCurrency] = useState({
    firstCurrency: 'DZD',
    secondCurrency: 'INR',
  })
  console.log(currency)
  const [duration, setDuration] = useState('M')
  console.log(duration)
  const [yearlyData, setYearlyData, getYearlyData] = useState({})
  const [showYearlyData, setShowYearlyData] = useState(false)
  const [halfYearlyData, setHalfYearlyData] = useState({})
  const [showHalfYearlyData, setShowHalfYearlyData] = useState(false)
  const [quarterYearlyData, setQuarterYearlyData] = useState({})
  const [showQuarterYearlyData, setShowQuarterYearlyData] = useState(false)

  const [year, setYear] = useState(2022)
  console.log(year)
  const handleChange = (e) => {
    setCurrency((prevDetails) => {
      return {
        ...prevDetails,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleYearChange = (e) => {
    setYear(e.target.value)
  }

  const handleSubmit = (duration) => {
    console.log('clicked')
    if (duration === 'Y') {
    }
  }

  return (
    <div className="min-h-[100vh] bg-gray-100 flex flex-col items-center justify-around">
      <div className="currencies flex items-center gap-x-[3vw]">
        <div className="firstCurrency flex items-center gap-x-[1vw]">
          <h2 className="font-serif">First Currency</h2>
          <select
            className="w-[35vw] md:w-[10vw] px-[1vw] py-[0.75vh] text-lg md:text-[1.35rem] rounded-md outline-none font-serif border-[0.5px] md:border-2 border-gray-400"
            value={currency.firstCurrency}
            onChange={handleChange}
            name="firstCurrency"
          >
            <option className="rounded-md font-serif" value="DZD">
              DZD
            </option>

            <option className="rounded-md font-serif" value="AUD">
              AUD
            </option>
            <option className="rounded-md font-serif" value="BHD">
              BHD
            </option>

            <option className="rounded-md font-serif" value="VES">
              VES
            </option>

            <option className="rounded-md font-serif" value="VEF">
              VEF
            </option>

            <option className="rounded-md font-serif" value="BWP">
              BWP
            </option>

            <option className="rounded-md font-serif" value="BRL">
              BRL
            </option>

            <option className="rounded-md font-serif" value="BND">
              BND
            </option>

            <option className="rounded-md font-serif" value="CAD">
              CAD
            </option>

            <option className="rounded-md font-serif" value="CLP">
              CLP
            </option>

            <option className="rounded-md font-serif" value="CNY">
              CNY
            </option>

            <option className="rounded-md font-serif" value="COP">
              COP
            </option>

            <option className="rounded-md font-serif" value="CZK">
              CZK
            </option>

            <option className="rounded-md font-serif" value="DKK">
              DKK
            </option>
            <option className="rounded-md font-serif" value="EUR">
              EUR
            </option>
            <option className="rounded-md font-serif" value="HUF">
              HUF
            </option>
            <option className="rounded-md font-serif" value="ISK">
              ISK
            </option>

            <option className="rounded-md font-serif" value="INR">
              INR
            </option>

            <option className="rounded-md font-serif" value="IDR">
              IDR
            </option>

            <option className="rounded-md font-serif" value="IRR">
              IRR
            </option>

            <option className="rounded-md font-serif" value="ILS">
              ILS
            </option>
            <option className="rounded-md font-serif" value="JPY">
              JPY
            </option>

            <option className="rounded-md font-serif" value="KZT">
              KZT
            </option>

            <option className="rounded-md font-serif" value="KRW">
              KRW
            </option>

            <option className="rounded-md font-serif" value="KWD">
              KWD
            </option>

            <option className="rounded-md font-serif" value="LYD">
              LYD
            </option>

            <option className="rounded-md font-serif" value="MYR">
              MYR
            </option>

            <option className="rounded-md font-serif" value="MUR">
              MUR
            </option>

            <option className="rounded-md font-serif" value="MXN">
              MXN
            </option>

            <option className="rounded-md font-serif" value="NPR">
              NPR
            </option>

            <option className="rounded-md font-serif" value="NZD">
              NZD
            </option>

            <option className="rounded-md font-serif" value="NOK">
              NOK
            </option>

            <option className="rounded-md font-serif" value="OMR">
              OMR
            </option>
            <option className="rounded-md font-serif" value="PKR">
              PKR
            </option>

            <option className="rounded-md font-serif" value="PEN">
              PEN
            </option>

            <option className="rounded-md font-serif" value="PHP">
              PHP
            </option>

            <option className="rounded-md font-serif" value="PLN">
              PLN
            </option>

            <option className="rounded-md font-serif" value="QAR">
              QAR
            </option>

            <option className="rounded-md font-serif" value="RUB">
              RUB
            </option>

            <option className="rounded-md font-serif" value="SAR">
              SAR
            </option>

            <option className="rounded-md font-serif" value="SGD">
              SGD
            </option>

            <option className="rounded-md font-serif" value="ZAR">
              ZAR
            </option>

            <option className="rounded-md font-serif" value="LKR">
              LKR
            </option>

            <option className="rounded-md font-serif" value="SEK">
              SEK
            </option>

            <option className="rounded-md font-serif" value="CHF">
              CHF
            </option>

            <option className="rounded-md font-serif" value="THB">
              THB
            </option>

            <option className="rounded-md font-serif" value="EHP">
              EHP
            </option>
            <option className="rounded-md font-serif" value="TTD">
              TTD
            </option>

            <option className="rounded-md font-serif" value="TND">
              TND
            </option>
            <option className="rounded-md font-serif" value="AED">
              AED
            </option>
            <option className="rounded-md font-serif" value="GBP">
              GBP
            </option>

            <option className="rounded-md font-serif" value="USD">
              USD
            </option>

            <option className="rounded-md font-serif" value="UYU">
              UYU
            </option>
          </select>
        </div>
        <div className="secondCurrency flex items-center gap-x-[1vw]">
          <h2 className="font-serif">Second Currency</h2>
          <select
            className="w-[35vw] md:w-[10vw] px-[1vw] py-[0.75vh] text-lg md:text-[1.35rem] rounded-md outline-none font-serif border-[0.5px] md:border-2 border-gray-400"
            value={currency.secondCurrency}
            onChange={handleChange}
            name="secondCurrency"
          >
            <option className="rounded-md font-serif" value="DZD">
              DZD
            </option>

            <option className="rounded-md font-serif" value="AUD">
              AUD
            </option>
            <option className="rounded-md font-serif" value="BHD">
              BHD
            </option>

            <option className="rounded-md font-serif" value="VES">
              VES
            </option>

            <option className="rounded-md font-serif" value="VEF">
              VEF
            </option>

            <option className="rounded-md font-serif" value="BWP">
              BWP
            </option>

            <option className="rounded-md font-serif" value="BRL">
              BRL
            </option>

            <option className="rounded-md font-serif" value="BND">
              BND
            </option>

            <option className="rounded-md font-serif" value="CAD">
              CAD
            </option>

            <option className="rounded-md font-serif" value="CLP">
              CLP
            </option>

            <option className="rounded-md font-serif" value="CNY">
              CNY
            </option>

            <option className="rounded-md font-serif" value="COP">
              COP
            </option>

            <option className="rounded-md font-serif" value="CZK">
              CZK
            </option>

            <option className="rounded-md font-serif" value="DKK">
              DKK
            </option>
            <option className="rounded-md font-serif" value="EUR">
              EUR
            </option>
            <option className="rounded-md font-serif" value="HUF">
              HUF
            </option>
            <option className="rounded-md font-serif" value="ISK">
              ISK
            </option>

            <option className="rounded-md font-serif" value="INR">
              INR
            </option>

            <option className="rounded-md font-serif" value="IDR">
              IDR
            </option>

            <option className="rounded-md font-serif" value="IRR">
              IRR
            </option>

            <option className="rounded-md font-serif" value="ILS">
              ILS
            </option>
            <option className="rounded-md font-serif" value="JPY">
              JPY
            </option>

            <option className="rounded-md font-serif" value="KZT">
              KZT
            </option>

            <option className="rounded-md font-serif" value="KRW">
              KRW
            </option>

            <option className="rounded-md font-serif" value="KWD">
              KWD
            </option>

            <option className="rounded-md font-serif" value="LYD">
              LYD
            </option>

            <option className="rounded-md font-serif" value="MYR">
              MYR
            </option>

            <option className="rounded-md font-serif" value="MUR">
              MUR
            </option>

            <option className="rounded-md font-serif" value="MXN">
              MXN
            </option>

            <option className="rounded-md font-serif" value="NPR">
              NPR
            </option>

            <option className="rounded-md font-serif" value="NZD">
              NZD
            </option>

            <option className="rounded-md font-serif" value="NOK">
              NOK
            </option>

            <option className="rounded-md font-serif" value="OMR">
              OMR
            </option>
            <option className="rounded-md font-serif" value="PKR">
              PKR
            </option>

            <option className="rounded-md font-serif" value="PEN">
              PEN
            </option>

            <option className="rounded-md font-serif" value="PHP">
              PHP
            </option>

            <option className="rounded-md font-serif" value="PLN">
              PLN
            </option>

            <option className="rounded-md font-serif" value="QAR">
              QAR
            </option>

            <option className="rounded-md font-serif" value="RUB">
              RUB
            </option>

            <option className="rounded-md font-serif" value="SAR">
              SAR
            </option>

            <option className="rounded-md font-serif" value="SGD">
              SGD
            </option>

            <option className="rounded-md font-serif" value="ZAR">
              ZAR
            </option>

            <option className="rounded-md font-serif" value="LKR">
              LKR
            </option>

            <option className="rounded-md font-serif" value="SEK">
              SEK
            </option>

            <option className="rounded-md font-serif" value="CHF">
              CHF
            </option>

            <option className="rounded-md font-serif" value="THB">
              THB
            </option>

            <option className="rounded-md font-serif" value="EHP">
              EHP
            </option>
            <option className="rounded-md font-serif" value="TTD">
              TTD
            </option>

            <option className="rounded-md font-serif" value="TND">
              TND
            </option>
            <option className="rounded-md font-serif" value="AED">
              AED
            </option>
            <option className="rounded-md font-serif" value="GBP">
              GBP
            </option>

            <option className="rounded-md font-serif" value="USD">
              USD
            </option>

            <option className="rounded-md font-serif" value="UYU">
              UYU
            </option>
          </select>
        </div>
      </div>
      <div className="graph flex flex-col gap-y-[3vh]">
        <div className="flex duration-buttons gap-x-[3vw]">
          <div
            onClick={() => setDuration('W')}
            className="weekly border-2 border-black rounded-md px-[1vw] py-[0.5vh] cursor-pointer"
          >
            <h2 className="">W</h2>
          </div>
          <div
            onClick={() => setDuration('M')}
            className="monthly border-2 border-black rounded-md px-[1vw] py-[0.5vh] cursor-pointer"
          >
            <h2 className="">M</h2>
          </div>
          <div
            onClick={() => setDuration('Q')}
            className="quarterly border-2 border-black rounded-md px-[1vw] py-[0.5vh] cursor-pointer"
          >
            <h2 className="">Q</h2>
          </div>
          <div
            onClick={() => {
              setShowYearlyData(false)
              setShowHalfYearlyData(true)
              setDuration('H')
              handleSubmit('Y')
            }}
            className="half-yearly border-2 border-black rounded-md px-[1vw] py-[0.5vh] cursor-pointer"
          >
            <h2 className="">H</h2>
          </div>
          <div
            onClick={() => {
              setShowHalfYearlyData(false)
              setShowYearlyData(true)
              setDuration('Y')
              handleSubmit('Y')
            }}
            className="yearly border-2 border-black rounded-md px-[1vw] py-[0.5vh] cursor-pointer"
          >
            <h2 className="">Y</h2>
          </div>
          <div className="year">
            <select
              className="w-[35vw] md:w-[10vw] px-[1vw] py-[0.75vh] text-lg md:text-[1.35rem] rounded-md outline-none font-serif border-[0.5px] md:border-2 border-gray-400"
              // value={questions.q1Type}
              onChange={handleYearChange}
              name="year"
            >
              <option className="rounded-md font-serif" value="2022">
                2022
              </option>
              <option className="rounded-md font-serif" value="2021">
                2021
              </option>
              <option className="rounded-md font-serif" value="2020">
                2020
              </option>
              <option className="rounded-md font-serif" value="2019">
                2019
              </option>
              <option className="rounded-md font-serif" value="2018">
                2018
              </option>
              <option className="rounded-md font-serif" value="2017">
                2017
              </option>
              <option className="rounded-md font-serif" value="2016">
                2016
              </option>
              <option className="rounded-md font-serif" value="2015">
                2015
              </option>
              <option className="rounded-md font-serif" value="2014">
                2014
              </option>
              <option className="rounded-md font-serif" value="2013">
                2013
              </option>
              <option className="rounded-md font-serif" value="2012">
                2012
              </option>
            </select>
          </div>
        </div>

        
          {/* <div>
            <Chart
              yearlyData={yearlyData}
              setYearlyData={setYearlyData}
              getYearlyData={getYearlyData.current}
              showYearlyData={showYearlyData}
              setShowYearlyData={setShowYearlyData}
              firstCurrency={currency.firstCurrency}
              secondCurrency={currency.secondCurrency}
              year={year}
            />
          </div> */}
        

        
          {/* <div className="halfYearlyChart">
            <HalfYearChart
              halfYearlyData={halfYearlyData}
              setHalfYearlyData={setHalfYearlyData}
              showHalfYearlyData={showHalfYearlyData}
              setShowHalfYearlyData={setShowHalfYearlyData}
              firstCurrency={currency.firstCurrency}
              secondCurrency={currency.secondCurrency}
              year={year}
            />
          </div> */}

          <div className="halfYearlyChart">
            <QuarterlyChart
              quarterYearlyData={quarterYearlyData}
              setQuarterYearlyData={setQuarterYearlyData}
              showQuarterYearlyData={showQuarterYearlyData}
              setShowQuarterYearlyData={setShowQuarterYearlyData}
              firstCurrency={currency.firstCurrency}
              secondCurrency={currency.secondCurrency}
              year={year}
            />
          </div>
        
      </div>
    </div>
  )
}

export default ShowCharts
