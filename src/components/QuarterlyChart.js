import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const QuarterlyChart = (props) => {
    const {
        firstCurrency,
        secondCurrency,
        year,
      } = props

      const [newData, setNewData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const quarterYearlyRequest = async () => {
    const url = `http://localhost:5000/api/${year}/quarterYearlyData`
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
    quarterYearlyRequest().then((data) => {
      console.log(data)
      if(data.success){
        setNewData(data.newArray)
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
          labels: ['Jan', 'Apr', 'Jul', 'Oct', 'Dec'],
          datasets: [
            {
              label: 'Trend',
              data: newData,
              backgroundColor: 'rgba(0,0,255,0.6)',
              borderColor: 'cyan',
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

export default QuarterlyChart