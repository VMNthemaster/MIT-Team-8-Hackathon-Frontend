import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const HalfYearChart = (props) => {
  const {
    setShowHalfYearlyData,
    firstCurrency,
    secondCurrency,
    year,
  } = props

  const [newData, setNewData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const halfYearlyRequest = async () => {
    const url = `http://localhost:5000/api/${year}/halfYearlyData`
    const res = await axios
      .post(url, {
        firstCurrency: firstCurrency,
        secondCurrency: secondCurrency,
      })
      .catch((err) => {
        return {
          data: {
            success: false,
          },
        }
      })

    const data = await res.data
    return data
  }

  useEffect(() => {
    halfYearlyRequest().then((data) => {
      console.log(data)
      // setYearlyData(data)
      if(data.success){
        setNewData(data.newArray)
        setShowHalfYearlyData(true)
      }
      else{
        setErrorMessage('Difficulty in fetching....')
        setShowErrorMessage(true)
        setInterval(() => {
          setShowErrorMessage(false)
        }, 3000);
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCurrency, secondCurrency, year])

  return (
    <div>
      {errorMessage && showErrorMessage && <h2>{errorMessage}</h2>}
      <Line
        data={{
          labels: ['Jan', 'Jun', 'Dec'],
          datasets: [
            {
              label: 'Trend',
              data: newData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default HalfYearChart
