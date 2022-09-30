import axios from 'axios'
import React, { useState } from 'react'

const ExchangeRate = () => {
  const [currency, setCurrency] = useState({
    firstCurrency: 'DZD',
    secondCurrency: 'INR',
  })

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  })

  const [value, setValue] = useState('')
  const [showValue, setShowValue] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleChange = (e) => {
    setCurrency((prevDetails) => {
      return {
        ...prevDetails,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleDateChange = (e) => {
    setDate((prevDetails) => {
      return {
        ...prevDetails,
        [e.target.name]: e.target.value,
      }
    })
  }

  const sendRequestToBackend = async () => {
  console.log(date)
    if (date.day === '' || date.month === '' || date.year === '') {
      return {
        message: 'All fields are required',
        success: false,
      }
    }
    const url = `http://localhost:5000/api/20${date.year}/exchangerate`
    const res = await axios
      .post(url, {
        firstCurrency: currency.firstCurrency,
        secondCurrency: currency.secondCurrency,
        day: date.day,
        month: date.month,
        year: date.year,
      })
      .catch((err) => {
        return {
          data: {
            success: false,
            message: 'Probems in fetching data',
          },
        }
      })

    const data = await res.data
    return data
  }

  const handleSubmit = () => {
    sendRequestToBackend().then((data) => {
      console.log(data)
      if (!data.success) {
        setValue('')
        setShowValue(false)
        setErrorMessage(data.message)
        setShowErrorMessage(true)
        setTimeout(() => {
          setShowErrorMessage(false)
        }, 4000)
      } else {
        setValue(data.value)
        setShowValue(true)
      }
    })
  }

  return (
    <div className="bg-gray-100 flex flex-col gap-y-[10vh]  items-center justify-center min-h-[100vh]">
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
      <div className="date flex flex-col gap-x-[2vw] gap-y-[2vh]">
        {errorMessage && showErrorMessage && (
          <div className="error-message">
            <h2 className="font-serif">{errorMessage}</h2>
          </div>
        )}
        <div className="flex items-center gap-x-[2vw] ">
          <label htmlFor="day">Day: </label>
          <input
            type="text"
            name="day"
            value={date.day}
            onChange={handleDateChange}
            className="outline-none border-2 border-black rounded-md px-[0.5vw] py-[0.5vh]"
            placeholder="3"
          />
        </div>
        <div className="flex items-center gap-x-[2vw] ">
          <label htmlFor="month">Month: </label>
          <input
            type="text"
            name="month"
            value={date.month}
            onChange={handleDateChange}
            className="outline-none border-2 border-black rounded-md px-[0.5vw] py-[0.5vh]"
            placeholder="Jan"
          />
        </div>
        <div className="flex items-center gap-x-[2vw] ">
          <label htmlFor="year">Year: </label>
          <input
            type="text"
            name="year"
            value={date.year}
            onChange={handleDateChange}
            className="outline-none border-2 border-black rounded-md px-[0.5vw] py-[0.5vh]"
            placeholder="12"
          />
        </div>
        <div
          onClick={handleSubmit}
          className="submit border-2 border-black w-fit px-[1vw] py-[0.5vh] rounded-md cursor-pointer bg-red-500 mt-[1vh]"
        >
          <h2 className="font-serif text-white">Find</h2>
        </div>

        {value && showValue && (
          <div className="w-fit px-[1vw] py-[0.5vh] bg-white rounded-md border-2 border-black">
            <h2 className="font-serif font-semibold">
              1 {currency.firstCurrency} = {value} {currency.secondCurrency}
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExchangeRate
