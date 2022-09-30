import React, {useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const Chart = (props) => {
  const {
    firstCurrency,
    secondCurrency,
    year
  } = props
  const [newData, setNewData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  // run query here
  const yearlyRequest = async () => {
    const url = `http://localhost:5000/api/${year}/yearlyData`
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
    yearlyRequest().then((data) => {
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
          labels: year === 2022 ? ['Jan', 'Aug'] : ['Jan', 'Dec'],
          datasets: [
            {
              label: 'Trend',
              data: newData,
              backgroundColor: 'rgba(255,150,203,0.9)',
              borderColor: 'red',
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

export default Chart
